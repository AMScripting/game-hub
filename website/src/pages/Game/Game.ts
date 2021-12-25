import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import GameSummary from '../../models/GameSummary';
import styles from './styles';

import MissionWorker from '../../workers/Mission';
import Mission from '../../models/Mission';

@customElement('game-page')
export class GamePage extends LitElement {
  static readonly styles = [styles];

  @property({ type: Object }) summary: GameSummary;
  @state() private activeMission: Mission | null = null;

  connectedCallback(): void {
    super.connectedCallback?.();

    MissionWorker.fetchActiveMission().then((mission) => {
      this.activeMission = mission;
    });
  }

  render() {
    const {
      activeMission,
      summary: { name },
    } = this;

    return html`
      <h1>Game Page</h1>
      <a href="/${name}/character">Character</a>
      <a href="/${name}/mission" ?hidden=${!activeMission}>Resume Mission</a>
      <a href="/${name}/mission/select">Mission Selection</a>
      <a href="/${name}/settings">Settings</a>
      <a href="/${name}/menu">Quit</a>
    `;
  }
}
