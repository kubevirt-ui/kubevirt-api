import { V1SupportContainerResources } from '../models/V1SupportContainerResources';

export const testObject: V1SupportContainerResources = {
  resources: {
    limits: { cpu: '100m', memory: '128Mi' },
    requests: { cpu: '10m', memory: '32Mi' },
  },
  type: 'sidecar',
};
