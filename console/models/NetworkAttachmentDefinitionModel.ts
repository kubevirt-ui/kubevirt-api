import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

export const NetworkAttachmentDefinitionModel: K8sModel = {
  label: 'Network Attachment Definition',
  labelPlural: 'Network Attachment Definitions',
  apiVersion: 'v1',
  apiGroup: 'k8s.cni.cncf.io',
  plural: 'network-attachment-definitions',
  namespaced: true,
  abbr: 'NAD',
  kind: 'NetworkAttachmentDefinition',
  id: 'network-attachment-definition',
  crd: true,
  legacyPluralURL: true,
};

export const NetworkAttachmentDefinitionModelGroupVersionKind = modelToGroupVersionKind(
  NetworkAttachmentDefinitionModel,
);
export const NetworkAttachmentDefinitionModelRef = modelToRef(NetworkAttachmentDefinitionModel);
