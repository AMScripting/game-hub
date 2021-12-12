import { css } from 'lit';

export const styles = css`
  :host {
    position: relative;
    display: grid;
    padding: var(--size-9) var(--size-3) var(--size-10) var(--size-3);
    margin: var(--size-8) auto 0;
    gap: var(--size-4);
    max-width: var(--size-15);
  }
`;
export default styles;
