import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import GameSummary from '../../models/GameSummary';
import styles from './styles';

@customElement('mission-recap-page')
export default class MissionRecapPage extends LitElement {
  static readonly styles = [styles];

  @property({ type: Object }) summary: GameSummary;

  render() {
    const {
      summary: { name },
    } = this;

    return html`
      <h1>Mission Recap</h1>
      <a href="/${name}">Done</a>
    `;
  }
}
