import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles';

@customElement('splash-screen')
export class SplashScreen extends LitElement {
  static readonly styles = [styles];

  @property() logo: string;
  @property() title: string;

  render() {
    const { logo, title } = this;

    return html` <img src=${logo} alt=${title} /> `;
  }
}
