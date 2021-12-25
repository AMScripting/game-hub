import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { until } from 'lit/directives/until.js';
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
  @state() private availableMissions: Promise<Mission[]>;
  @state() private selectedMission: MissionType;
  @property({ type: Object }) summary: GameSummary;

  constructor() {
    super();

    this.renderLoader = this.renderLoader.bind(this);
    this.renderMissionTiles = this.renderMissionTiles.bind(this);
  }
  connectedCallback() {
    super.connectedCallback?.();

    this.availableMissions = MissionWorker.availableMissions();
  }
  render() {
    const {
      availableMissions,
      renderLoader,
      renderMissionTiles,
      selectedMission,
      summary,
    } = this;

    return html`
      <h1>Mission Select</h1>
      <div id="missions">
        ${until(renderMissionTiles(availableMissions), renderLoader)}
      </div>
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
  private renderLoader(): TemplateResult {
    return html`<span>Loading...</span>`;
  }
  private async renderMissionTiles(
    missions: Promise<Mission[]>,
  ): Promise<TemplateResult[]> {
    const { selectedMission } = this;

    return (await missions).map(
      (mission) => html`
        <mission-card
          @click=${() => {
            this.selectedMission = mission.type;
          }}
          .mission=${mission}
          ?selected=${mission.type === selectedMission}
        ></mission-card>
      `,
    );
  }
}
