# BK Bank UI

BK Bank's Design System written as a TailwindCSS plugin.

## Installation

First, set up your project to use [Tailwind CSS](https://tailwindcss.com/docs/installation).

Then, install the design system as a dev dependency:

```bash
npm install -D @bkbank/ui
```

In your `tailwind.config.js` file, import the design system plugin.

```js
// tailwind.config.js
module.exports {
  /** ... */
  plugins: [require("@bkbank/ui")],
}
```

See [Tailwind CSS Plugins](https://tailwindcss.com/docs/plugins) for more information.

## Development

To develop the design system, clone the repository and install the dependencies:

```bash
npm install
```

Then, run the Storybook server:

```bash
npm run storybook
```

Write your CSS with Tailwind `@apply` syntax in `packages/core/{base|components|utilities}`.

Add them to the `index.js` file in their respective functions.

Then, create a build command to transform the CSS with Tailwind into pure CSS.

For example,

```json
{
  "scripts": {
    "build:utilities": "postcss --config packages/core packages/core/utilities/index.css -o dist/utilities.css"
  }
}
```

## Building

To build the design system, run the following command:

```bash
npm run build
```

That will run the build commands for each package.

## Issues

Found something wrong? Please let us know by creating an issue on [GitHub](https://github.com/jvzaniolo/bkbank-ui/issues).
