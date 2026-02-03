import { V1beta1VirtualMachineInstancetypeSpec } from '../models/V1beta1VirtualMachineInstancetypeSpec';

export const testObject: V1beta1VirtualMachineInstancetypeSpec = {
  annotations: { 'kubevirt.io/test': 'true' },
  cpu: {
    guest: 4,
    dedicatedCPUPlacement: true,
    model: 'host-passthrough',
  },
  gpus: [
    {
      deviceName: 'nvidia.com/GP102GL_Tesla_P40',
      name: 'gpu1',
    },
  ],
  hostDevices: [
    {
      deviceName: 'intel.com/qat',
      name: 'qat1',
    },
  ],
  ioThreadsPolicy: 'shared',
  launchSecurity: {
    sev: {
      attestation: {},
    },
  },
  memory: {
    guest: '8Gi',
  },
  nodeSelector: { 'node-role.kubernetes.io/worker': '' },
  schedulerName: 'my-scheduler',
};
