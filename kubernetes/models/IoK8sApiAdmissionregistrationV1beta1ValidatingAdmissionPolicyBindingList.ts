import type { IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding } from './IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/** ValidatingAdmissionPolicyBindingList is a list of ValidatingAdmissionPolicyBinding. */
export interface IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingList {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** List of PolicyBinding. */
  items: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
