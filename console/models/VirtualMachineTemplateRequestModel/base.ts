import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

export const virtualMachineTemplateRequestBaseModel: Omit<K8sModel, 'apiVersion'> = {
  label: 'VirtualMachineTemplateRequest',
  labelPlural: 'VirtualMachineTemplateRequests',
  apiGroup: 'template.kubevirt.io',
  plural: 'virtualmachinetemplaterequests',
  abbr: 'VMTR',
  namespaced: true,
  kind: 'VirtualMachineTemplateRequest',
  id: 'virtualmachinetemplaterequest',
  crd: true,
};
