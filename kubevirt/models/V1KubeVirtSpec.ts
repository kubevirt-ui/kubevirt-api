import type { K8sIoApiCoreV1LocalObjectReference } from './K8sIoApiCoreV1LocalObjectReference';
import type { V1ComponentConfig } from './V1ComponentConfig';
import type { V1CustomizeComponents } from './V1CustomizeComponents';
import type { V1KubeVirtCertificateRotateStrategy } from './V1KubeVirtCertificateRotateStrategy';
import type { V1KubeVirtConfiguration } from './V1KubeVirtConfiguration';
import type { V1KubeVirtSpecImagePullPolicyEnum } from './V1KubeVirtSpecImagePullPolicyEnum';
import type { V1KubeVirtWorkloadUpdateStrategy } from './V1KubeVirtWorkloadUpdateStrategy';

export interface V1KubeVirtSpec {
  /** @default {} */
  certificateRotateStrategy?: V1KubeVirtCertificateRotateStrategy;
  /**
   * holds kubevirt configurations. same as the virt-configMap
   * @default {}
   */
  configuration?: V1KubeVirtConfiguration;
  /** @default {} */
  customizeComponents?: V1CustomizeComponents;
  /**
   * The ImagePullPolicy to use.
   *
   * Possible enum values:
   *  - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
   *  - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
   *  - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
   */
  imagePullPolicy?: V1KubeVirtSpecImagePullPolicyEnum;
  /** The imagePullSecrets to pull the container images from Defaults to none */
  imagePullSecrets?: K8sIoApiCoreV1LocalObjectReference[];
  /** The image registry to pull the container images from Defaults to the same registry the operator's container image is pulled from. */
  imageRegistry?: string;
  /** The image tag to use for the continer images installed. Defaults to the same tag as the operator's container image. */
  imageTag?: string;
  /** selectors and tolerations that should apply to KubeVirt infrastructure components */
  infra?: V1ComponentConfig;
  /** The name of the Prometheus service account that needs read-access to KubeVirt endpoints Defaults to prometheus-k8s */
  monitorAccount?: string;
  /** The namespace Prometheus is deployed in Defaults to openshift-monitor */
  monitorNamespace?: string;
  /** Designate the apps.kubevirt.io/component label for KubeVirt components. Useful if KubeVirt is included as part of a product. If ProductComponent is not specified, the component label default value is kubevirt. */
  productComponent?: string;
  /** Designate the apps.kubevirt.io/part-of label for KubeVirt components. Useful if KubeVirt is included as part of a product. If ProductName is not specified, the part-of label will be omitted. */
  productName?: string;
  /** Designate the apps.kubevirt.io/version label for KubeVirt components. Useful if KubeVirt is included as part of a product. If ProductVersion is not specified, KubeVirt's version will be used. */
  productVersion?: string;
  /**
   * The namespace the service monitor will be deployed
   *  When ServiceMonitorNamespace is set, then we'll install the service monitor object in that namespace
   * otherwise we will use the monitoring namespace.
   */
  serviceMonitorNamespace?: string;
  /** Specify the port to listen on for VMI status synchronization traffic. Default is 9185 */
  synchronizationPort?: string;
  /** Specifies if kubevirt can be deleted if workloads are still present. This is mainly a precaution to avoid accidental data loss */
  uninstallStrategy?: string;
  /**
   * WorkloadUpdateStrategy defines at the cluster level how to handle automated workload updates
   * @default {}
   */
  workloadUpdateStrategy?: V1KubeVirtWorkloadUpdateStrategy;
  /** selectors and tolerations that should apply to KubeVirt workloads */
  workloads?: V1ComponentConfig;
}
