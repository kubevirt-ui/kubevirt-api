import type { IoK8sApiAuthorizationV1NonResourceRule } from './IoK8sApiAuthorizationV1NonResourceRule';
import type { IoK8sApiAuthorizationV1ResourceRule } from './IoK8sApiAuthorizationV1ResourceRule';

export interface IoK8sApiAuthorizationV1SubjectRulesReviewStatus {
  /** EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete. */
  evaluationError?: string;
  /** Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation. */
  incomplete: boolean;
  /** NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
  nonResourceRules: IoK8sApiAuthorizationV1NonResourceRule[];
  /** ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
  resourceRules: IoK8sApiAuthorizationV1ResourceRule[];
}
