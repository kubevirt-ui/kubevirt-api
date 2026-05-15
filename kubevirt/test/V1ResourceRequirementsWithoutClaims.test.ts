import { V1ResourceRequirementsWithoutClaims } from '../models/V1ResourceRequirementsWithoutClaims';

export const testObject: V1ResourceRequirementsWithoutClaims = {
  limits: { 'cpu': '2', 'memory': '4Gi' },
  requests: { 'cpu': '500m', 'memory': '1Gi' },
};
