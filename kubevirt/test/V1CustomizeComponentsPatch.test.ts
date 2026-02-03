import { V1CustomizeComponentsPatch } from '../models/V1CustomizeComponentsPatch';

export const testObject: V1CustomizeComponentsPatch = {
  patch: '{"op": "add", "path": "/spec/replicas", "value": 3}',
  resourceName: 'virt-api',
  resourceType: 'Deployment',
  type: 'json',
};
