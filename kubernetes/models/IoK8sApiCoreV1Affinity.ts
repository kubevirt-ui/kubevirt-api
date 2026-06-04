import type { IoK8sApiCoreV1NodeAffinity } from './IoK8sApiCoreV1NodeAffinity';
import type { IoK8sApiCoreV1PodAffinity } from './IoK8sApiCoreV1PodAffinity';
import type { IoK8sApiCoreV1PodAntiAffinity } from './IoK8sApiCoreV1PodAntiAffinity';

/** Affinity is a group of affinity scheduling rules. */
export interface IoK8sApiCoreV1Affinity {
  /** Describes node affinity scheduling rules for the pod. */
  nodeAffinity?: IoK8sApiCoreV1NodeAffinity;
  /** Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)). */
  podAffinity?: IoK8sApiCoreV1PodAffinity;
  /** Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)). */
  podAntiAffinity?: IoK8sApiCoreV1PodAntiAffinity;
}
