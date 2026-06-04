import { V1Probe } from '../models/V1Probe';


export const testObject: V1Probe = {
  exec: { command: ['cat', '/tmp/healthy'] },
  failureThreshold: 3,
  guestAgentPing: {},
  httpGet: {
    path: '/healthz',
    host: '127.0.0.1',
    port: 8080,
    scheme: 'HTTP',
  },
  initialDelaySeconds: 30,
  periodSeconds: 10,
  successThreshold: 1,
  tcpSocket: { host: '127.0.0.1', port: 8080 },
  timeoutSeconds: 5,
};
