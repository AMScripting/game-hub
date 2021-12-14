import { css } from 'lit';

export const styles = css`
  :host {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
  }
  img {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
  }
  progress {
    position: relative;
    top: 90%;
    margin: 0 auto;
    width: 90%;
    height: var(--size-6);
  }
`;
export default styles;
