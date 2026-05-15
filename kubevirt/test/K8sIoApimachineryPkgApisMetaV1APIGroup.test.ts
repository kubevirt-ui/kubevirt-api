import { K8sIoApimachineryPkgApisMetaV1APIGroup } from '../models/K8sIoApimachineryPkgApisMetaV1APIGroup';

export const testObject: K8sIoApimachineryPkgApisMetaV1APIGroup = {
  apiVersion: 'v1',
  kind: 'APIGroup',
  name: 'kubevirt.io',
  preferredVersion: {
    groupVersion: 'kubevirt.io/v1',
    version: 'v1',
  },
  serverAddressByClientCIDRs: [
    {
      clientCIDR: '0.0.0.0/0',
      serverAddress: 'https://kubernetes.default.svc',
    },
  ],
  versions: [
    {
      groupVersion: 'kubevirt.io/v1',
      version: 'v1',
    },
  ],
};
