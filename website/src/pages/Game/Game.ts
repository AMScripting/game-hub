import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { until } from 'lit/directives/until.js';
import GameSummary from '../../models/GameSummary';
import styles from './styles';

import MissionWorker from '../../workers/Mission';
import Mission from '../../models/Mission';

@customElement('game-page')
export class GamePage extends LitElement {
  static readonly styles = [styles];
  @state() private activeMission: Promise<Mission | null>;
  @property({ type: Object }) summary: GameSummary;

  constructor() {
    super();
    this.renderResumeMission = this.renderResumeMission.bind(this);
  }
  connectedCallback(): void {
    super.connectedCallback?.();

    this.activeMission = MissionWorker.fetchActiveMission();
  }

  render() {
    const { activeMission, renderResumeMission, summary } = this;
    const { name } = summary;

    return html`
      <h1>Game Page</h1>
      <a href="/${name}/character">Character</a>
      ${until(renderResumeMission(activeMission, summary), null)}
      <a href="/${name}/mission/select">Mission Selection</a>
      <a href="/${name}/settings">Settings</a>
      <a href="/${name}/menu">Quit</a>
    `;
  }
  private async renderResumeMission(
    mission: Promise<Mission | null>,
    { name }: GameSummary,
  ): Promise<TemplateResult> {
    return html`<a href="/${name}/mission" ?hidden=${!(await mission)}
      >Resume Mission</a
    >`;
  }
}
