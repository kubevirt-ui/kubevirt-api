import type { V1Disk } from './V1Disk';
import type { V1HotplugVolumeSource } from './V1HotplugVolumeSource';

export interface V1AddVolumeOptions {
  /** Disk represents the hotplug disk that will be plugged into the running VMI */
  disk: V1Disk;
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string[];
  /**
   * Name represents the name that will be used to map the disk to the corresponding volume. This overrides any name set inside the Disk struct itself.
   * @default ""
   */
  name: string;
  /** VolumeSource represents the source of the volume to map to the disk. */
  volumeSource: V1HotplugVolumeSource;
}
