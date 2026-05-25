export interface IoK8sApiCoreV1GitRepoVolumeSource {
  /** directory is the target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
  directory?: string;
  /** repository is the URL */
  repository: string;
  /** revision is the commit hash for the specified revision. */
  revision?: string;
}
