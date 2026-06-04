import type { V1ClaimRequest } from './V1ClaimRequest';
import type { V1MultusNetwork } from './V1MultusNetwork';
import type { V1PodNetwork } from './V1PodNetwork';

/** Network represents a network type and a resource that should be connected to the vm. */
export interface V1Network {
  /** Represents the multus cni network. */
  multus?: V1MultusNetwork;
  /**
   * Network name. Must be a DNS_LABEL and unique within the vm. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @default ""
   */
  name: string;
  /** Represents the stock pod network interface. */
  pod?: V1PodNetwork;
  /** ResourceClaim represents a network resource requested via a VMI spec.resourceClaims[] entry, backed by either a Kubernetes ResourceClaim or ResourceClaimTemplate. This field should only be configured if the NetworkDevicesWithDRA feature-gate is enabled. This feature is in alpha. */
  resourceClaim?: V1ClaimRequest;
}
