import { K8sIoApiCoreV1VolumeResourceRequirements } from '../models/K8sIoApiCoreV1VolumeResourceRequirements';

export const testObject: K8sIoApiCoreV1VolumeResourceRequirements = {
  limits: { storage: '10Gi' },
  requests: { storage: '5Gi' },
};
