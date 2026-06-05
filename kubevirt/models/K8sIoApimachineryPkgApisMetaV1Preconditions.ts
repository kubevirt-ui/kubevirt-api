/** Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out. */
export interface K8sIoApimachineryPkgApisMetaV1Preconditions {
  /** Specifies the target ResourceVersion */
  resourceVersion?: string;
  /** Specifies the target UID. */
  uid?: string;
}
