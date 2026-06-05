import type { IoK8sApiCoreV1NodeSelector } from './IoK8sApiCoreV1NodeSelector';

/** VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from. */
export interface IoK8sApiCoreV1VolumeNodeAffinity {
  /** required specifies hard node constraints that must be met. */
  required?: IoK8sApiCoreV1NodeSelector;
}
