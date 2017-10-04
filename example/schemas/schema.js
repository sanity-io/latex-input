import createSchema from 'part:@sanity/base/schema-creator'
import mathSnippet from './mathSnippet'
import latex from 'part:@sanity/form-builder/input/latex/schema'

export default createSchema({
  name: 'default',
  types: [mathSnippet, latex]
})
