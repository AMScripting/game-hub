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
  :host([sidebar][open]) {
    grid-template-areas:
      'sidebar main'
      'sidebar main'
      'sidebar main';
  }

  :host([footer][header]) {
    grid-template-areas:
      'header header'
      'main main'
      'footer footer';
  }
  :host([footer][sidebar][open]) {
    grid-template-areas:
      'sidebar main'
      'sidebar main'
      'footer footer';
  }
  :host([header][sidebar][open]) {
    grid-template-areas:
      'header header'
      'sidebar main'
      'sidebar main';
  }

  :host([footer][header][sidebar][open]) {
    grid-template-areas:
      'header header'
      'sidebar main'
      'footer footer';
  }

  :host(:not([footer])) footer {
    display: none;
  }
  :host(:not([header])) header {
    display: none;
  }
  :host(:not([sidebar][open])) nav {
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
    grid-area: main;
    text-align: center;
  }
  nav {
    grid-area: sidebar;
  }
`;
export default styles;
