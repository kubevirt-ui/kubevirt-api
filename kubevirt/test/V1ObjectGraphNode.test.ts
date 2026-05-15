import { V1ObjectGraphNode } from '../models/V1ObjectGraphNode';

export const testObject: V1ObjectGraphNode = {
  apiVersion: 'v1',
  kind: 'ObjectGraphNode',
  labels: { 'app': 'my-vm' },
  objectReference: {
    apiGroup: 'kubevirt.io',
    kind: 'VirtualMachine',
    name: 'my-vm',
  },
  optional: false,
};
