import type { V1FeatureAPIC } from './V1FeatureAPIC';
import type { V1FeatureHyperv } from './V1FeatureHyperv';
import type { V1FeatureKVM } from './V1FeatureKVM';
import type { V1FeatureState } from './V1FeatureState';

export interface V1beta1FeaturePreferences {
  /** PreferredAcpi optionally enables the ACPI feature */
  preferredAcpi?: V1FeatureState;
  /** PreferredApic optionally enables and configures the APIC feature */
  preferredApic?: V1FeatureAPIC;
  /** PreferredHyperv optionally enables and configures HyperV features */
  preferredHyperv?: V1FeatureHyperv;
  /** PreferredKvm optionally enables and configures KVM features */
  preferredKvm?: V1FeatureKVM;
  /** PreferredPvspinlock optionally enables the Pvspinlock feature */
  preferredPvspinlock?: V1FeatureState;
  /** PreferredSmm optionally enables the SMM feature */
  preferredSmm?: V1FeatureState;
}
