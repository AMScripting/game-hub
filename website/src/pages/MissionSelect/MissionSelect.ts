import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import GameSummary from '../../models/GameSummary';
import styles from './styles';

@customElement('mission-select-page')
export default class MissionSelectPage extends LitElement {
  static readonly styles = [styles];

  @property({ type: Object }) summary: GameSummary;

  render() {
    const {
      summary: { name },
    } = this;

    return html`
      <h1>Mission Select</h1>
      <a href="/${name}/mission">Confirm</a>
      <a href="/${name}">Cancel</a>
    `;
  }
}
