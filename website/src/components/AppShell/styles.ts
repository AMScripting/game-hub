import { css } from 'lit';

export const styles = css`
  :host {
    position: relative;
    display: grid;
    background-color: var(--surface1);
    width: 100vw;
    height: 100vh;

    grid-template-columns: var(--size-fluid-9) auto;
    grid-template-rows: var(--size-fluid-6) auto var(--size-fluid-6);
    grid-template-areas:
      'main main'
      'main main'
      'main main';
  }
  :host([footer]) {
    grid-template-areas:
      'main main'
      'main main'
      'footer footer';
  }
  :host([header]) {
    grid-template-areas:
      'header header'
      'main main'
      'main main';
  }
  :host([footer][header]) {
    grid-template-areas:
      'header header'
      'main main'
      'footer footer';
  }
  :host(:not([footer])) footer {
    display: none;
  }
  :host(:not([header])) header {
    display: none;
  }
  :host(:not([sidebar])) nav {
    display: none;
  }

  footer {
    grid-area: footer;
    font-size: calc(12px + 0.5vmin);
    align-items: center;
  }
  footer a {
    margin-left: 5px;
  }
  header {
    grid-area: header;
  }
  main {
    display: flex;
    grid-area: main;
    text-align: center;
    overflow: auto;
  }
  main > * {
    flex: 1 1 auto;
  }
  nav[open] {
    grid-area: 1 / 1 / span 3 / span 1;
    z-index: 100;
  }
`;
export default styles;
