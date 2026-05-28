export interface IoK8sApiApiserverinternalV1alpha1ServerStorageVersion {
  /** The ID of the reporting API server. */
  apiServerID?: string;
  /** The API server can decode objects encoded in these versions. The encodingVersion must be included in the decodableVersions. */
  decodableVersions?: string[];
  /** The API server encodes the object to this version when persisting it in the backend (e.g., etcd). */
  encodingVersion?: string;
  /** The API server can serve these versions. DecodableVersions must include all ServedVersions. */
  servedVersions?: string[];
}
