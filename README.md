# LaTeX input for Sanity

https://sanity.io

## Usage

```
sanity install sanity-plugin-latex-input
```

You may now use the type name `latex` in your schema, such as in portable text.

## Example schema definition for portable text

```
import React from 'react'
const mathInlineIcon = () => (
  <span>
    <span style={{ fontWeight: 'bold' }}>∑</span>b
  </span>
)
const mathIcon = () => <span style={{ fontWeight: 'bold' }}>∑</span>

export default {
  name: 'portableTextWithLatex',
  type: 'array',
  title: 'Body',
  of: [
    {
      type: 'block',
      title: 'Block',
      of: [
        { type: 'latex', icon: mathInlineIcon, title: 'Inline math' },
      ],
    },
    { type: 'latex', icon: mathIcon, title: 'Math block' },
  ],
}
```

The Portable Text editor will render a preview of the contents with KaTeX.
