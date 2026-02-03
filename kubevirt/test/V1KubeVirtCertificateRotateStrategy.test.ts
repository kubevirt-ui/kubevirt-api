import { V1KubeVirtCertificateRotateStrategy } from '../models/V1KubeVirtCertificateRotateStrategy';

export const testObject: V1KubeVirtCertificateRotateStrategy = {
  selfSigned: {
    caOverlapInterval: '24h',
    caRotateInterval: '168h',
    certRotateInterval: '24h',
  },
};
