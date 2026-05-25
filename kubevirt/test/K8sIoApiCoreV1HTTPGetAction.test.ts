import { K8sIoApiCoreV1HTTPGetAction } from '../models/K8sIoApiCoreV1HTTPGetAction';

export const testObject: K8sIoApiCoreV1HTTPGetAction = {
  host: 'test-host',
  httpHeaders: [
    {
      name: 'Content-Type',
      value: 'application/json',
    },
  ],
  path: '/healthz',
  port: 8080,
  scheme: 'HTTPS',
};
