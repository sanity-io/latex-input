# unicorn-slider
Slider input for Sanity

https://sanity.io

## Usage, standalone

```
git clone // this repo
npm install
npm run build
cd example/
npm install
sanity start
open http://localhost:3333
```

## Usage as a Sanity plugin

```
cd my-sanity-studio
sanity install unicorn-slider
mkdir parts
touch parts/inputResolver.js
```

Add this to `parts/inputResolver.js`:

```
import Slider from 'part:@sanity/base/components/unicorn-slider'
export default function resolveInput(type) {
  if (type.name === 'number' && type.options && type.options.range) {
    return Slider
  }
}
```

Add this to the `parts` array in your `sanity.json` file:

```
{
  "implements": "part:@sanity/form-builder/input-resolver",
  "path": "./parts/inputResolver.js"
}
```


Add this to one of your schema types:

```
{
  name: 'unicornCount',
  title: 'Number of Unicorns',
  type: 'number',
  description: 'Half unicorns are okay',
  options: {
    range: {min: 0, max: 10, step: 0.5}
  }
}
```
