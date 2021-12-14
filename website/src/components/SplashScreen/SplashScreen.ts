import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles';

@customElement('splash-screen')
export class SplashScreen extends LitElement {
  static readonly styles = [styles];

  @property() logo: string;
  @property({ type: Number }) progress = 0;
  @property() title: string;

  render() {
    const { logo, progress, title } = this;

    return html`
      <img src=${logo} alt=${title} />
      <progress value=${progress} max="100"></progress>
    `;
  }
}
