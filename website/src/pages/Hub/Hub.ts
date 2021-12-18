import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GameList } from './logic';
import { GameSummary } from '../../models/GameSummary';
import styles from './styles';

import '../../components/GameCard';

function renderCard(summary: GameSummary) {
  return html` <game-card .game=${summary}></game-card> `;
}

@customElement('hub-page')
export class HubPage extends LitElement {
  static readonly styles = [styles];

  render() {
    return html` <div id="cards">${GameList.map(renderCard)}</div> `;
  }
}
