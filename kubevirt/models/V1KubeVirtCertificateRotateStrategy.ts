import type { V1KubeVirtSelfSignConfiguration } from './V1KubeVirtSelfSignConfiguration';

export interface V1KubeVirtCertificateRotateStrategy {
  selfSigned?: V1KubeVirtSelfSignConfiguration;
}
