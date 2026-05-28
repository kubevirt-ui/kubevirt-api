export interface V1GroupVersionForDiscovery {
  /**
   * groupVersion specifies the API group and version in the form "group/version"
   * @default ""
   */
  groupVersion: string;
  /**
   * version specifies the version in the form of "version". This is to save the clients the trouble of splitting the GroupVersion.
   * @default ""
   */
  version: string;
}
