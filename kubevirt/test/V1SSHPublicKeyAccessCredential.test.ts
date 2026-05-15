import { V1SSHPublicKeyAccessCredential } from '../models/V1SSHPublicKeyAccessCredential';

export const testObject: V1SSHPublicKeyAccessCredential = {
  propagationMethod: {
    qemuGuestAgent: { users: ['root', 'fedora'] },
  },
  source: {
    secret: { secretName: 'ssh-keys' },
  },
};
