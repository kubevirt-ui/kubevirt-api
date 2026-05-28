import type { K8sIoApimachineryPkgRuntimeRawExtension } from './K8sIoApimachineryPkgRuntimeRawExtension';

export interface K8sIoApimachineryPkgApisMetaV1WatchEvent {
  /**
   * Object is:
   *  * If Type is Added or Modified: the new state of the object.
   *  * If Type is Deleted: the state of the object immediately before deletion.
   *  * If Type is Error: *Status is recommended; other types may make sense
   *    depending on context.
   */
  object: K8sIoApimachineryPkgRuntimeRawExtension;
  /** @default "" */
  type: string;
}
