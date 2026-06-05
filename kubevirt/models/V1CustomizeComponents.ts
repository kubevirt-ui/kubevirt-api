import type { V1CustomizeComponentsPatch } from './V1CustomizeComponentsPatch';
import type { V1Flags } from './V1Flags';

export interface V1CustomizeComponents {
  /** Configure the value used for deployment and daemonset resources */
  flags?: V1Flags;
  patches?: V1CustomizeComponentsPatch[];
}
