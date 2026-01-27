import { V1UserPasswordAccessCredential } from '../models/V1UserPasswordAccessCredential';

export const testObject: V1UserPasswordAccessCredential = {
  propagationMethod: {
    qemuGuestAgent: {},
  },
  source: {
    secret: { secretName: 'user-password' },
  },
};
