import { K8sIoApiCoreV1TypedLocalObjectReference } from '../models/K8sIoApiCoreV1TypedLocalObjectReference';

export const testObject: K8sIoApiCoreV1TypedLocalObjectReference = {
  apiGroup: 'snapshot.storage.k8s.io',
  kind: 'VolumeSnapshot',
  name: 'test-snapshot',
};
