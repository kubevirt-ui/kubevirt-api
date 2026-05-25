import type { IoK8sApiCoreV1NodeSelector } from './IoK8sApiCoreV1NodeSelector';

export interface IoK8sApiCoreV1VolumeNodeAffinity {
  /** required specifies hard node constraints that must be met. */
  required?: IoK8sApiCoreV1NodeSelector;
}
