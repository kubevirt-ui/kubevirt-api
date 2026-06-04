import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector';
import type { K8sIoApimachineryPkgUtilIntstrIntOrString } from './K8sIoApimachineryPkgUtilIntstrIntOrString';
import type { V1beta1VirtualMachinePoolAutohealingStrategy } from './V1beta1VirtualMachinePoolAutohealingStrategy';
import type { V1beta1VirtualMachinePoolNameGeneration } from './V1beta1VirtualMachinePoolNameGeneration';
import type { V1beta1VirtualMachinePoolScaleInStrategy } from './V1beta1VirtualMachinePoolScaleInStrategy';
import type { V1beta1VirtualMachinePoolUpdateStrategy } from './V1beta1VirtualMachinePoolUpdateStrategy';
import type { V1beta1VirtualMachineTemplateSpec } from './V1beta1VirtualMachineTemplateSpec';

export interface V1beta1VirtualMachinePoolSpec {
  /** Autohealing specifies when a VMpool should replace a failing VM with a reprovisioned instance */
  autohealing?: V1beta1VirtualMachinePoolAutohealingStrategy;
  /** (Defaults to 100%) Integer or string pointer, that when set represents either a percentage or number of VMs in a pool that can be unavailable (ready condition false) at a time during automated update. */
  maxUnavailable?: K8sIoApimachineryPkgUtilIntstrIntOrString;
  /** Options for the name generation in a pool. */
  nameGeneration?: V1beta1VirtualMachinePoolNameGeneration;
  /** Indicates that the pool is paused. */
  paused?: boolean;
  /**
   * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
   * @format int32
   */
  replicas?: number;
  /** ScaleInStrategy specifies how the VMPool controller manages scaling in VMs within a VMPool */
  scaleInStrategy?: V1beta1VirtualMachinePoolScaleInStrategy;
  /** Label selector for pods. Existing Poolss whose pods are selected by this will be the ones affected by this deployment. */
  selector: K8sIoApimachineryPkgApisMetaV1LabelSelector;
  /** UpdateStrategy specifies how the VMPool controller manages updating VMs within a VMPool */
  updateStrategy?: V1beta1VirtualMachinePoolUpdateStrategy;
  /** Template describes the VM that will be created. */
  virtualMachineTemplate: V1beta1VirtualMachineTemplateSpec;
}
