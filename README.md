# babel-plugin-tailwind-components and styled-components

## Updated

Some version incompatibilities between Tailwind and the `tailwind.macro` lib
were causing the issue. This repo could now serve as an example of a minimal
Webpack + Styled Components setup with this plugin.

## The Old Issue

I haven't been able to get the [babel-plugin-tailwind-components](https://npmjs.com/package/babel-plugin-tailwind-components)
to work in any project that I've tried so far (Create React App, Next.js, or a
minimal Webpack 4 setup), so I've created this as an example of the issue I'm
facing.

Clone the repo, install dependencies (yarn was used in this example) and run the
start script to see the error output.

```
git clone git@github.com:mike360/tailwind-components-bug-repro.git
cd tailwind-components-bug-repro
yarn install
yarn start
```

Open http://localhost:8081 in browser.

The error is as follows:

```
Uncaught TypeError: Cannot read property 'red' of undefined
    at eval (Button.js:24)
    at Module../src/Button.js (bundle.js:656)
    at __webpack_require__ (bundle.js:20)
    at eval (index.js:6)
    at Module../src/index.js (bundle.js:668)
    at __webpack_require__ (bundle.js:20)
    at eval (webpack:///multi_(:8081/webpack)-dev-server/client?:2:18)
    at Object.0 (bundle.js:690)
    at __webpack_require__ (bundle.js:20)
    at bundle.js:84
```
