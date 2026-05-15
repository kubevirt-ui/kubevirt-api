import { V1CloudInitNoCloudSource } from '../models/V1CloudInitNoCloudSource';

export const testObject: V1CloudInitNoCloudSource = {
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
