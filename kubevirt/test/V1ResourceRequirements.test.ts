import { V1ResourceRequirements } from '../models/V1ResourceRequirements';

export const testObject: V1ResourceRequirements = {
  limits: {
    cpu: '2',
    memory: '4Gi',
  },
  overcommitGuestOverhead: false,
  requests: {
    cpu: '1',
    memory: '2Gi',
  },
};
