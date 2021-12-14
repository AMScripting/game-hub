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
    -webkit-appearance: none;
    overflow: hidden;
    border-radius: var(--size-3);
  }
  ::-webkit-progress-bar {
    background-color: var(--surface-invert);
  }
  ::-webkit-progress-value {
    background-color: var(--brand);
    transition: width 1s;
  }
  ::-moz-progress-bar {
    background-color: var(--brand);
    transition: padding-bottom 1s;
    padding-bottom: calc(var(--value) * 100%);
    transform-origin: 0 0;
    transform: rotate(-90deg) translateX(calc(-1 * var(--size-6)));
    height: 0;
    padding-left: var(--size-6);
  }
`;
export default styles;
