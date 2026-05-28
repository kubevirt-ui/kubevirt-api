import type { V1beta1DataVolumeCondition } from './V1beta1DataVolumeCondition';

export interface V1beta1DataVolumeStatus {
  /** ClaimName is the name of the underlying PVC used by the DataVolume. */
  claimName?: string;
  conditions?: V1beta1DataVolumeCondition[];
  /** Phase is the current phase of the data volume */
  phase?: string;
  progress?: string;
  /**
   * RestartCount is the number of times the pod populating the DataVolume has restarted
   * @format int32
   */
  restartCount?: number;
}
