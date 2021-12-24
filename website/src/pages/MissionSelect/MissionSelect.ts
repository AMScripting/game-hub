import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import GameSummary from '../../models/GameSummary';
import styles from './styles';

import { missions } from '../../games/SpaceGame/missions';
import Mission from '../../models/Mission';

@customElement('mission-select-page')
export class MissionSelectPage extends LitElement {
  static readonly styles = [styles];

  @property({ type: Object }) summary: GameSummary;

  constructor() {
    super();

    this.renderMissionTile = this.renderMissionTile.bind(this);
  }

  render() {
    const {
      renderMissionTile,
      summary: { name },
    } = this;

    return html`
      <h1>Mission Select</h1>
      ${Object.values(missions).map(renderMissionTile)}
      <a href="/${name}/mission">Confirm</a>
      <a href="/${name}">Cancel</a>
    `;
  }
  private renderMissionTile({ description }: Mission): TemplateResult {
    return html` <div>${description}</div> `;
  }
}
