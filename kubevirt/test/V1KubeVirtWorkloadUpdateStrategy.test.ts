import { V1KubeVirtWorkloadUpdateStrategy } from '../models/V1KubeVirtWorkloadUpdateStrategy';

export const testObject: V1KubeVirtWorkloadUpdateStrategy = {
  batchEvictionInterval: '1m',
  batchEvictionSize: 10,
  workloadUpdateMethods: ['LiveMigrate', 'Shutdown'],
};
