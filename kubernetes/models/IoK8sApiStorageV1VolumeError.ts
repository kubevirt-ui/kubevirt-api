import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

/** VolumeError captures an error encountered during a volume operation. */
export interface IoK8sApiStorageV1VolumeError {
  /**
   * errorCode is a numeric gRPC code representing the error encountered during Attach or Detach operations.
   *
   * This is an optional, alpha field that requires the MutableCSINodeAllocatableCount feature gate being enabled to be set.
   * @format int32
   */
  errorCode?: number;
  /** message represents the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information. */
  message?: string;
  /** time represents the time the error was encountered. */
  time?: IoK8sApimachineryPkgApisMetaV1Time;
}
