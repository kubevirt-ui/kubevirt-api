import { V1ObjectGraphOptions } from '../models/V1ObjectGraphOptions';

export const testObject: V1ObjectGraphOptions = {
  includeOptionalNodes: true,
  labelSelector: {
    matchLabels: { 'app': 'my-vm' },
  },
};
