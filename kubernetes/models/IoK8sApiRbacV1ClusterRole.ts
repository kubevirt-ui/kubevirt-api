import type { IoK8sApiRbacV1AggregationRule } from './IoK8sApiRbacV1AggregationRule';
import type { IoK8sApiRbacV1PolicyRule } from './IoK8sApiRbacV1PolicyRule';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiRbacV1ClusterRole {
  /** AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller. */
  aggregationRule?: IoK8sApiRbacV1AggregationRule;
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object's metadata. */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** Rules holds all the PolicyRules for this ClusterRole */
  rules?: IoK8sApiRbacV1PolicyRule[];
}
