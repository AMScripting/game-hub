import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import GameSummary from '../../models/GameSummary';
import styles from './styles';

@customElement('game-page')
export class GamePage extends LitElement {
  static readonly styles = [styles];

  @property({ type: Object }) summary: GameSummary;

  render() {
    const {
      summary: { name },
    } = this;

    return html`
      <h1>Game Page</h1>
      <a href="/${name}/character">Character</a>
      <a href="/${name}/mission/select">Mission</a>
      <a href="/${name}/settings">Settings</a>
      <a href="/${name}/menu">Quit</a>
    `;
  }
}
