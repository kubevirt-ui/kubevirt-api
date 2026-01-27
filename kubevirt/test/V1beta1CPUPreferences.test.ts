import { V1beta1CPUPreferences } from '../models/V1beta1CPUPreferences';

export const testObject: V1beta1CPUPreferences = {
  preferredCPUFeatures: [
    {
      name: 'vmx',
      policy: 'require',
    },
  ],
  preferredCPUTopology: 'preferSockets',
  spreadOptions: {
    across: 'SocketsCores',
    ratio: 2,
  },
};
