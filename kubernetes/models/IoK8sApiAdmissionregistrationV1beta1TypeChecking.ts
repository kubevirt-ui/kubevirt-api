import type { IoK8sApiAdmissionregistrationV1beta1ExpressionWarning } from './IoK8sApiAdmissionregistrationV1beta1ExpressionWarning';

/** TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy */
export interface IoK8sApiAdmissionregistrationV1beta1TypeChecking {
  /** The type checking warnings for each expression. */
  expressionWarnings?: IoK8sApiAdmissionregistrationV1beta1ExpressionWarning[];
}
