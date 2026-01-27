import { K8sIoApimachineryPkgApisMetaV1StatusDetails } from '../models/K8sIoApimachineryPkgApisMetaV1StatusDetails';

export const testObject: K8sIoApimachineryPkgApisMetaV1StatusDetails = {
  causes: [
    {
      field: 'metadata.name',
      message: 'Not found',
      reason: 'NotFound',
    },
  ],
  group: 'kubevirt.io',
  kind: 'VirtualMachine',
  name: 'test-vm',
  retryAfterSeconds: 30,
  uid: 'test-uid',
};
