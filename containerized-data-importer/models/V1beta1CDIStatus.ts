import type { V1Condition } from './V1Condition';

export interface V1beta1CDIStatus {
  /** A list of current conditions of the resource */
  conditions?: V1Condition[];
  /** The observed version of the resource */
  observedVersion?: string;
  /** The version of the resource as defined by the operator */
  operatorVersion?: string;
  phase?: string;
  /** The desired version of the resource */
  targetVersion?: string;
}
