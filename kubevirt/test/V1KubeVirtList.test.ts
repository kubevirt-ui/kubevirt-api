import { V1KubeVirtList } from '../models/V1KubeVirtList';

export const testObject: V1KubeVirtList = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'KubeVirtList',
  items: [
    {
      spec: {},
    },
  ],
  metadata: {
    resourceVersion: '12345',
  },
};
