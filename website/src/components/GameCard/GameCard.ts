import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles';
import GameSummary from '../../models/GameSummary';

@customElement('game-card')
export class GameCard extends LitElement {
  static readonly styles = [styles];
  @property() game: GameSummary;

  render() {
    const { description, logo, route, title } = this.game;

    return html`
      <a href="${route}">
        <img src=${logo} alt=${title} />
        <p class="title">${title}</p>
        <p class="description">${description}</p>
      </a>
    `;
  }
}
