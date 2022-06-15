import LatexPreview, { LatexPreviewProps } from './components/LatexPreview';
import { createPlugin, defineType, type PreviewValue } from 'sanity';

export { LatexPreview, type LatexPreviewProps };

export const latexInput = createPlugin({
  name: 'latex-block-plugin',
  schema: {
    types: [
      defineType({
        type: 'object',
        name: 'latex',
        components: {
          preview: LatexPreview,
        },
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
          prepare(selection: PreviewValue) {
            return selection;
          },
        },
      }),
    ],
  },
});
