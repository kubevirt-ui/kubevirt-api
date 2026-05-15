import { V1beta1VirtualMachinePreference } from '../models/V1beta1VirtualMachinePreference';

export const testObject: V1beta1VirtualMachinePreference = {
  apiVersion: 'instancetype.kubevirt.io/v1beta1',
  kind: 'VirtualMachinePreference',
  metadata: {
    name: 'fedora',
    namespace: 'default',
  },
  spec: {},
};
