import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';

export const SubscriptionModel: K8sModel = {
  kind: 'Subscription',
  label: 'Subscription',
  labelPlural: 'Subscriptions',
  apiGroup: 'operators.coreos.com',
  apiVersion: 'v1alpha1',
  abbr: 'SUB',
  namespaced: true,
  crd: true,
  plural: 'subscriptions',
  legacyPluralURL: true,
};
