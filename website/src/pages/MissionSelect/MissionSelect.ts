import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import GameSummary from '../../models/GameSummary';
import styles from './styles';

import { Mission, MissionType } from '../../models/Mission';
import MissionWorker from '../../workers/Mission';
import { cancel, startMission } from './logic';

import '@material/mwc-button';
import '../../components/MissionCard';

@customElement('mission-select-page')
export class MissionSelectPage extends LitElement {
  static readonly styles = [styles];

  @property({ type: Object }) summary: GameSummary;

  @state() private availableMissions: Mission[] = [];
  @state() private selectedMission: MissionType;

  constructor() {
    super();

    this.renderMissionTile = this.renderMissionTile.bind(this);
  }
  connectedCallback() {
    super.connectedCallback?.();

    MissionWorker.availableMissions().then((missions) => {
      this.availableMissions = missions;
    });
  }
  render() {
    const { availableMissions, renderMissionTile, selectedMission, summary } =
      this;

    return html`
      <h1>Mission Select</h1>
      <div id="missions">${availableMissions.map(renderMissionTile)}</div>
      <mwc-button
        label="Confirm"
        raised
        @click=${() => startMission(selectedMission, summary)}
        ?disabled=${!selectedMission}
      ></mwc-button>
      <mwc-button
        label="Cancel"
        outlined
        @click=${() => cancel(summary)}
      ></mwc-button>
    `;
  }
  private renderMissionTile(mission: Mission): TemplateResult {
    const { selectedMission } = this;

    return html`
      <mission-card
        @click=${() => {
          this.selectedMission = mission.type;
        }}
        .mission=${mission}
        ?selected=${mission.type === selectedMission}
      ></mission-card>
    `;
  }
}
