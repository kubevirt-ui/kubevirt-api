import { V1StopOptions } from '../models/V1StopOptions';

export const testObject: V1StopOptions = {
  apiVersion: 'subresources.kubevirt.io/v1',
  dryRun: ['All'],
  gracePeriod: 30,
  kind: 'StopOptions',
};
