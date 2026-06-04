import type { V1beta1SourceSpec } from './V1beta1SourceSpec';
import type { V1beta1VolumeBackup } from './V1beta1VolumeBackup';

/** VirtualMachineSnapshotContentSpec is the spec for a VirtualMachineSnapshotContent resource */
export interface V1beta1VirtualMachineSnapshotContentSpec {
  /**
   * SourceSpec contains the appropriate spec for the resource being snapshotted
   * @default {}
   */
  source: V1beta1SourceSpec;
  virtualMachineSnapshotName?: string;
  volumeBackups?: V1beta1VolumeBackup[];
}
