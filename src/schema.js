import Preview from './components/Preview'

export default {
  name: 'latex',
  type: 'object',
  fields: [
    {
      title: 'Latex',
      name: 'body',
      type: 'text'
    }
  ],
  preview: {
    select: {
      body: 'body'
    },
    component: Preview
  }
}
