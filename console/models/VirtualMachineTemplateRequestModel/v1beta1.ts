import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../../modelUtils';
import { virtualMachineTemplateRequestBaseModel } from './base';

export const VirtualMachineTemplateRequestV1Beta1Model: K8sModel = {
  ...virtualMachineTemplateRequestBaseModel,
  apiVersion: 'v1beta1',
};

export const VirtualMachineTemplateRequestV1Beta1ModelGroupVersionKind = modelToGroupVersionKind(
  VirtualMachineTemplateRequestV1Beta1Model,
);
export const VirtualMachineTemplateRequestV1Beta1ModelRef = modelToRef(
  VirtualMachineTemplateRequestV1Beta1Model,
);
