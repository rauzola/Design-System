'use strict'
const __defProp = Object.defineProperty
const __defProps = Object.defineProperties
const __getOwnPropDesc = Object.getOwnPropertyDescriptor
const __getOwnPropDescs = Object.getOwnPropertyDescriptors
const __getOwnPropNames = Object.getOwnPropertyNames
const __getOwnPropSymbols = Object.getOwnPropertySymbols
const __hasOwnProp = Object.prototype.hasOwnProperty
const __propIsEnum = Object.prototype.propertyIsEnumerable
const __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (obj[key] = value)
const __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop])
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop])
    }
  return a
}
const __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b))
const __export = (target, all) => {
  for (const name in all)
    __defProp(target, name, { get: all[name], enumerable: true })
}
const __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (const key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        })
  }
  return to
}
const __toCommonJS = (mod) =>
  __copyProps(__defProp({}, '__esModule', { value: true }), mod)

// src/index.tsx
const src_exports = {}
__export(src_exports, {
  App: () => App,
})
module.exports = __toCommonJS(src_exports)

// ../tokens/dist/index.mjs
const colors = {
  white: '#FFF',
  black: '#000',
  gray100: '#E1E1E6',
  gray200: '#A9A9B2',
  gray400: '#7C7C8A',
  gray500: '#505059',
  gray600: '#323238',
  gray700: '#29292E',
  gray800: '#202024',
  gray900: '#121214',
  ignite300: '#00B37E',
  ignite500: '#00875F',
  ignite700: '#015F43',
  ignite900: '#00291D',
}
const space = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  40: '10rem',
  64: '16rem',
  80: '20rem',
}
const radii = {
  px: '1px',
  xs: '4px',
  sm: '6px',
  md: '8px',
  lg: '16px',
  full: '99999px',
}
const fonts = {
  default: 'Roboto, sans-serif',
  code: 'monospace',
}
const fontSizes = {
  xxs: '0.625rem',
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '4xl': '2rem',
  '5xl': '2.25rem',
  '6xl': '3rem',
  '7xl': '4rem',
  '8xl': '4.5rem',
  '9xl': '6rem',
}
const fontWeights = {
  regular: '400',
  medium: '500',
  bold: '700',
}
const lineHeights = {
  shorter: '125%',
  short: '140%',
  base: '160%',
  tall: '180%',
}

// src/styles/index.ts
const import_react = require('@stitches/react')
const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = (0, import_react.createStitches)({
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
    height: 'space',
    width: 'space',
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})

// src/index.tsx
const import_jsx_runtime = require('react/jsx-runtime')
const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray500',
  borderRadius: '$md',
})
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
    children: 'Hello World',
  })
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    App,
  })
