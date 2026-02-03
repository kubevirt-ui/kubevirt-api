import { K8sIoApimachineryPkgApisMetaV1WatchEvent } from '../models/K8sIoApimachineryPkgApisMetaV1WatchEvent';

export const testObject: K8sIoApimachineryPkgApisMetaV1WatchEvent = {
  object: {
    apiVersion: 'kubevirt.io/v1',
    kind: 'VirtualMachine',
    metadata: { name: 'test-vm' },
  },
  type: 'ADDED',
};
