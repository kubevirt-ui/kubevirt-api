import { V1DeveloperConfiguration } from '../models/V1DeveloperConfiguration';

export const testObject: V1DeveloperConfiguration = {
  clusterProfiler: false,
  cpuAllocationRatio: 10,
  diskVerification: {
    memoryLimit: '50Mi',
  },
  featureGates: ['LiveMigration', 'GPU'],
  memoryOvercommit: 100,
  minimumClusterTSCFrequency: 3000000000,
  minimumReservePVCBytes: 131072,
  nodeSelectors: { 'node-type': 'worker' },
  pvcTolerateLessSpaceUpToPercent: 10,
  useEmulation: false,
};
