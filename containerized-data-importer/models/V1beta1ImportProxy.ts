export interface V1beta1ImportProxy {
  /** HTTPProxy is the URL http://<username>:<pswd>@<ip>:<port> of the import proxy for HTTP requests.  Empty means unset and will not result in the import pod env var. */
  HTTPProxy?: string;
  /** HTTPSProxy is the URL https://<username>:<pswd>@<ip>:<port> of the import proxy for HTTPS requests.  Empty means unset and will not result in the import pod env var. */
  HTTPSProxy?: string;
  /** NoProxy is a comma-separated list of hostnames and/or CIDRs for which the proxy should not be used. Empty means unset and will not result in the import pod env var. */
  noProxy?: string;
  /**
   * TrustedCAProxy is the name of a ConfigMap in the cdi namespace that contains a user-provided trusted certificate authority (CA) bundle. The TrustedCAProxy ConfigMap is consumed by the DataImportCron controller for creating cronjobs, and by the import controller referring a copy of the ConfigMap in the import namespace. Here is an example of the ConfigMap (in yaml):
   *
   * apiVersion: v1 kind: ConfigMap metadata:
   *   name: my-ca-proxy-cm
   *   namespace: cdi
   * data:
   *   ca.pem: |
   *     -----BEGIN CERTIFICATE-----
   * 	   ... <base64 encoded cert> ...
   * 	   -----END CERTIFICATE-----
   */
  trustedCAProxy?: string;
}
