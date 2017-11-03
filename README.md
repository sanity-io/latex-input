# LaTeX input for Sanity

https://sanity.io


## Usage
```
sanity install sanity-plugin-latex-input
```

Then require the part and add it to your schema like any other type:

```
import createSchema from 'part:@sanity/base/schema-creator'
import mathSnippet from './mathSnippet'
import latex from 'part:@sanity/form-builder/input/latex/schema'

export default createSchema({
  name: 'default',
  types: [mathSnippet, latex]
})
```

Example schema definition using latex math input
```
export default {
  name: 'mathSnippet',
  title: 'Math Snippet',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'latex', title: 'Latex'}
      ]
    }
  ]
}
```
