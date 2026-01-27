import { V1CloudInitConfigDriveSource } from '../models/V1CloudInitConfigDriveSource';

export const testObject: V1CloudInitConfigDriveSource = {
  networkData: 'network: {config: disabled}',
  networkDataBase64: 'bmV0d29yazoge2NvbmZpZzogZGlzYWJsZWR9',
  networkDataSecretRef: {
    name: 'network-data-secret',
  },
  secretRef: {
    name: 'cloud-init-secret',
  },
  userData: '#cloud-config\nusers:\n  - name: admin',
  userDataBase64: 'I2Nsb3VkLWNvbmZpZwp1c2VyczoKICAtIG5hbWU6IGFkbWlu',
};
