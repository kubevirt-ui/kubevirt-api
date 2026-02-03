import { K8sIoApimachineryPkgApisMetaV1APIResourceList } from '../models/K8sIoApimachineryPkgApisMetaV1APIResourceList';

export const testObject: K8sIoApimachineryPkgApisMetaV1APIResourceList = {
  apiVersion: 'v1',
  groupVersion: 'kubevirt.io/v1',
  kind: 'APIResourceList',
  resources: [
    {
      kind: 'VirtualMachine',
      name: 'virtualmachines',
      namespaced: true,
      singularName: 'virtualmachine',
      verbs: ['get', 'list', 'watch', 'create', 'update', 'patch', 'delete'],
    },
  ],
};
