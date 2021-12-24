import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GameList } from './logic';
import { GameSummary } from '../../models/GameSummary';
import styles from './styles';

import '../../components/GameCard';

@customElement('hub-page')
export class HubPage extends LitElement {
  static readonly styles = [styles];

  constructor() {
    super();

    this.renderCard = this.renderCard.bind(this);
  }

  render() {
    const { renderCard } = this;

    return html` <div id="cards">${GameList.map(renderCard)}</div> `;
  }
  private renderCard(summary: GameSummary) {
    return html`<game-card .game=${summary}></game-card>`;
  }
}
