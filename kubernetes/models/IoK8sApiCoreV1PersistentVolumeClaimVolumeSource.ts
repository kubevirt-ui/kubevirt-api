export interface IoK8sApiCoreV1PersistentVolumeClaimVolumeSource {
  /** claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  claimName: string;
  /** readOnly Will force the ReadOnly setting in VolumeMounts. Default false. */
  readOnly?: boolean;
}
