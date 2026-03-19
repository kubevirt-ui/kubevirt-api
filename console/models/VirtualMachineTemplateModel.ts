import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

export const VirtualMachineTemplateModel: K8sModel = {
  label: 'VirtualMachineTemplate',
  labelPlural: 'VirtualMachineTemplates',
  apiVersion: 'v1alpha1',
  apiGroup: 'template.kubevirt.io',
  plural: 'virtualmachinetemplates',
  abbr: 'VMT',
  namespaced: true,
  kind: 'VirtualMachineTemplate',
  id: 'virtualmachinetemplate',
  crd: true,
};

export const VirtualMachineTemplateModelGroupVersionKind = modelToGroupVersionKind(
  VirtualMachineTemplateModel,
);
export const VirtualMachineTemplateModelRef = modelToRef(VirtualMachineTemplateModel);
