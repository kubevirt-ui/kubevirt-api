import type { K8sIoApiCoreV1LocalObjectReference } from './K8sIoApiCoreV1LocalObjectReference';

/** Represents a cloud-init config drive user data source. More info: https://cloudinit.readthedocs.io/en/latest/topics/datasources/configdrive.html */
export interface V1CloudInitConfigDriveSource {
  /** NetworkData contains config drive inline cloud-init networkdata. */
  networkData?: string;
  /** NetworkDataBase64 contains config drive cloud-init networkdata as a base64 encoded string. */
  networkDataBase64?: string;
  /** NetworkDataSecretRef references a k8s secret that contains config drive networkdata. */
  networkDataSecretRef?: K8sIoApiCoreV1LocalObjectReference;
  /** UserDataSecretRef references a k8s secret that contains config drive userdata. */
  secretRef?: K8sIoApiCoreV1LocalObjectReference;
  /** UserData contains config drive inline cloud-init userdata. */
  userData?: string;
  /** UserDataBase64 contains config drive cloud-init userdata as a base64 encoded string. */
  userDataBase64?: string;
}
