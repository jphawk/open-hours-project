import { createGlobalStyle, css } from 'styled-components';

/* eslint-disable react-refresh/only-export-components */
/** Forked from Normalize.css and bootstrap-reboot.css */
/** @component */
export default createGlobalStyle(
  ({
    theme: {
      base: { color, fontFamily, spacing },
    },
  }) => css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    * {
      -webkit-tap-highlight-color: transparent;
    }

    html {
      font-family: sans-serif;
      line-height: 1.15;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: ${color.text.headline};
    }

    article,
    aside,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    nav,
    section {
      display: block;
    }

    body {
      margin: 0;
      font-family: ${fontFamily.Roboto};
      color: ${color.text.label.default};
      text-align: left;
    }

    #root {
      height: 100vh;
      display: grid;
      background-color: ${color.surface.default};
      padding: ${spacing.space4}rem;
    }

    [tabindex='-1']:focus {
      outline: 0 !important;
    }

    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
    }

    p {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    abbr[title],
    abbr[data-original-title] {
      text-decoration: underline;
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
      cursor: help;
      border-bottom: 0;
      -webkit-text-decoration-skip-ink: none;
      text-decoration-skip-ink: none;
    }

    address {
      margin-bottom: 1rem;
      font-style: normal;
      line-height: inherit;
    }

    ol,
    ul,
    dl {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
      margin-bottom: 0;
    }

    dt {
      font-weight: 700;
    }

    dd {
      margin-bottom: 0.5rem;
      margin-left: 0;
    }

    blockquote {
      margin: 0 0 1rem;
    }

    b,
    strong {
      font-weight: bolder;
    }

    small {
      font-size: 80%;
    }

    sub,
    sup {
      position: relative;
      font-size: 75%;
      line-height: 0;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    a {
      color: ${color.text.accent};
      text-decoration: none;
      background-color: transparent;
    }

    @media (hover: hover) {
      a:hover {
        color: ${color.text.accent};
        text-decoration: underline;
      }
    }

    a:not([href]):not([tabindex]) {
      color: inherit;
      text-decoration: none;
    }

    a:not([href]):not([tabindex]):hover,
    a:not([href]):not([tabindex]):focus {
      color: inherit;
      text-decoration: none;
    }

    a:not([href]):not([tabindex]):focus {
      outline: 0;
    }

    pre,
    code,
    kbd,
    samp {
      font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
        'Courier New', monospace;
      font-size: 1em;
    }

    pre {
      margin-top: 0;
      margin-bottom: 1rem;
      overflow: auto;
    }

    figure {
      margin: 0 0 1rem;
    }

    img {
      vertical-align: middle;
      border-style: none;
    }

    svg {
      overflow: hidden;
      vertical-align: middle;
    }

    table {
      border-collapse: collapse;
    }

    caption {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      color: ${color.text.label};
      text-align: left;
      caption-side: bottom;
    }

    th {
      text-align: inherit;
    }

    label {
      display: inline-block;
      margin-bottom: 0.5rem;
    }

    button {
      border-radius: 0;
    }

    button:focus {
      outline: 0.0625rem dotted;
      outline: 0.3125rem auto -webkit-focus-ring-color;
    }

    input,
    button,
    select,
    optgroup,
    textarea {
      margin: 0;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      resize: vertical;
    }

    button,
    input {
      overflow: visible;
    }

    button,
    select {
      text-transform: none;
    }

    select {
      word-wrap: normal;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
      -webkit-appearance: button;
    }

    button:not(:disabled),
    [type='button']:not(:disabled),
    [type='reset']:not(:disabled),
    [type='submit']:not(:disabled) {
      cursor: pointer;
    }

    button::-moz-focus-inner,
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }

    input[type='radio'],
    input[type='checkbox'] {
      box-sizing: border-box;
      padding: 0;
    }

    input[type='date'],
    input[type='time'],
    input[type='datetime-local'],
    input[type='month'] {
      -webkit-appearance: listbox;
    }

    textarea {
      overflow: auto;
      resize: vertical;
    }

    fieldset {
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }

    legend {
      display: block;
      width: 100%;
      max-width: 100%;
      padding: 0;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      line-height: inherit;
      color: inherit;
      white-space: normal;
    }

    progress {
      vertical-align: baseline;
    }

    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
      height: auto;
    }

    [type='search'] {
      outline-offset: -0.125rem;
      -webkit-appearance: none;
    }

    [type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
      font: inherit;
      -webkit-appearance: button;
    }

    output {
      display: inline-block;
    }

    summary {
      display: list-item;
      cursor: pointer;
    }

    template {
      display: none;
    }

    [hidden] {
      display: none !important;
    }

    :focus {
      outline: none;
    }
  `
);
