import type { IoK8sApiFlowcontrolV1NonResourcePolicyRule } from './IoK8sApiFlowcontrolV1NonResourcePolicyRule';
import type { IoK8sApiFlowcontrolV1ResourcePolicyRule } from './IoK8sApiFlowcontrolV1ResourcePolicyRule';
import type { IoK8sApiFlowcontrolV1Subject } from './IoK8sApiFlowcontrolV1Subject';

export interface IoK8sApiFlowcontrolV1PolicyRulesWithSubjects {
  /** `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL. */
  nonResourceRules?: IoK8sApiFlowcontrolV1NonResourcePolicyRule[];
  /** `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty. */
  resourceRules?: IoK8sApiFlowcontrolV1ResourcePolicyRule[];
  /** subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required. */
  subjects: IoK8sApiFlowcontrolV1Subject[];
}
