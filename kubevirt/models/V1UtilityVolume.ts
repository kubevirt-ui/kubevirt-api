export interface V1UtilityVolume {
  /**
   * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
   * @default ""
   */
  claimName: string;
  /**
   * UtilityVolume's name. Must be unique within the vmi, including regular Volumes.
   * @default ""
   */
  name: string;
  /** readOnly Will force the ReadOnly setting in VolumeMounts. Default false. */
  readOnly?: boolean;
  /** Type represents the type of the utility volume. */
  type?: string;
}
