import { V1VirtualMachineInstancePresetSpec } from '../models/V1VirtualMachineInstancePresetSpec';

export const testObject: V1VirtualMachineInstancePresetSpec = {
  selector: {
    matchLabels: { 'preset': 'my-preset' },
  },
  domain: {
    devices: {},
  },
};
