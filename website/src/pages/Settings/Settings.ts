import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles';

@customElement('settings-page')
export class SettingsPage extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`Settings Page`;
  }
}
