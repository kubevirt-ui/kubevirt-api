import type { V1LocalObjectReference } from './V1LocalObjectReference';
import type { V1ResourceRequirements } from './V1ResourceRequirements';
import type { V1beta1FilesystemOverhead } from './V1beta1FilesystemOverhead';
import type { V1beta1ImportProxy } from './V1beta1ImportProxy';

/** CDIConfigStatus provides the most recently observed status of the CDI Config resource */
export interface V1beta1CDIConfigStatus {
  /** ResourceRequirements describes the compute resource requirements. */
  defaultPodResourceRequirements?: V1ResourceRequirements;
  /** FilesystemOverhead describes the space reserved for overhead when using Filesystem volumes. A percentage value is between 0 and 1 */
  filesystemOverhead?: V1beta1FilesystemOverhead;
  /** The imagePullSecrets used to pull the container images */
  imagePullSecrets?: V1LocalObjectReference[];
  /** ImportProxy contains importer pod proxy configuration. */
  importProxy?: V1beta1ImportProxy;
  /** Preallocation controls whether storage for DataVolumes should be allocated in advance. */
  preallocation?: boolean;
  /** The calculated storage class to be used for scratch space */
  scratchSpaceStorageClass?: string;
  /** UploadProxyCA is the certificate authority of the upload proxy */
  uploadProxyCA?: string;
  /** The calculated upload proxy URL */
  uploadProxyURL?: string;
}
