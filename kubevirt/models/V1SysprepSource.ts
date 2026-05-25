import type { K8sIoApiCoreV1LocalObjectReference } from './K8sIoApiCoreV1LocalObjectReference';

export interface V1SysprepSource {
  /** ConfigMap references a ConfigMap that contains Sysprep answer file named autounattend.xml that should be attached as disk of CDROM type. */
  configMap?: K8sIoApiCoreV1LocalObjectReference;
  /** Secret references a k8s Secret that contains Sysprep answer file named autounattend.xml that should be attached as disk of CDROM type. */
  secret?: K8sIoApiCoreV1LocalObjectReference;
}
