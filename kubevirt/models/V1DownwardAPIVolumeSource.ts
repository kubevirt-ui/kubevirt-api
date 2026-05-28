import type { K8sIoApiCoreV1DownwardAPIVolumeFile } from './K8sIoApiCoreV1DownwardAPIVolumeFile';

export interface V1DownwardAPIVolumeSource {
  /** Fields is a list of downward API volume file */
  fields?: K8sIoApiCoreV1DownwardAPIVolumeFile[];
  /** The volume label of the resulting disk inside the VMI. Different bootstrapping mechanisms require different values. Typical values are "cidata" (cloud-init), "config-2" (cloud-init) or "OEMDRV" (kickstart). */
  volumeLabel?: string;
}
