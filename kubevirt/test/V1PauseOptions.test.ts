import { V1PauseOptions } from '../models/V1PauseOptions';

export const testObject: V1PauseOptions = {
  apiVersion: 'subresources.kubevirt.io/v1',
  dryRun: ['All'],
  kind: 'PauseOptions',
};
