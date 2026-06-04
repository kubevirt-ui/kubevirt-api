import type { IoK8sApiAdmissionregistrationV1TypeChecking } from './IoK8sApiAdmissionregistrationV1TypeChecking';
import type { IoK8sApimachineryPkgApisMetaV1Condition } from './IoK8sApimachineryPkgApisMetaV1Condition';

/** ValidatingAdmissionPolicyStatus represents the status of an admission validation policy. */
export interface IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyStatus {
  /** The conditions represent the latest available observations of a policy's current state. */
  conditions?: IoK8sApimachineryPkgApisMetaV1Condition[];
  /**
   * The generation observed by the controller.
   * @format int64
   */
  observedGeneration?: number;
  /** The results of type checking for each expression. Presence of this field indicates the completion of the type checking. */
  typeChecking?: IoK8sApiAdmissionregistrationV1TypeChecking;
}
