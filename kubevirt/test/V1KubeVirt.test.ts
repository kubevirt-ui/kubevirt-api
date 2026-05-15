import { V1KubeVirt } from '../models/V1KubeVirt';

export const testObject: V1KubeVirt = {
  apiVersion: 'kubevirt.io/v1',
  kind: 'KubeVirt',
  metadata: {
    name: 'kubevirt',
    namespace: 'kubevirt',
  },
  spec: {},
};
