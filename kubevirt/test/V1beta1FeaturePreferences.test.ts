import { V1beta1FeaturePreferences } from '../models/V1beta1FeaturePreferences';

export const testObject: V1beta1FeaturePreferences = {
  preferredAcpi: {
    enabled: true,
  },
  preferredApic: {
    enabled: true,
    endOfInterrupt: false,
  },
  preferredHyperv: {
    evmcs: {
      enabled: true,
    },
    frequencies: {
      enabled: true,
    },
    ipi: {
      enabled: true,
    },
    reenlightenment: {
      enabled: true,
    },
    relaxed: {
      enabled: true,
    },
    reset: {
      enabled: true,
    },
    runtime: {
      enabled: true,
    },
    spinlocks: {
      enabled: true,
      spinlocks: 4096,
    },
    synic: {
      enabled: true,
    },
    synictimer: {
      enabled: true,
    },
    tlbflush: {
      enabled: true,
    },
    vapic: {
      enabled: true,
    },
    vpindex: {
      enabled: true,
    },
  },
  preferredKvm: {
    hidden: true,
  },
  preferredPvspinlock: {
    enabled: true,
  },
  preferredSmm: {
    enabled: true,
  },
};
