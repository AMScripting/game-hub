import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import GameSummary from '../../models/GameSummary';
import styles from './styles';
import { abandonMission, completeMission } from './logic';
import Mission from '../../models/Mission';
import MissionWorker from '../../workers/Mission';

import '@material/mwc-button';

@customElement('mission-page')
export class MissionPage extends LitElement {
  static readonly styles = [styles];
  @state() private mission: Promise<Mission | null>;
  @property({ type: Object }) summary: GameSummary;

  connectedCallback(): void {
    super.connectedCallback?.();

    this.mission = MissionWorker.fetchActiveMission().then((mission) => {
      if (!mission) abandonMission(mission, this.summary);
      return mission;
    });
  }

  render() {
    const { mission, summary } = this;
    const { name } = summary;

    return html`
      <h1>Mission</h1>
      <mwc-button
        label="Done"
        @click=${() => completeMission(mission, summary)}
      ></mwc-button>
      <a href="/${name}/menu/settings?page=mission">Settings</a>
      <a href="/${name}">Abandon</a>
    `;
  }
}
