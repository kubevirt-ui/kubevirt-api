import {
  K8sIoApiCoreV1TopologySpreadConstraint,
  K8sIoApiCoreV1TopologySpreadConstraintNodeAffinityPolicyEnum,
  K8sIoApiCoreV1TopologySpreadConstraintNodeTaintsPolicyEnum,
  K8sIoApiCoreV1TopologySpreadConstraintWhenUnsatisfiableEnum,
} from '../models/K8sIoApiCoreV1TopologySpreadConstraint';

export const testObject: K8sIoApiCoreV1TopologySpreadConstraint = {
  labelSelector: {
    matchLabels: { app: 'test-app' },
  },
  matchLabelKeys: ['pod-template-hash'],
  maxSkew: 1,
  minDomains: 3,
  nodeAffinityPolicy: K8sIoApiCoreV1TopologySpreadConstraintNodeAffinityPolicyEnum.Honor,
  nodeTaintsPolicy: K8sIoApiCoreV1TopologySpreadConstraintNodeTaintsPolicyEnum.Honor,
  topologyKey: 'topology.kubernetes.io/zone',
  whenUnsatisfiable: K8sIoApiCoreV1TopologySpreadConstraintWhenUnsatisfiableEnum.DoNotSchedule,
};
