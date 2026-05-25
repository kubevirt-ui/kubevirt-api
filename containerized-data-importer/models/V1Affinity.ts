import type { V1NodeAffinity } from './V1NodeAffinity';
import type { V1PodAffinity } from './V1PodAffinity';
import type { V1PodAntiAffinity } from './V1PodAntiAffinity';

export interface V1Affinity {
  /** Describes node affinity scheduling rules for the pod. */
  nodeAffinity?: V1NodeAffinity;
  /** Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)). */
  podAffinity?: V1PodAffinity;
  /** Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)). */
  podAntiAffinity?: V1PodAntiAffinity;
}
