import type { V1ChangedBlockTrackingStatus } from './V1ChangedBlockTrackingStatus';
import type { V1InstancetypeStatusRef } from './V1InstancetypeStatusRef';
import type { V1VirtualMachineCondition } from './V1VirtualMachineCondition';
import type { V1VirtualMachineMemoryDumpRequest } from './V1VirtualMachineMemoryDumpRequest';
import type { V1VirtualMachineStartFailure } from './V1VirtualMachineStartFailure';
import type { V1VirtualMachineStateChangeRequest } from './V1VirtualMachineStateChangeRequest';
import type { V1VirtualMachineVolumeRequest } from './V1VirtualMachineVolumeRequest';
import type { V1VolumeSnapshotStatus } from './V1VolumeSnapshotStatus';
import type { V1VolumeUpdateState } from './V1VolumeUpdateState';

/** VirtualMachineStatus represents the status returned by the controller to describe how the VirtualMachine is doing */
export type V1VirtualMachineStatus = {
  /** ChangedBlockTracking represents the status of the changedBlockTracking */
  changedBlockTracking?: V1ChangedBlockTrackingStatus;
  /** Hold the state information of the VirtualMachine and its VirtualMachineInstance */
  conditions?: V1VirtualMachineCondition[];
  /** Created indicates if the virtual machine is created in the cluster */
  created?: boolean;
  /**
   * DesiredGeneration is the generation which is desired for the VMI. This will be used in comparisons with ObservedGeneration to understand when the VMI is out of sync. This will be changed at the same time as ObservedGeneration to remove errors which could occur if Generation is updated through an Update() before ObservedGeneration in Status.
   * @format int64
   */
  desiredGeneration?: number;
  /** InstancetypeRef captures the state of any referenced instance type from the VirtualMachine */
  instancetypeRef?: V1InstancetypeStatusRef;
  /** MemoryDumpRequest tracks memory dump request phase and info of getting a memory dump to the given pvc */
  memoryDumpRequest?: V1VirtualMachineMemoryDumpRequest;
  /**
   * ObservedGeneration is the generation observed by the vmi when started.
   * @format int64
   */
  observedGeneration?: number;
  /** PreferenceRef captures the state of any referenced preference from the VirtualMachine */
  preferenceRef?: V1InstancetypeStatusRef;
  /** PrintableStatus is a human readable, high-level representation of the status of the virtual machine */
  printableStatus?: string;
  /** Ready indicates if the virtual machine is running and ready */
  ready?: boolean;
  /** RestoreInProgress is the name of the VirtualMachineRestore currently executing */
  restoreInProgress?: string;
  /** RunStrategy tracks the last recorded RunStrategy used by the VM. This is needed to correctly process the next strategy (for now only the RerunOnFailure) */
  runStrategy?: string;
  /** SnapshotInProgress is the name of the VirtualMachineSnapshot currently executing */
  snapshotInProgress?: string;
  /** StartFailure tracks consecutive VMI startup failures for the purposes of crash loop backoffs */
  startFailure?: V1VirtualMachineStartFailure;
  /** StateChangeRequests indicates a list of actions that should be taken on a VMI e.g. stop a specific VMI then start a new one. */
  stateChangeRequests?: V1VirtualMachineStateChangeRequest[];
  /** VolumeRequests indicates a list of volumes add or remove from the VMI template and hotplug on an active running VMI. */
  volumeRequests?: V1VirtualMachineVolumeRequest[];
  /** VolumeSnapshotStatuses indicates a list of statuses whether snapshotting is supported by each volume. */
  volumeSnapshotStatuses?: V1VolumeSnapshotStatus[];
  /** VolumeUpdateState contains the information about the volumes set updates related to the volumeUpdateStrategy */
  volumeUpdateState?: V1VolumeUpdateState;
} | null;
