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
  }
  img {
    width: 100%;
    object-fit: cover;
    height: var(--size-12);
  }
  .title {
    font-weight: var(--font-weight-6);
    color: var(--text1);
    font-size: var(--font-size-3);
    line-height: var(--font-lineheight-4);
  }
  .description {
    color: var(--text2);
    font-size: var(--font-size-1);
    line-height: var(--font-lineheight-3);
  }
  .title,
  .description {
    padding-left: var(--size-5);
    padding-right: var(--size-5);
  }
`;
export default styles;
