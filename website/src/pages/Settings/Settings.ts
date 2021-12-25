import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import GameSummary from '../../models/GameSummary';
import Router from '../../services/Router';
import styles from './styles';

@customElement('settings-page')
export class SettingsPage extends LitElement {
  static readonly styles = [styles];
  @state() private page: string = 'menu';
  @property({ type: Object }) summary: GameSummary;

  connectedCallback() {
    super.connectedCallback?.();
    this.page = Router.getSearchFields().page || 'menu';
  }
  render() {
    const {
      summary: { name },
      page,
    } = this;

    return html`
      <h1>Settings</h1>
      <a href="/${name}/${page}">Save</a>
      <a href="/${name}/${page}">Cancel</a>
    `;
  }
}
