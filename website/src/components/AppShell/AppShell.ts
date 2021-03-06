import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import Router from '../../services/Router';
import { Route } from '../../models/Route';
import { hrefInterceptor } from './logic';
import styles from './styles';

@customElement('app-shell')
export class AppShell extends LitElement {
  static readonly styles = [styles];
  private watcher: () => void;
  @state() private open?: boolean;
  @state() private route: Route;
  @property({ type: Boolean, reflect: true }) footer?: boolean;
  @property({ type: Boolean, reflect: true }) header?: boolean;
  @property({ type: Boolean, reflect: true }) sidebar?: boolean;

  connectedCallback() {
    super.connectedCallback?.();
    this.watcher = Router.watch((route: Route) => {
      this.route = { ...route };
      ({
        footer: this.footer,
        header: this.header,
        sidebar: this.sidebar,
      } = route?.visible || {});
    });

    this.shadowRoot?.addEventListener('click', hrefInterceptor);
  }
  disconnectedCallback() {
    super.disconnectedCallback?.();
    this.watcher?.();
    this.shadowRoot?.removeEventListener('click', hrefInterceptor);
  }
  render() {
    const { open, route: { render } = {} } = this;

    return html`
      <header></header>
      <nav ?open=${open}></nav>
      <main>${render || null}</main>
      <footer>
        Made with love by
        <a rel="noopener noreferrer" href="/">AMScripting</a>.
      </footer>
    `;
  }
}
