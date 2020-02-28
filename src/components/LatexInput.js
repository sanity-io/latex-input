import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import AceEditor from 'react-ace'

import {get} from 'lodash'
import PatchEvent, {set, unset, setIfMissing} from '@sanity/form-builder/PatchEvent'
import FormField from 'part:@sanity/components/formfields/default'
import Fieldset from 'part:@sanity/components/fieldsets/default'
import {ACE_EDITOR_PROPS, ACE_SET_OPTIONS, SUPPORTED_THEMES, DEFAULT_THEME} from '../config'

import 'brace/mode/latex'
import 'brace/theme/github'
import 'brace/theme/monokai'
import 'brace/theme/terminal'
import 'brace/theme/tomorrow'

export default class CodeInput extends PureComponent {
  static propTypes = {
    level: PropTypes.number.isRequired,
    value: PropTypes.shape({
      _type: PropTypes.string,
      latex: PropTypes.string
    }),
    type: PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired
        })
      )
    }).isRequired,
    onChange: PropTypes.func
  }

  static defaultProps = {
    onChange() {}
  }

  state = {
    hasFocus: false
  }

  componentWillUnmount() {
    this.editor.removeListener('guttermousedown', this.handleGutterMouseDown)
  }

  handleContentChange = content => {
    const {type, onChange} = this.props
    const path = ['body']

    onChange(PatchEvent.from([setIfMissing({_type: type.name}), content ? set(content, path) : unset(path)]))
  }

  handleGutterMouseDown = event => {
    const target = event.domEvent.target
    if (target.classList.contains('ace_gutter-cell')) {
      const row = event.getDocumentPosition().row
      this.handleToggleSelectLine(row + 1) // Ace starts at row 0
    }
  }

  handleEditorLoad = editor => {
    this.editor = editor
    this.editor.focus()
    this.editor.on('guttermousedown', this.handleGutterMouseDown)
  }

  getTheme() {
    const preferredTheme = get(this.props.type, 'options.theme')
    return preferredTheme && SUPPORTED_THEMES.find(theme => theme === preferredTheme) ? preferredTheme : DEFAULT_THEME
  }

  renderEditor = () => {
    const {value} = this.props
    return (
      <AceEditor
        mode="latex"
        theme={this.getTheme()}
        width="100%"
        onChange={this.handleContentChange}
        name={`${this._inputId}__aceEditor`}
        value={(value && value.body) || ''}
        onLoad={this.handleEditorLoad}
        tabSize={2}
        setOptions={ACE_SET_OPTIONS}
        editorProps={ACE_EDITOR_PROPS}
      />
    )
  }

  render() {
    const {type, level} = this.props
    return (
      <Fieldset legend={'Input'} description={type.description}>
        <FormField level={level + 1}>{this.renderEditor()}</FormField>
      </Fieldset>
    )
  }
}

CodeInput.defaultProps = {
  value: {
    type: '',
    latex: ''
  }
}
