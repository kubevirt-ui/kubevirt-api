import { V1RestartOptions } from '../models/V1RestartOptions';

export const testObject: V1RestartOptions = {
  apiVersion: 'subresources.kubevirt.io/v1',
  dryRun: ['All'],
  gracePeriodSeconds: 30,
  kind: 'RestartOptions',
};
