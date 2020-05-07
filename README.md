# LaTeX input for Sanity

https://sanity.io

## Usage

```
sanity install sanity-plugin-latex-input
```

You may now use the type name `latex` in your schema, such as in portable text.

## Example schema definition for portable text

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
        {type: 'latex', title: 'LaTeX'}
      ]
    }
  ]
}
```

The Portable Text editor will render a preview of the contents with KaTeX.
