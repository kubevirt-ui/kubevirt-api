import { V1UnpauseOptions } from '../models/V1UnpauseOptions';

export const testObject: V1UnpauseOptions = {
  apiVersion: 'subresources.kubevirt.io/v1',
  dryRun: ['All'],
  kind: 'UnpauseOptions',
};
