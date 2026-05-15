import { V1beta1VirtualMachineClusterPreference } from '../models/V1beta1VirtualMachineClusterPreference';

export const testObject: V1beta1VirtualMachineClusterPreference = {
  apiVersion: 'instancetype.kubevirt.io/v1beta1',
  kind: 'VirtualMachineClusterPreference',
  metadata: {
    name: 'fedora',
  },
  spec: {},
};
