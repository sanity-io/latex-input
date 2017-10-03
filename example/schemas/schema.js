import createSchema from 'part:@sanity/base/schema-creator'
import fairytale from './fairytale'
import latex from 'part:@sanity/form-builder/input/latex/schema'

export default createSchema({
  name: 'default',
  types: [fairytale, latex]
})
