import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import styles from './Preview.css'

import 'brace/mode/latex'

import 'brace/theme/github'
import 'brace/theme/monokai'
import 'brace/theme/terminal'
import 'brace/theme/tomorrow'

export default class CodePreview extends PureComponent {
  static propTypes = {
    type: PropTypes.object,
    layout: PropTypes.string,
    value: PropTypes.shape({
      _type: PropTypes.string,
      body: PropTypes.string
    })
  }

  render() {
    const {layout} = this.props
    return layout === 'block' ? this.renderBlockPreview() : this.renderDefaultPreview()
  }

  renderDefaultPreview() {
    const {value} = this.props
    return (
      <div className={styles.defaultPreviewContainer}>
        <div>renderDefaultPreview {value && value.body}</div>
      </div>
    )
  }
  renderBlockPreview() {
    const {value} = this.props
    return (
      <div className={styles.root}>
        <h3>renderBlockPreview {value && value.body}</h3>
        <div className={styles.aceWrapper}>studd</div>
      </div>
    )
  }
}
