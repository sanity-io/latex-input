import React, { useMemo, useState } from 'react';
import KaTeX from 'katex';

type SchemaDefinition = {
  body?: string;
};

export type LatexPreviewProps = {
  value?: SchemaDefinition;
  layout?: string;
};

const LatexPreview = (props: LatexPreviewProps) => {
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
  return (
    <>
      {isInline ? (
        // eslint-disable-next-line react/no-danger
        <span dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        // eslint-disable-next-line react/no-danger
        <div dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </>
  );
};

export default LatexPreview;
