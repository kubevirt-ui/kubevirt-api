import { V1MigrateOptions } from '../models/V1MigrateOptions';

export const testObject: V1MigrateOptions = {
  addedNodeSelector: { 'topology.kubernetes.io/zone': 'us-west-2a' },
  apiVersion: 'subresources.kubevirt.io/v1',
  dryRun: ['All'],
  kind: 'MigrateOptions',
};
