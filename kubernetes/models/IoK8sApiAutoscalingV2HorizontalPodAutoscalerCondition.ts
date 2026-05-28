import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

export interface IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition {
  /** lastTransitionTime is the last time the condition transitioned from one status to another */
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** message is a human-readable explanation containing details about the transition */
  message?: string;
  /** reason is the reason for the condition's last transition. */
  reason?: string;
  /** status is the status of the condition (True, False, Unknown) */
  status: string;
  /** type describes the current condition */
  type: string;
}
