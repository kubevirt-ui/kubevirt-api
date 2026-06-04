import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';

/** BackupOptions are options used to configure virtual machine backup job */
export interface V1alpha1BackupOptions {
  backupCert?: string;
  backupKey?: string;
  backupName?: string;
  /** Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
  backupStartTime?: K8sIoApimachineryPkgApisMetaV1Time;
  caCert?: string;
  cmd?: string;
  exportServerAddr?: string;
  exportServerName?: string;
  incremental?: string;
  mode?: string;
  skipQuiesce?: boolean;
  targetPath?: string;
}
