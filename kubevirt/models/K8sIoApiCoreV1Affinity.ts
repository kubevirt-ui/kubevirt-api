import type { K8sIoApiCoreV1NodeAffinity } from './K8sIoApiCoreV1NodeAffinity';
import type { K8sIoApiCoreV1PodAffinity } from './K8sIoApiCoreV1PodAffinity';
import type { K8sIoApiCoreV1PodAntiAffinity } from './K8sIoApiCoreV1PodAntiAffinity';

export interface K8sIoApiCoreV1Affinity {
  /** Describes node affinity scheduling rules for the pod. */
  nodeAffinity?: K8sIoApiCoreV1NodeAffinity;
  /** Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)). */
  podAffinity?: K8sIoApiCoreV1PodAffinity;
  /** Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)). */
  podAntiAffinity?: K8sIoApiCoreV1PodAntiAffinity;
}
