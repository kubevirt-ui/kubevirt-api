import type { V1FeatureAPIC } from './V1FeatureAPIC';
import type { V1FeatureHyperv } from './V1FeatureHyperv';
import type { V1FeatureKVM } from './V1FeatureKVM';
import type { V1FeatureState } from './V1FeatureState';
import type { V1HyperVPassthrough } from './V1HyperVPassthrough';

export interface V1Features {
  /**
   * ACPI enables/disables ACPI inside the guest. Defaults to enabled.
   * @default {}
   */
  acpi?: V1FeatureState;
  /** Defaults to the machine type setting. */
  apic?: V1FeatureAPIC;
  /** Defaults to the machine type setting. */
  hyperv?: V1FeatureHyperv;
  /** This enables all supported hyperv flags automatically. Bear in mind that if this enabled hyperV features cannot be enabled explicitly. In addition, a Virtual Machine using it will be non-migratable. */
  hypervPassthrough?: V1HyperVPassthrough;
  /** Configure how KVM presence is exposed to the guest. */
  kvm?: V1FeatureKVM;
  /** Notify the guest that the host supports paravirtual spinlocks. For older kernels this feature should be explicitly disabled. */
  pvspinlock?: V1FeatureState;
  /** SMM enables/disables System Management Mode. TSEG not yet implemented. */
  smm?: V1FeatureState;
}
