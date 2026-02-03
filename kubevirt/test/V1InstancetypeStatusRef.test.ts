import { V1InstancetypeStatusRef } from '../models/V1InstancetypeStatusRef';

export const testObject: V1InstancetypeStatusRef = {
  controllerRevisionRef: {
    name: 'my-vm-controller-revision-12345',
  },
  inferFromVolume: 'rootdisk',
  inferFromVolumeFailurePolicy: 'RejectInferFromVolumeFailure',
  kind: 'VirtualMachineInstancetype',
  name: 'u1.medium',
};
