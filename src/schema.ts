import { defineType, ObjectDefinition, type PreviewValue } from 'sanity';
import LatexPreview from './components/LatexPreview';

const latexTypeName = 'latex' as const;

/**
 * @public
 */
export interface LatexDefinition
  extends Omit<ObjectDefinition, 'type' | 'fields'> {
  type: typeof latexTypeName;
}

declare module '@sanity/types' {
  // makes type: 'latex' narrow correctly when using defineType/defineField/defineArrayMember
  export interface IntrinsicDefinitions {
    latex: LatexDefinition;
  }
}

export const latexSchema = defineType({
  type: 'object',
  name: 'latex',
  title: 'LaTeX block',
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
    prepare(selection) {
      return selection as unknown as PreviewValue;
    },
  },
});
