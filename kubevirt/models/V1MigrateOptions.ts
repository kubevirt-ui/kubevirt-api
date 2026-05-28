export interface V1MigrateOptions {
  /** AddedNodeSelector is an additional selector that can be used to complement a NodeSelector or NodeAffinity as set on the VM to restrict the set of allowed target nodes for a migration. In case of key collisions, values set on the VM objects are going to be preserved to ensure that addedNodeSelector can only restrict but not bypass constraints already set on the VM object. */
  addedNodeSelector?: Record<string, string>;
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed */
  dryRun?: string[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
}
