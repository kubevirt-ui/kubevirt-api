import { V1beta1SnapshotVolumesLists } from '../models/V1beta1SnapshotVolumesLists';

export const testObject: V1beta1SnapshotVolumesLists = {
  excludedVolumes: ['cloudinit', 'emptydisk'],
  includedVolumes: ['rootdisk', 'datadisk'],
};
