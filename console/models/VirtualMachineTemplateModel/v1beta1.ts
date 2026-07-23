import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../../modelUtils';
import { virtualMachineTemplateBaseModel } from './base';

export const VirtualMachineTemplateV1Beta1Model: K8sModel = {
  ...virtualMachineTemplateBaseModel,
  apiVersion: 'v1beta1',
};

export const VirtualMachineTemplateV1Beta1ModelGroupVersionKind = modelToGroupVersionKind(
  VirtualMachineTemplateV1Beta1Model,
);
export const VirtualMachineTemplateV1Beta1ModelRef = modelToRef(VirtualMachineTemplateV1Beta1Model);
