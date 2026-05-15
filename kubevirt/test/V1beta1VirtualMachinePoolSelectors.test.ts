import { V1beta1VirtualMachinePoolSelectors } from '../models/V1beta1VirtualMachinePoolSelectors';

export const testObject: V1beta1VirtualMachinePoolSelectors = {
  labelSelector: {
    matchLabels: { 'kubevirt.io/vmpool': 'test-pool' },
  },
  nodeSelectorRequirementMatcher: [
    {
      key: 'kubernetes.io/arch',
      operator: 'In',
      values: ['amd64'],
    },
  ],
};
