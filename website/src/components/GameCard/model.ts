import { Route } from '../../services/Router/models';

export interface GameSummary {
  title: string;
  description: string;
  logo: string;
  route: Route;
}
export default GameSummary;
