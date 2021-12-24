import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import GameSummary from '../../models/GameSummary';
import styles from './styles';

@customElement('mission-page')
export class MissionPage extends LitElement {
  static readonly styles = [styles];

  @property({ type: Object }) summary: GameSummary;

  render() {
    const {
      summary: { name },
    } = this;

    return html`
      <h1>Mission</h1>
      <a href="/${name}/mission/recap">Done</a>
      <a href="/${name}/menu/settings">Settings</a>
      <a href="/${name}">Abandon</a>
    `;
  }
}
