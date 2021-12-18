import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import GameSummary from '../../models/GameSummary';
import styles from './styles';

@customElement('settings-page')
export class SettingsPage extends LitElement {
  static readonly styles = [styles];

  @property({ type: Object }) summary: GameSummary;

  render() {
    const {
      summary: { name },
    } = this;

    return html`
      <h1>Settings</h1>
      <!-- TODO: previous instead of navigate -->
      <a href="/${name}/menu">Save</a>
      <a href="/${name}/menu">Cancel</a>
    `;
  }
}
