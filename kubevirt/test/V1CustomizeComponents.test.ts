import { V1CustomizeComponents } from '../models/V1CustomizeComponents';

export const testObject: V1CustomizeComponents = {
  flags: {
    api: { v: '4' },
    controller: { v: '4' },
  },
  patches: [
    {
      patch: '{"op": "add", "path": "/spec/replicas", "value": 3}',
      resourceName: 'virt-api',
      resourceType: 'Deployment',
      type: 'json',
    },
  ],
};
