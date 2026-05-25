import type { V1CustomBlockSize } from './V1CustomBlockSize';
import type { V1FeatureState } from './V1FeatureState';

export interface V1BlockSize {
  /** CustomBlockSize represents the desired logical and physical block size for a VM disk. */
  custom?: V1CustomBlockSize;
  /** Represents if a feature is enabled or disabled. */
  matchVolume?: V1FeatureState;
}
