import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router, Route } from '../../services/Router';
import styles from './styles';

@customElement('app-shell')
export class AppShell extends LitElement {
  static styles = styles;
  private watcher: () => void;

  @state() private route: Route;

  connectedCallback() {
    super.connectedCallback?.();
    Router.watch((route: Route) => {
      this.route = route;
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback?.();
    this.watcher?.();
  }

  render() {
    const { render } = this.route || {};

    return html`
      <main class="container">${render || null}</main>

      <p class="app-footer">
        Made with love by
        <a rel="noopener noreferrer" href="/">AMScripting</a>.
      </p>
    `;
  }
}
