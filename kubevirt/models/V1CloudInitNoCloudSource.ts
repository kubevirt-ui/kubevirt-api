import type { K8sIoApiCoreV1LocalObjectReference } from './K8sIoApiCoreV1LocalObjectReference';

/** Represents a cloud-init nocloud user data source. More info: http://cloudinit.readthedocs.io/en/latest/topics/datasources/nocloud.html */
export interface V1CloudInitNoCloudSource {
  /** NetworkData contains NoCloud inline cloud-init networkdata. */
  networkData?: string;
  /** NetworkDataBase64 contains NoCloud cloud-init networkdata as a base64 encoded string. */
  networkDataBase64?: string;
  /** NetworkDataSecretRef references a k8s secret that contains NoCloud networkdata. */
  networkDataSecretRef?: K8sIoApiCoreV1LocalObjectReference;
  /** UserDataSecretRef references a k8s secret that contains NoCloud userdata. */
  secretRef?: K8sIoApiCoreV1LocalObjectReference;
  /** UserData contains NoCloud inline cloud-init userdata. */
  userData?: string;
  /** UserDataBase64 contains NoCloud cloud-init userdata as a base64 encoded string. */
  userDataBase64?: string;
}
