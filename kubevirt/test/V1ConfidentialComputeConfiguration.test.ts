import { V1ConfidentialComputeConfiguration } from '../models/V1ConfidentialComputeConfiguration';

export const testObject: V1ConfidentialComputeConfiguration = {
  tdx: {
    attestation: {
      enforced: true,
      qgsSocketPath: '/var/run/qgs/qgs.sock',
    },
  },
};
