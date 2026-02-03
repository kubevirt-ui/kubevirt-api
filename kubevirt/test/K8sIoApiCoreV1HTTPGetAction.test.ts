import {
  K8sIoApiCoreV1HTTPGetAction,
  K8sIoApiCoreV1HTTPGetActionSchemeEnum,
} from '../models/K8sIoApiCoreV1HTTPGetAction';

export const testObject: K8sIoApiCoreV1HTTPGetAction = {
  host: 'test-host',
  httpHeaders: [
    {
      name: 'Content-Type',
      value: 'application/json',
    },
  ],
  path: '/healthz',
  scheme: K8sIoApiCoreV1HTTPGetActionSchemeEnum.Https,
};
