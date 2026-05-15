import { V1InstancetypeMatcher } from '../models/V1InstancetypeMatcher';

export const testObject: V1InstancetypeMatcher = {
  inferFromVolume: 'rootdisk',
  inferFromVolumeFailurePolicy: 'RejectInferFromVolumeFailure',
  kind: 'VirtualMachineInstancetype',
  name: 'u1.medium',
  revisionName: 'u1.medium-revision-1234',
};
