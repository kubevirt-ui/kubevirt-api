/** SnapshotVolumesLists includes the list of volumes which were included in the snapshot and volumes which were excluded from the snapshot */
export interface V1beta1SnapshotVolumesLists {
  excludedVolumes?: string[];
  includedVolumes?: string[];
}
