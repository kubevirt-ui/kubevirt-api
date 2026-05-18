import { V1alpha1Condition } from '../models/V1alpha1Condition';

export const testObject: V1alpha1Condition = {
  message: 'Backup completed successfully',
  reason: 'BackupComplete',
  status: 'True',
  type: 'Ready',
};
