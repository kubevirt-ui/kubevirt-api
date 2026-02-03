import { K8sIoApimachineryPkgApisMetaV1Status } from '../models/K8sIoApimachineryPkgApisMetaV1Status';

export const testObject: K8sIoApimachineryPkgApisMetaV1Status = {
  apiVersion: 'v1',
  code: 404,
  details: {
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
  },
  kind: 'Status',
  message: 'VirtualMachine "test-vm" not found',
  metadata: {
    _continue: 'test-continue',
    remainingItemCount: 0,
    resourceVersion: '12345',
  },
  reason: 'NotFound',
  status: 'Failure',
};
