import { V1FeatureHyperv } from '../models/V1FeatureHyperv';

export const testObject: V1FeatureHyperv = {
  evmcs: { enabled: true },
  frequencies: { enabled: true },
  ipi: { enabled: true },
  reenlightenment: { enabled: true },
  relaxed: { enabled: true },
  reset: { enabled: true },
  runtime: { enabled: true },
  spinlocks: { enabled: true, spinlocks: 4096 },
  synic: { enabled: true },
  synictimer: { direct: { enabled: true } },
  tlbflush: { enabled: true },
  vapic: { enabled: true },
  vendorid: { enabled: true, vendorid: 'KubeVirt' },
  vpindex: { enabled: true },
};
