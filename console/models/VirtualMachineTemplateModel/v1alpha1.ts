import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../../modelUtils';
import { virtualMachineTemplateBaseModel } from './base';

/** Legacy virt-template model for clusters before v1beta1 API (OpenShift Virtualization < 4.23). */
export const VirtualMachineTemplateV1Alpha1Model: K8sModel = {
  ...virtualMachineTemplateBaseModel,
  apiVersion: 'v1alpha1',
};

export const VirtualMachineTemplateV1Alpha1ModelGroupVersionKind = modelToGroupVersionKind(
  VirtualMachineTemplateV1Alpha1Model,
);
export const VirtualMachineTemplateV1Alpha1ModelRef = modelToRef(
  VirtualMachineTemplateV1Alpha1Model,
);
