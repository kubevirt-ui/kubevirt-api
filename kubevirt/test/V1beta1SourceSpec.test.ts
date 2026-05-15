import { V1beta1SourceSpec } from '../models/V1beta1SourceSpec';

export const testObject: V1beta1SourceSpec = {
  virtualMachine: {
    metadata: {
      name: 'source-vm',
      namespace: 'default',
    },
  },
};
