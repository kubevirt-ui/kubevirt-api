import type { V1ResourceRequirementsWithoutClaims } from './V1ResourceRequirementsWithoutClaims';

/** SupportContainerResources are used to specify the cpu/memory request and limits for the containers that support various features of Virtual Machines. These containers are usually idle and don't require a lot of memory or cpu. */
export interface V1SupportContainerResources {
  /**
   * ResourceRequirementsWithoutClaims describes the compute resource requirements. This struct was taken from the k8s.ResourceRequirements and cleaned up the `Claims` field.
   * @default {}
   */
  resources: V1ResourceRequirementsWithoutClaims;
  /** @default "" */
  type: string;
}
