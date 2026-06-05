import type { IoK8sApiNetworkingV1ParentReference } from './IoK8sApiNetworkingV1ParentReference';

/** IPAddressSpec describe the attributes in an IP Address. */
export interface IoK8sApiNetworkingV1IPAddressSpec {
  /** ParentRef references the resource that an IPAddress is attached to. An IPAddress must reference a parent object. */
  parentRef: IoK8sApiNetworkingV1ParentReference;
}
