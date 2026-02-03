import { V1KubeVirtStatus } from '../models/V1KubeVirtStatus';

export const testObject: V1KubeVirtStatus = {
  conditions: [
    {
      status: 'True',
      type: 'Available',
    },
  ],
  defaultArchitecture: 'amd64',
  observedGeneration: 1,
  observedKubeVirtVersion: 'v1.0.0',
  operatorVersion: 'v1.0.0',
  phase: 'Deployed',
  targetKubeVirtVersion: 'v1.0.0',
};
