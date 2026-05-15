import { K8sIoApiCoreV1DownwardAPIVolumeFile } from '../models/K8sIoApiCoreV1DownwardAPIVolumeFile';

export const testObject: K8sIoApiCoreV1DownwardAPIVolumeFile = {
  fieldRef: {
    apiVersion: 'v1',
    fieldPath: 'metadata.name',
  },
  mode: 420,
  path: 'test-path',
  resourceFieldRef: {
    containerName: 'test-container',
    divisor: '1Mi',
    resource: 'limits.memory',
  },
};
