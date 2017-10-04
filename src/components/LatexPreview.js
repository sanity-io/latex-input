import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import katex from 'katex'
import styles from './LatexPreview.css'
import katexStyles from './Katext.css'

export default class LatexPreview extends PureComponent {
  static propTypes = {
    type: PropTypes.object,
    layout: PropTypes.string,
    value: PropTypes.shape({
      _type: PropTypes.string,
      body: PropTypes.string
    })
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
    const {body} = this.props.value || {}
    if (!body) {
      return <div>empty</div>
    }
    const renderedMath = katex.renderToString(body)
    // console.log(renderedMath)
    return <div className={katexStyles.katex} dangerouslySetInnerHTML={{__html: renderedMath}} />
  }

  render() {
    const {layout} = this.props
    return layout === 'block' ? this.renderBlockPreview() : this.renderDefaultPreview()
  }
}
