import LatexPreview from './components/LatexPreview';
import LatexInput from './components/LatexInput';

export default {
  name: 'latex',
  title: 'LaTeX',
  type: 'object',
  inputComponent: LatexInput,
  fields: [
    {
      title: 'LaTeX content',
      name: 'body',
      type: 'text'
    }
  ],
  preview: {
    select: {
      body: 'body'
    },
    prepare(selection) {
      return selection
    },
    component: LatexPreview
  }
};
