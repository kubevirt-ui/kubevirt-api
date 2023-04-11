import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

const ControllerRevisionModel: K8sModel = {
  id: 'controllerrevision',
  kind: 'ControllerRevision',
  apiGroup: 'apps',
  apiVersion: 'v1',
  abbr: 'CR',
  label: 'ControllerRevision',
  labelPlural: 'ControllerRevisions',
  plural: 'controllerrevisions',
};

export const ControllerRevisionModelGroupVersionKind =
  modelToGroupVersionKind(ControllerRevisionModel);
export const ControllerRevisionModelRef = modelToRef(ControllerRevisionModel);

export default ControllerRevisionModel;
