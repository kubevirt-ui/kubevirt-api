import type { ApiNodePlacement } from './ApiNodePlacement';
import type { V1beta1CDICertConfig } from './V1beta1CDICertConfig';
import type { V1beta1CDIConfigSpec } from './V1beta1CDIConfigSpec';
import type { V1beta1CDISpecImagePullPolicyEnum } from './V1beta1CDISpecImagePullPolicyEnum';
import type { V1beta1ComponentConfig } from './V1beta1ComponentConfig';
import type { V1beta1CustomizeComponents } from './V1beta1CustomizeComponents';

/** CDISpec defines our specification for the CDI installation */
export interface V1beta1CDISpec {
  /** certificate configuration */
  certConfig?: V1beta1CDICertConfig;
  /** Clone strategy override: should we use a host-assisted copy even if snapshots are available? */
  cloneStrategyOverride?: string;
  /** CDIConfig at CDI level */
  config?: V1beta1CDIConfigSpec;
  /**
   * CustomizeComponents defines patches for components deployed by the CDI operator.
   * @default {}
   */
  customizeComponents?: V1beta1CustomizeComponents;
  /**
   * PullPolicy describes a policy for if/when to pull a container image
   *
   * Possible enum values:
   *  - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
   *  - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
   *  - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
   */
  imagePullPolicy?: V1beta1CDISpecImagePullPolicyEnum;
  /**
   * Selectors and tolerations that should apply to cdi infrastructure components
   * @default {}
   */
  infra?: V1beta1ComponentConfig;
  /** PriorityClass of the CDI control plane */
  priorityClass?: string;
  /** CDIUninstallStrategy defines the state to leave CDI on uninstall */
  uninstallStrategy?: string;
  /**
   * Restrict on which nodes CDI workload pods will be scheduled
   * @default {}
   */
  workload?: ApiNodePlacement;
}
