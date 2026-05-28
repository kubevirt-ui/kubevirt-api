import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector';
import type { V1DomainSpec } from './V1DomainSpec';

export interface V1VirtualMachineInstancePresetSpec {
  /** Domain is the same object type as contained in VirtualMachineInstanceSpec */
  domain?: V1DomainSpec;
  /**
   * Selector is a label query over a set of VMIs. Required.
   * @default {}
   */
  selector: K8sIoApimachineryPkgApisMetaV1LabelSelector;
}
