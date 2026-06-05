import { K8sIoApiCoreV1TopologySpreadConstraint } from '../models/K8sIoApiCoreV1TopologySpreadConstraint';

export const testObject: K8sIoApiCoreV1TopologySpreadConstraint = {
  labelSelector: {
    matchLabels: { app: 'test-app' },
  },
  matchLabelKeys: ['pod-template-hash'],
  maxSkew: 1,
  minDomains: 3,
  nodeAffinityPolicy: 'Honor',
  nodeTaintsPolicy: 'Honor',
  topologyKey: 'topology.kubernetes.io/zone',
  whenUnsatisfiable: 'DoNotSchedule',
};
