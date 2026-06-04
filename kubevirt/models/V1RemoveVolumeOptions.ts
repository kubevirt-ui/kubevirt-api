/** RemoveVolumeOptions is provided when dynamically hot unplugging volume and disk */
export interface V1RemoveVolumeOptions {
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string[];
  /**
   * Name represents the name that maps to both the disk and volume that should be removed
   * @default ""
   */
  name: string;
}
