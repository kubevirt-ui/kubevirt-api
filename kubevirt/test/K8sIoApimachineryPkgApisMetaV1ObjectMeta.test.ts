import { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from '../models/K8sIoApimachineryPkgApisMetaV1ObjectMeta';

export const testObject: K8sIoApimachineryPkgApisMetaV1ObjectMeta = {
  annotations: { 'test-annotation': 'test-value' },
  creationTimestamp: '2026-01-27T00:00:00Z',
  deletionGracePeriodSeconds: 30,
  deletionTimestamp: '2026-01-27T00:00:30Z',
  finalizers: ['test-finalizer'],
  generateName: 'test-',
  generation: 1,
  labels: { app: 'test-app' },
  managedFields: [
    {
      apiVersion: 'v1',
      fieldsType: 'FieldsV1',
      fieldsV1: {},
      manager: 'test-manager',
      operation: 'Apply',
      subresource: 'status',
      time: '2026-01-27T00:00:00Z',
    },
  ],
  name: 'test-name',
  namespace: 'test-namespace',
  ownerReferences: [
    {
      apiVersion: 'v1',
      blockOwnerDeletion: true,
      controller: true,
      kind: 'Deployment',
      name: 'test-owner',
      uid: 'test-uid',
    },
  ],
  resourceVersion: '12345',
  selfLink: '/api/v1/namespaces/test-namespace/pods/test-name',
  uid: 'test-uid-12345',
};
