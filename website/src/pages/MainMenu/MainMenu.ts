import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import GameSummary from '../../models/GameSummary';
import styles from './styles';

@customElement('main-menu-page')
export class MainMenuPage extends LitElement {
  static readonly styles = [styles];
  @property({ type: Object }) summary: GameSummary;

  render() {
    const {
      summary: { name, title },
    } = this;

    return html`
      <h1>${title}</h1>
      <a href="/${name}/character">New Game</a>
      <a href="/${name}">Continue Game</a>
      <a href="/${name}/menu/settings">Settings</a>
      <a href="/">Exit</a>
    `;
  }
}
