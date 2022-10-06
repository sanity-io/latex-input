import LatexPreview, { LatexPreviewProps } from './components/LatexPreview';
import { createPlugin } from 'sanity';
import { latexSchema, LatexDefinition } from './schema';

export {
  LatexPreview,
  latexSchema,
  type LatexPreviewProps,
  type LatexDefinition,
};

export const latexInput = createPlugin({
  name: 'latex-block-plugin',
  schema: {
    types: [latexSchema],
  },
});
