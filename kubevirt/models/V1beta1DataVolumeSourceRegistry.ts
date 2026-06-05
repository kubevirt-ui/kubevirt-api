import type { V1beta1PlatformOptions } from './V1beta1PlatformOptions';

/** DataVolumeSourceRegistry provides the parameters to create a Data Volume from an registry source */
export interface V1beta1DataVolumeSourceRegistry {
  /** CertConfigMap provides a reference to the Registry certs */
  certConfigMap?: string;
  /** ImageStream is the name of image stream for import */
  imageStream?: string;
  /** Platform describes the minimum runtime requirements of the image */
  platform?: V1beta1PlatformOptions;
  /** PullMethod can be either "pod" (default import), or "node" (node docker cache based import) */
  pullMethod?: string;
  /** SecretRef provides the secret reference needed to access the Registry source */
  secretRef?: string;
  /** URL is the url of the registry source (starting with the scheme: docker, oci-archive) */
  url?: string;
}
