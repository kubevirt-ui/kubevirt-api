import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import type { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec } from './IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec';
import type { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus } from './IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus';

export interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIService {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** Spec contains information for locating and communicating with a server */
  spec?: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec;
  /** Status contains derived information about an API server */
  status?: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus;
}
