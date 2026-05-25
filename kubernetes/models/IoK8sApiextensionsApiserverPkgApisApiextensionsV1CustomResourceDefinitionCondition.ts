import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition {
  /** lastTransitionTime last time the condition transitioned from one status to another. */
  lastTransitionTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** message is a human-readable message indicating details about last transition. */
  message?: string;
  /** reason is a unique, one-word, CamelCase reason for the condition's last transition. */
  reason?: string;
  /** status is the status of the condition. Can be True, False, Unknown. */
  status: string;
  /** type is the type of the condition. Types include Established, NamesAccepted and Terminating. */
  type: string;
}
