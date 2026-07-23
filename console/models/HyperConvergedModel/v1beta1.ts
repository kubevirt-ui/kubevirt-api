import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../../modelUtils';
import { hyperConvergedBaseModel } from './base';

/** Legacy HyperConverged model for clusters before HCO v1 API (OpenShift Virtualization < 4.23). */
export const HyperConvergedV1Beta1Model: K8sModel = {
  ...hyperConvergedBaseModel,
  apiVersion: 'v1beta1',
};

export const HyperConvergedV1Beta1ModelGroupVersionKind = modelToGroupVersionKind(
  HyperConvergedV1Beta1Model,
);
export const HyperConvergedV1Beta1ModelRef = modelToRef(HyperConvergedV1Beta1Model);
