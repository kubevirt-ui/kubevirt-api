import type { IoK8sApimachineryPkgApisMetaV1MicroTime } from './IoK8sApimachineryPkgApisMetaV1MicroTime';

export interface IoK8sApiCoordinationV1LeaseSpec {
  /** acquireTime is a time when the current lease was acquired. */
  acquireTime?: IoK8sApimachineryPkgApisMetaV1MicroTime;
  /** holderIdentity contains the identity of the holder of a current lease. If Coordinated Leader Election is used, the holder identity must be equal to the elected LeaseCandidate.metadata.name field. */
  holderIdentity?: string;
  /**
   * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measured against the time of last observed renewTime.
   * @format int32
   */
  leaseDurationSeconds?: number;
  /**
   * leaseTransitions is the number of transitions of a lease between holders.
   * @format int32
   */
  leaseTransitions?: number;
  /** PreferredHolder signals to a lease holder that the lease has a more optimal holder and should be given up. This field can only be set if Strategy is also set. */
  preferredHolder?: string;
  /** renewTime is a time when the current holder of a lease has last updated the lease. */
  renewTime?: IoK8sApimachineryPkgApisMetaV1MicroTime;
  /** Strategy indicates the strategy for picking the leader for coordinated leader election. If the field is not specified, there is no active coordination for this lease. (Alpha) Using this field requires the CoordinatedLeaderElection feature gate to be enabled. */
  strategy?: string;
}
