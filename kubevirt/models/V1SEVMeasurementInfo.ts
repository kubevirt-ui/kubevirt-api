/** SEVMeasurementInfo contains information about the guest launch measurement. */
export interface V1SEVMeasurementInfo {
  /**
   * API major version of the SEV host.
   * @format int32
   */
  apiMajor?: number;
  /**
   * API minor version of the SEV host.
   * @format int32
   */
  apiMinor?: number;
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /**
   * Build ID of the SEV host.
   * @format int32
   */
  buildID?: number;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /** SHA256 of the loader binary */
  loaderSHA?: string;
  /** Base64 encoded launch measurement of the SEV guest. */
  measurement?: string;
  /**
   * Policy of the SEV guest.
   * @format int32
   */
  policy?: number;
}
