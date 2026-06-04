import type { V1ListMeta } from './V1ListMeta';
import type { V1beta1CDI } from './V1beta1CDI';

/** CDIList provides the needed parameters to do request a list of CDIs from the system */
export interface V1beta1CDIList {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** Items provides a list of CDIs */
  items: V1beta1CDI[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /**
   * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
   * @default {}
   */
  metadata: V1ListMeta;
}
