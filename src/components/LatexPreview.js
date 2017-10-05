import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import katex from 'katex'
import styles from './LatexPreview.css'
import {detect} from 'detect-browser'
const browser = detect()
const mathMlBrowsers = ['firefox', 'safari']

export default class LatexPreview extends PureComponent {
  static propTypes = {
    layout: PropTypes.string,
    value: PropTypes.shape({
      _type: PropTypes.string,
      body: PropTypes.string
    })
  }

  state = {
    mathMlSupport: false
  }

  componentWillMount() {
    if (browser && mathMlBrowsers.includes(browser.name)) {
      this.setState({mathMlSupport: true})
    }
  }

  renderDefaultPreview() {
    const {value} = this.props
    return (
      <div className={styles.defaultPreviewContainer}>
        <div>{value && value.body ? value.body : 'empty'}</div>
      </div>
    )
  }

  renderBlockPreview() {
    const {mathMlSupport} = this.state
    const {body} = this.props.value || {}
    if (!body) {
      return <div>empty</div>
    }
    let renderedMath

    try {
      renderedMath = katex.renderToString(body, {displayMode: true})
    } catch (error) {
      if (error.name === 'ParseError') {
        return <div>Parse error at position: {error.position}</div>
      }
      return <div>Error while rendering math</div>
    }
    return (
      <div className={mathMlSupport ? styles.rootMathMl : styles.root}>
        <div dangerouslySetInnerHTML={{__html: renderedMath}} />
      </div>
    )
  }

  render() {
    const {layout} = this.props
    return layout === 'block' ? this.renderBlockPreview() : this.renderDefaultPreview()
  }
}
