import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

/** Describes the state of a migration at a certain point. */
export interface IoK8sApiStoragemigrationV1alpha1MigrationCondition {
  /** The last time this condition was updated. */
  lastUpdateTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** A human readable message indicating details about the transition. */
  message?: string;
  /** The reason for the condition's last transition. */
  reason?: string;
  /** Status of the condition, one of True, False, Unknown. */
  status: string;
  /** Type of the condition. */
  type: string;
}
