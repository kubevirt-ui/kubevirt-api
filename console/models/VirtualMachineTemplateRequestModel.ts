import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

export const VirtualMachineTemplateRequestModel: K8sModel = {
  label: 'VirtualMachineTemplateRequest',
  labelPlural: 'VirtualMachineTemplateRequests',
  apiVersion: 'v1alpha1',
  apiGroup: 'template.kubevirt.io',
  plural: 'virtualmachinetemplaterequests',
  abbr: 'VMTR',
  namespaced: true,
  kind: 'VirtualMachineTemplateRequest',
  id: 'virtualmachinetemplaterequest',
  crd: true,
};

export const VirtualMachineTemplateRequestModelGroupVersionKind = modelToGroupVersionKind(
  VirtualMachineTemplateRequestModel,
);
export const VirtualMachineTemplateRequestModelRef = modelToRef(VirtualMachineTemplateRequestModel);
