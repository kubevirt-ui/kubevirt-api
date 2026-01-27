import { V1KubeVirtSpec, V1KubeVirtSpecImagePullPolicyEnum } from '../models/V1KubeVirtSpec';

export const testObject: V1KubeVirtSpec = {
  imagePullPolicy: V1KubeVirtSpecImagePullPolicyEnum.IfNotPresent,
  imageRegistry: 'quay.io/kubevirt',
  imageTag: 'v1.0.0',
  monitorAccount: 'prometheus-k8s',
  monitorNamespace: 'openshift-monitoring',
  productName: 'kubevirt',
  productVersion: 'v1.0.0',
  uninstallStrategy: 'BlockUninstallIfWorkloadsExist',
};
