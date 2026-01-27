import { V1GenerationStatus } from '../models/V1GenerationStatus';

export const testObject: V1GenerationStatus = {
  group: 'kubevirt.io',
  hash: 'sha256:abc123',
  lastGeneration: 1,
  name: 'my-vm',
  namespace: 'default',
  resource: 'virtualmachines',
};
