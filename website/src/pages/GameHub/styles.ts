import { css } from 'lit';

export const styles = css`
  :host {
    --gutter: var(--size-fluid-2);

    display: block;
    padding: var(--gutter);
    margin: 0 auto;
    height: calc(100% - var(--gutter) * 2);
    width: calc(100% - var(--gutter) * 2);
  }
  #cards {
    display: flex;

    justify-content: center;
    flex-wrap: wrap;
    gap: var(--gutter);
  }
  game-card {
    flex: 0 0 var(--size-fluid-9);
  }
`;
export default styles;
