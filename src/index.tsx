import LatexPreview from './components/LatexPreview';

export default {
  name: 'latex',
  type: 'object',
  fields: [
    {
      title: 'LaTeX content',
      name: 'body',
      type: 'text',
    },
  ],
  preview: {
    select: {
      body: 'body',
    },
    prepare(selection: object) {
      return selection;
    },
    component: LatexPreview,
  },
};
