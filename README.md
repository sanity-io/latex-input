# LaTeX input for Sanity

> **NOTE**
>
> This is the **Sanity Studio v2 version** of sanity-plugin-latex-input.
>
> For the v3 version, please refer to the [v3-branch](https://github.com/sanity-io/sanity-plugin-latex-input).

https://sanity.io

## Usage

```
sanity install sanity-plugin-latex-input@studio-v2
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
