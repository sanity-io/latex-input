# LaTeX input for Sanity

> **NOTE**
>
> This is the **Sanity Studio v3 version** of sanity-plugin-latex-input.
>
> For the v2 version, please refer to the [v2-branch](https://github.com/sanity-io/latex-input).

## What is it?

sanity-plugin-latex-input adds support for `latex` schema type, so it can be used in Portable Text Editor (PTE) in Sanity Studio.

![latex-input preview](assets/latex-input.png)

## Installation

```sh
npm install --save sanity-plugin-latex-input@studio-v3
```

or

```sh
yarn add sanity-plugin-latex-input@studio-v3
```

## Usage


Import and add the plugin to your studio config in sanity.config.ts (or .js):

```ts
import { latexBlock } from "sanity-plugin-latex-input";

export default createConfig({
  /* ... */

  plugins: [
      latexInput()
  ]
})
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

## License

MIT-licensed. See LICENSE.

## Develop & test

Make sure to run `npm run build` once, then run

```bash
npm run link-watch
```

In another shell, `cd` to your test studio and run:

```bash
npx yalc add sanity-plugin-latex-input --link && yarn install
```

Now, changes in this repo will be automatically built and pushed to the studio,
triggering hotreload. Yalc avoids issues with react-hooks that are typical when using yarn/npm link.

### About build & watch

This plugin uses [@sanity/plugin-sdk](https://github.com/sanity-io/plugin-sdk)
with default configuration for build & watch scripts.
