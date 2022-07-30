import { TemplateResult } from 'lit';

export interface Route {
  visible?: { footer?: boolean; header?: boolean; sidebar?: boolean };
  module: () => Promise<unknown>;
  path: string;
  pattern: RegExp;
  render: TemplateResult;
  title: string;
}
export default Route;
