import type { IoK8sApiDiscoveryV1ForNode } from './IoK8sApiDiscoveryV1ForNode';
import type { IoK8sApiDiscoveryV1ForZone } from './IoK8sApiDiscoveryV1ForZone';

/** EndpointHints provides hints describing how an endpoint should be consumed. */
export interface IoK8sApiDiscoveryV1EndpointHints {
  /** forNodes indicates the node(s) this endpoint should be consumed by when using topology aware routing. May contain a maximum of 8 entries. This is an Alpha feature and is only used when the PreferSameTrafficDistribution feature gate is enabled. */
  forNodes?: IoK8sApiDiscoveryV1ForNode[];
  /** forZones indicates the zone(s) this endpoint should be consumed by when using topology aware routing. May contain a maximum of 8 entries. */
  forZones?: IoK8sApiDiscoveryV1ForZone[];
}
