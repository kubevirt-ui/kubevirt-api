import type { V1FeatureState } from './V1FeatureState';

export interface V1VGPUDisplayOptions {
  /** Enabled determines if a display addapter backed by a vGPU should be enabled or disabled on the guest. Defaults to true. */
  enabled?: boolean;
  /** Enables a boot framebuffer, until the guest OS loads a real GPU driver Defaults to true. */
  ramFB?: V1FeatureState;
}
