import { K8sIoApimachineryPkgApisMetaV1APIGroupList } from '../models/K8sIoApimachineryPkgApisMetaV1APIGroupList';

export const testObject: K8sIoApimachineryPkgApisMetaV1APIGroupList = {
  apiVersion: 'v1',
  groups: [
    {
      name: 'kubevirt.io',
      versions: [
        {
          groupVersion: 'kubevirt.io/v1',
          version: 'v1',
        },
      ],
    },
  ],
  kind: 'APIGroupList',
};
