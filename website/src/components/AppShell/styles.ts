import { css } from 'lit';

export const styles = css`
  :host {
    position: relative;
    display: block;
    background-color: var(--surface1);
    /** sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 */
  }
  .container {
    position: relative;
    max-width: 80rem; /** max-w-7xl */
    margin: 0 auto;
    text-align: center;
  }
  .app-footer {
    font-size: calc(12px + 0.5vmin);
    align-items: center;
  }
  .app-footer a {
    margin-left: 5px;
  }
`;
export default styles;
