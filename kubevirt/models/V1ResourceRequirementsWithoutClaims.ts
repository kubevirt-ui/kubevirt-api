import type { K8sIoApimachineryPkgApiResourceQuantity } from './K8sIoApimachineryPkgApiResourceQuantity';

export interface V1ResourceRequirementsWithoutClaims {
  /** Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
  limits?: Record<string, K8sIoApimachineryPkgApiResourceQuantity>;
  /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
  requests?: Record<string, K8sIoApimachineryPkgApiResourceQuantity>;
}
