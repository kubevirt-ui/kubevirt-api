import type { V1beta1CustomizeComponentsPatch } from './V1beta1CustomizeComponentsPatch';
import type { V1beta1Flags } from './V1beta1Flags';

export interface V1beta1CustomizeComponents {
  /** Configure the value used for deployment and daemonset resources */
  flags?: V1beta1Flags;
  patches?: V1beta1CustomizeComponentsPatch[];
}
