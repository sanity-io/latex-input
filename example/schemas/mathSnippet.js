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
      title: 'Various content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {type: 'latex', title: 'Latex'},
        {type: 'image', title: 'Image'}
      ]
    }
  ]
}
