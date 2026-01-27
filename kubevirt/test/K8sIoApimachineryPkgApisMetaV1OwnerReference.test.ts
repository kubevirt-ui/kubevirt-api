import { K8sIoApimachineryPkgApisMetaV1OwnerReference } from '../models/K8sIoApimachineryPkgApisMetaV1OwnerReference';

export const testObject: K8sIoApimachineryPkgApisMetaV1OwnerReference = {
  apiVersion: 'apps/v1',
  blockOwnerDeletion: true,
  controller: true,
  kind: 'Deployment',
  name: 'test-owner',
  uid: 'test-uid-12345',
};
