import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

export const ProcessedTemplatesModel: K8sModel = {
  label: 'Processed Template',
  labelPlural: 'Processed Templates',
  apiVersion: 'v1',
  apiGroup: 'template.openshift.io',
  plural: 'processedtemplates',
  abbr: 'PT',
  namespaced: true,
  kind: 'Template',
};
