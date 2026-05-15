import { V1Probe } from '../models/V1Probe';
import { K8sIoApiCoreV1HTTPGetActionSchemeEnum } from '../models/K8sIoApiCoreV1HTTPGetAction';

export const testObject: V1Probe = {
  exec: { command: ['cat', '/tmp/healthy'] },
  failureThreshold: 3,
  guestAgentPing: {},
  httpGet: {
    path: '/healthz',
    host: '127.0.0.1',
    scheme: K8sIoApiCoreV1HTTPGetActionSchemeEnum.Http,
  },
  initialDelaySeconds: 30,
  periodSeconds: 10,
  successThreshold: 1,
  tcpSocket: { host: '127.0.0.1' },
  timeoutSeconds: 5,
};
