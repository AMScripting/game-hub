import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles';

@customElement('splash-screen')
export class SplashScreen extends LitElement {
  static readonly styles = [styles];

  @property({ type: Object }) loading: { complete: number; total: number } = {
    complete: 0,
    total: 0,
  };
  @property() logo: string;
  @property() title: string;

  render() {
    const {
      logo,
      loading: { complete, total },
      title,
    } = this;

    return html`
      <img src=${logo} alt=${title} />
      <progress
        value=${complete}
        max=${total}
        style="--value: ${complete / total}"
      ></progress>
    `;
  }
}
