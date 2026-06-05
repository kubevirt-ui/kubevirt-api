import type { V1LocalObjectReference } from './V1LocalObjectReference';
import type { V1ResourceRequirements } from './V1ResourceRequirements';
import type { V1beta1FilesystemOverhead } from './V1beta1FilesystemOverhead';
import type { V1beta1ImportProxy } from './V1beta1ImportProxy';
import type { V1beta1TLSSecurityProfile } from './V1beta1TLSSecurityProfile';

/** CDIConfigSpec defines specification for user configuration */
export interface V1beta1CDIConfigSpec {
  /**
   * DataVolumeTTLSeconds is the time in seconds after DataVolume completion it can be garbage collected. Disabled by default. Deprecated: Removed in v1.62.
   * @format int32
   */
  dataVolumeTTLSeconds?: number;
  /** FeatureGates are a list of specific enabled feature gates */
  featureGates?: string[];
  /** FilesystemOverhead describes the space reserved for overhead when using Filesystem volumes. A value is between 0 and 1, if not defined it is 0.06 (6% overhead) */
  filesystemOverhead?: V1beta1FilesystemOverhead;
  /** The imagePullSecrets used to pull the container images */
  imagePullSecrets?: V1LocalObjectReference[];
  /** ImportProxy contains importer pod proxy configuration. */
  importProxy?: V1beta1ImportProxy;
  /** InsecureRegistries is a list of TLS disabled registries */
  insecureRegistries?: string[];
  /**
   * LogVerbosity overrides the default verbosity level used to initialize loggers
   * @format int32
   */
  logVerbosity?: number;
  /** ResourceRequirements describes the compute resource requirements. */
  podResourceRequirements?: V1ResourceRequirements;
  /** Preallocation controls whether storage for DataVolumes should be allocated in advance. */
  preallocation?: boolean;
  /** Override the storage class to used for scratch space during transfer operations. The scratch space storage class is determined in the following order: 1. value of scratchSpaceStorageClass, if that doesn't exist, use the default storage class, if there is no default storage class, use the storage class of the DataVolume, if no storage class specified, use no storage class for scratch space */
  scratchSpaceStorageClass?: string;
  /** TLSSecurityProfile is used by operators to apply cluster-wide TLS security settings to operands. */
  tlsSecurityProfile?: V1beta1TLSSecurityProfile;
  /** Override the URL used when uploading to a DataVolume */
  uploadProxyURLOverride?: string;
}
