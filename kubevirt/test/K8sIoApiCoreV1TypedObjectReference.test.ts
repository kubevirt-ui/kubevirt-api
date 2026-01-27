import { K8sIoApiCoreV1TypedObjectReference } from '../models/K8sIoApiCoreV1TypedObjectReference';

export const testObject: K8sIoApiCoreV1TypedObjectReference = {
  apiGroup: 'snapshot.storage.k8s.io',
  kind: 'VolumeSnapshot',
  name: 'test-snapshot',
  namespace: 'test-namespace',
};
