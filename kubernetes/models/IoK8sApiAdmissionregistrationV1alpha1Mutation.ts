import type { IoK8sApiAdmissionregistrationV1alpha1ApplyConfiguration } from './IoK8sApiAdmissionregistrationV1alpha1ApplyConfiguration';
import type { IoK8sApiAdmissionregistrationV1alpha1JSONPatch } from './IoK8sApiAdmissionregistrationV1alpha1JSONPatch';

/** Mutation specifies the CEL expression which is used to apply the Mutation. */
export interface IoK8sApiAdmissionregistrationV1alpha1Mutation {
  /** applyConfiguration defines the desired configuration values of an object. The configuration is applied to the admission object using [structured merge diff](https://github.com/kubernetes-sigs/structured-merge-diff). A CEL expression is used to create apply configuration. */
  applyConfiguration?: IoK8sApiAdmissionregistrationV1alpha1ApplyConfiguration;
  /** jsonPatch defines a [JSON patch](https://jsonpatch.com/) operation to perform a mutation to the object. A CEL expression is used to create the JSON patch. */
  jsonPatch?: IoK8sApiAdmissionregistrationV1alpha1JSONPatch;
  /** patchType indicates the patch strategy used. Allowed values are "ApplyConfiguration" and "JSONPatch". Required. */
  patchType: string;
}
