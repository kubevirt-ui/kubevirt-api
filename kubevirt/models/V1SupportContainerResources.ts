import type { V1ResourceRequirementsWithoutClaims } from './V1ResourceRequirementsWithoutClaims';

export interface V1SupportContainerResources {
  /**
   * ResourceRequirementsWithoutClaims describes the compute resource requirements. This struct was taken from the k8s.ResourceRequirements and cleaned up the `Claims` field.
   * @default {}
   */
  resources: V1ResourceRequirementsWithoutClaims;
  /** @default "" */
  type: string;
}
