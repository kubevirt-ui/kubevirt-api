import type { IoK8sApiCoreV1ClusterTrustBundleProjection } from './IoK8sApiCoreV1ClusterTrustBundleProjection';
import type { IoK8sApiCoreV1ConfigMapProjection } from './IoK8sApiCoreV1ConfigMapProjection';
import type { IoK8sApiCoreV1DownwardAPIProjection } from './IoK8sApiCoreV1DownwardAPIProjection';
import type { IoK8sApiCoreV1SecretProjection } from './IoK8sApiCoreV1SecretProjection';
import type { IoK8sApiCoreV1ServiceAccountTokenProjection } from './IoK8sApiCoreV1ServiceAccountTokenProjection';

export interface IoK8sApiCoreV1VolumeProjection {
  /**
   * ClusterTrustBundle allows a pod to access the `.spec.trustBundle` field of ClusterTrustBundle objects in an auto-updating file.
   *
   * Alpha, gated by the ClusterTrustBundleProjection feature gate.
   *
   * ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector.
   *
   * Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem.  Esoteric PEM features such as inter-block comments and block headers are stripped.  Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
   */
  clusterTrustBundle?: IoK8sApiCoreV1ClusterTrustBundleProjection;
  /** configMap information about the configMap data to project */
  configMap?: IoK8sApiCoreV1ConfigMapProjection;
  /** downwardAPI information about the downwardAPI data to project */
  downwardAPI?: IoK8sApiCoreV1DownwardAPIProjection;
  /** secret information about the secret data to project */
  secret?: IoK8sApiCoreV1SecretProjection;
  /** serviceAccountToken is information about the serviceAccountToken data to project */
  serviceAccountToken?: IoK8sApiCoreV1ServiceAccountTokenProjection;
}
