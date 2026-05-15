import { V1ChangedBlockTrackingSelectors } from '../models/V1ChangedBlockTrackingSelectors';

export const testObject: V1ChangedBlockTrackingSelectors = {
  namespaceLabelSelector: {
    matchLabels: { 'kubernetes.io/metadata.name': 'default' },
  },
  virtualMachineLabelSelector: {
    matchLabels: { app: 'test-vm' },
  },
};
