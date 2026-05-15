import { V1StartOptions } from '../models/V1StartOptions';

export const testObject: V1StartOptions = {
  apiVersion: 'subresources.kubevirt.io/v1',
  dryRun: ['All'],
  kind: 'StartOptions',
  paused: false,
};
