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

### Interactive components

Some components require JavaScript to work properly. They are listed in the Storybook with the `Requires JS` title.

To use them, you need to import the JavaScript file in your project.

```html
<script src="../path/to/@bkbank/ui/dist/scripts.min.js"></script>
```

## Usage

After installing the design system, the components and utilities will be available in your project as Tailwind classes.

All available components and utilities are listed in the Storybook.

```html
<button type="button" class="btn btn-primary">Primary button</button>
```

## Configuration

The design system follows the Tailwind CSS configuration options.

For example, if you want to add a prefix to all Tailwind classes so they don't conflict with your existing CSS, you can add the `prefix` option to your `tailwind.config.js` file.

```js
// tailwind.config.js
module.exports {
  /** ... */
  prefix: "tw-",
  plugins: [require("@bkbank/ui")],
}
```

```html
<button type="button" class="tw-btn tw-btn-primary">Primary button</button>
```

## Development

To develop the design system, clone the repository and install the dependencies:

```bash
pnpm install
```

Then, run the Storybook server:

```bash
pnpm storybook
```

Write your CSS with Tailwind `@apply` syntax in `packages/core/{base|components|utilities}`.

Then, add them to the `index.js` file in their respective functions.

## Building

To build the design system, run the following command:

```bash
pnpm build
```

That will run the build commands for each package.

## Issues

Found something wrong? Please let us know by creating an issue on [GitHub](https://github.com/jvzaniolo/bkbank-ui/issues).
