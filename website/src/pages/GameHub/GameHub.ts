import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { GameList } from './logic';
import { GameSummary } from '../../components/GameCard/model';
import styles from './styles';

import '../../components/GameCard';

function renderCard(summary: GameSummary) {
  return html`<game-card .game=${summary}></game-card>`;
}

@customElement('game-hub')
export class GameHub extends LitElement {
  @property({ type: String }) title = 'Game Hub';

  static styles = styles;

  render() {
    return GameList.map(renderCard);
  }
}
