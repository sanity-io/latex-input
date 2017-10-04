import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import styles from './LatexPreview.css'
import {BlockMath} from 'react-katex'

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
    const renderError = error => {
      return <b>Failed to render latex: {error.name}</b>
    }
    return (
      <BlockMath math={body} renderError={renderError} />
    )
  }

  render() {
    const {layout} = this.props
    return layout === 'block' ? this.renderBlockPreview() : this.renderDefaultPreview()
  }
}
