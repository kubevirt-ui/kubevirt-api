import type { V1CustomBlockSize } from './V1CustomBlockSize';
import type { V1FeatureState } from './V1FeatureState';

/** BlockSize provides the option to change the block size presented to the VM for a disk. Only one of its members may be specified. */
export interface V1BlockSize {
  /** CustomBlockSize represents the desired logical and physical block size for a VM disk. */
  custom?: V1CustomBlockSize;
  /** Represents if a feature is enabled or disabled. */
  matchVolume?: V1FeatureState;
}
