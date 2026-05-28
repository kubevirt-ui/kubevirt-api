import type { V1DataVolumeTemplateSpec } from './V1DataVolumeTemplateSpec';
import type { V1InstancetypeMatcher } from './V1InstancetypeMatcher';
import type { V1PreferenceMatcher } from './V1PreferenceMatcher';
import type { V1VirtualMachineInstanceTemplateSpec } from './V1VirtualMachineInstanceTemplateSpec';

export interface V1VirtualMachineSpec {
  /** dataVolumeTemplates is a list of dataVolumes that the VirtualMachineInstance template can reference. DataVolumes in this list are dynamically created for the VirtualMachine and are tied to the VirtualMachine's life-cycle. */
  dataVolumeTemplates?: V1DataVolumeTemplateSpec[];
  /** InstancetypeMatcher references a instancetype that is used to fill fields in Template */
  instancetype?: V1InstancetypeMatcher;
  /** PreferenceMatcher references a set of preference that is used to fill fields in Template */
  preference?: V1PreferenceMatcher;
  /** Running state indicates the requested running state of the VirtualMachineInstance mutually exclusive with Running Following are allowed values: - "Always": VMI should always be running. - "Halted": VMI should never be running. - "Manual": VMI can be started/stopped using API endpoints. - "RerunOnFailure": VMI will initially be running and restarted if a failure occurs, but will not be restarted upon successful completion. - "Once": VMI will run once and not be restarted upon completion regardless if the completion is of phase Failure or Success. */
  runStrategy?: string;
  /** Running controls whether the associatied VirtualMachineInstance is created or not Mutually exclusive with RunStrategy Deprecated: VirtualMachineInstance field "Running" is now deprecated, please use RunStrategy instead. */
  running?: boolean;
  /** Template is the direct specification of VirtualMachineInstance */
  template: V1VirtualMachineInstanceTemplateSpec;
  /** UpdateVolumesStrategy is the strategy to apply on volumes updates */
  updateVolumesStrategy?: string;
}
