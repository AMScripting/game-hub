import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles';
import { Mission } from '../../models/Mission';

@customElement('mission-card')
export class MissionCard extends LitElement {
  static readonly styles = [styles];

  @property({ type: Object }) mission: Mission;
  @property({ type: Boolean, reflect: true }) selected = false;

  render() {
    const { description, logo, type } = this.mission;

    return html`
      <img src=${logo} alt=${type} />
      <p class="description">${description}</p>
    `;
  }
}
