import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

export interface IoK8sApiCoreV1PersistentVolumeClaimCondition {
  /** lastProbeTime is the time we probed the condition. */
  lastProbeTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** lastTransitionTime is the time the condition transitioned from one status to another. */
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** message is the human-readable message indicating details about last transition. */
  message?: string;
  /** reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "Resizing" that means the underlying persistent volume is being resized. */
  reason?: string;
  /** Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#:~:text=state%20of%20pvc-,conditions.status,-(string)%2C%20required */
  status: string;
  /** Type is the type of the condition. More info: https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#:~:text=set%20to%20%27ResizeStarted%27.-,PersistentVolumeClaimCondition,-contains%20details%20about */
  type: string;
}
