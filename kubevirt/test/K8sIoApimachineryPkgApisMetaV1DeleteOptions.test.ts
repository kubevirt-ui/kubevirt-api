import { K8sIoApimachineryPkgApisMetaV1DeleteOptions } from '../models/K8sIoApimachineryPkgApisMetaV1DeleteOptions';

export const testObject: K8sIoApimachineryPkgApisMetaV1DeleteOptions = {
  apiVersion: 'v1',
  dryRun: ['All'],
  gracePeriodSeconds: 30,
  ignoreStoreReadErrorWithClusterBreakingPotential: false,
  kind: 'DeleteOptions',
  orphanDependents: false,
  preconditions: {
    resourceVersion: '12345',
    uid: 'test-uid',
  },
  propagationPolicy: 'Foreground',
};
