import type { IoK8sApiAdmissionregistrationV1beta1TypeChecking } from './IoK8sApiAdmissionregistrationV1beta1TypeChecking';
import type { IoK8sApimachineryPkgApisMetaV1Condition } from './IoK8sApimachineryPkgApisMetaV1Condition';

export interface IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus {
  /** The conditions represent the latest available observations of a policy's current state. */
  conditions?: IoK8sApimachineryPkgApisMetaV1Condition[];
  /**
   * The generation observed by the controller.
   * @format int64
   */
  observedGeneration?: number;
  /** The results of type checking for each expression. Presence of this field indicates the completion of the type checking. */
  typeChecking?: IoK8sApiAdmissionregistrationV1beta1TypeChecking;
}
