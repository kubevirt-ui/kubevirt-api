import { V1VirtualMachineStatus } from '../models/V1VirtualMachineStatus';

export const testObject: V1VirtualMachineStatus = {
  conditions: [
    {
      status: 'True',
      type: 'Ready',
    },
  ],
  created: true,
  desiredGeneration: 1,
  observedGeneration: 1,
  printableStatus: 'Running',
  ready: true,
};
