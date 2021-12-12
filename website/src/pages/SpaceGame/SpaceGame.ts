import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles';

@customElement('space-game')
export class SpaceGame extends LitElement {
  static styles = styles;

  render() {
    return html`space game`;
  }
}
