import type { IoK8sApiCoreV1ConfigMapEnvSource } from './IoK8sApiCoreV1ConfigMapEnvSource';
import type { IoK8sApiCoreV1SecretEnvSource } from './IoK8sApiCoreV1SecretEnvSource';

/** EnvFromSource represents the source of a set of ConfigMaps or Secrets */
export interface IoK8sApiCoreV1EnvFromSource {
  /** The ConfigMap to select from */
  configMapRef?: IoK8sApiCoreV1ConfigMapEnvSource;
  /** Optional text to prepend to the name of each environment variable. Must be a C_IDENTIFIER. */
  prefix?: string;
  /** The Secret to select from */
  secretRef?: IoK8sApiCoreV1SecretEnvSource;
}
