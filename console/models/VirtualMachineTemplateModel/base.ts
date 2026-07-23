import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

export const virtualMachineTemplateBaseModel: Omit<K8sModel, 'apiVersion'> = {
  label: 'VirtualMachineTemplate',
  labelPlural: 'VirtualMachineTemplates',
  apiGroup: 'template.kubevirt.io',
  plural: 'virtualmachinetemplates',
  abbr: 'VMT',
  namespaced: true,
  kind: 'VirtualMachineTemplate',
  id: 'virtualmachinetemplate',
  crd: true,
};
