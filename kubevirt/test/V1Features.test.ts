import { V1Features } from '../models/V1Features';

export const testObject: V1Features = {
  acpi: {
    enabled: true,
  },
  apic: {
    enabled: true,
    endOfInterrupt: false,
  },
  hyperv: {
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
  hypervPassthrough: {
    enabled: true,
  },
  kvm: {
    hidden: true,
  },
  pvspinlock: {
    enabled: true,
  },
  smm: {
    enabled: true,
  },
};
