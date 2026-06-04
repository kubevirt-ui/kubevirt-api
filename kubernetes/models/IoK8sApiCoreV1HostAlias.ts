/** HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file. */
export interface IoK8sApiCoreV1HostAlias {
  /** Hostnames for the above IP address. */
  hostnames?: string[];
  /** IP address of the host file entry. */
  ip: string;
}
