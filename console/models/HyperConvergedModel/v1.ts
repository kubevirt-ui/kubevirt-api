import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../../modelUtils';
import { hyperConvergedBaseModel } from './base';

export const HyperConvergedV1Model: K8sModel = {
  ...hyperConvergedBaseModel,
  apiVersion: 'v1',
};

export const HyperConvergedV1ModelGroupVersionKind = modelToGroupVersionKind(HyperConvergedV1Model);
export const HyperConvergedV1ModelRef = modelToRef(HyperConvergedV1Model);
