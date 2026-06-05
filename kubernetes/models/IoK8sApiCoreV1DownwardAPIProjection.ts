import type { IoK8sApiCoreV1DownwardAPIVolumeFile } from './IoK8sApiCoreV1DownwardAPIVolumeFile';

/** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
export interface IoK8sApiCoreV1DownwardAPIProjection {
  /** Items is a list of DownwardAPIVolume file */
  items?: IoK8sApiCoreV1DownwardAPIVolumeFile[];
}
