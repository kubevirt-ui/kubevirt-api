import { V1AccessCredential } from '../models/V1AccessCredential';

export const testObject: V1AccessCredential = {
  sshPublicKey: {
    propagationMethod: {
      configDrive: {},
      noCloud: {},
      qemuGuestAgent: {
        users: ['test-user'],
      },
    },
    source: {
      secret: {
        secretName: 'test-ssh-secret',
      },
    },
  },
  userPassword: {
    propagationMethod: {
      qemuGuestAgent: {},
    },
    source: {
      secret: {
        secretName: 'test-password-secret',
      },
    },
  },
};
