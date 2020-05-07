import React, { useState, useMemo } from 'react';
import KaTeX from 'katex';
import 'katex/dist/katex.min.css?raw';

type SchemaDefinition = {
  body?: string;
};

type PreviewProps = {
  value?: SchemaDefinition;
  layout?: string;
};

const LatexPreview = (props: PreviewProps) => {
  const latex = (props.value && props.value.body) || '';
  const isInline = props.layout === 'inline';
  const [html, setHtml] = useState<string>('');
  const createHtml = () => {
    setHtml(
      KaTeX.renderToString(latex, {
        displayMode: !isInline,
        throwOnError: false,
      })
    );
  };

  useMemo(createHtml, [latex, isInline]);
  if (isInline) {
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default LatexPreview;
