import { css } from 'lit';

export const styles = css`
  :host {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: var(--size-2);
    box-shadow: var(--shadow-2);
    overflow: hidden;
    background-color: var(--surface2);
    cursor: pointer;
    user-select: none;
  }
  :host([selected]) {
    border: 1px solid red;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: var(--size-12);
  }
  .description {
    color: var(--text2);
    font-size: var(--font-size-1);
    line-height: var(--font-lineheight-3);
  }
  .description {
    padding-left: var(--size-5);
    padding-right: var(--size-5);
  }
`;
export default styles;
