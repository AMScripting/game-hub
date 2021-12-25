import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import GameSummary from '../../models/GameSummary';
import styles from './styles';

/**
 * TODO:
 * - ensure success and failure cases are accounted for
 * - upon success or failure, clear the mission state and regenerate the availableMissions
 * - allow for an exist state that promotes both resume later and failure states
 */

@customElement('mission-recap-page')
export class MissionRecapPage extends LitElement {
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
