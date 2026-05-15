import { V1PreferenceMatcher } from '../models/V1PreferenceMatcher';

export const testObject: V1PreferenceMatcher = {
  inferFromVolume: 'rootdisk',
  inferFromVolumeFailurePolicy: 'RejectInferFromVolumeFailure',
  kind: 'VirtualMachinePreference',
  name: 'fedora',
  revisionName: 'fedora-revision-1234',
};
