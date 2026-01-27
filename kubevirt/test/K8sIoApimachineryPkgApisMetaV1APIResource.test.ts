import { K8sIoApimachineryPkgApisMetaV1APIResource } from '../models/K8sIoApimachineryPkgApisMetaV1APIResource';

export const testObject: K8sIoApimachineryPkgApisMetaV1APIResource = {
  categories: ['all'],
  group: 'kubevirt.io',
  kind: 'VirtualMachine',
  name: 'virtualmachines',
  namespaced: true,
  shortNames: ['vm', 'vms'],
  singularName: 'virtualmachine',
  storageVersionHash: 'test-hash',
  verbs: ['get', 'list', 'watch', 'create', 'update', 'patch', 'delete'],
  version: 'v1',
};
