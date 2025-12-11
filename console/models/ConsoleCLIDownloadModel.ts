import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';
import { modelToGroupVersionKind, modelToRef } from '../modelUtils';

export const ConsoleCLIDownloadModel: K8sModel = {
  label: 'ConsoleCLIDownload',
  // t('public~ConsoleCLIDownload')
  labelKey: 'public~ConsoleCLIDownload',
  labelPlural: 'ConsoleCLIDownloads',
  // t('public~ConsoleCLIDownloads')
  labelPluralKey: 'public~ConsoleCLIDownloads',
  apiVersion: 'v1',
  apiGroup: 'console.openshift.io',
  plural: 'consoleclidownloads',
  abbr: 'CCD',
  namespaced: false,
  kind: 'ConsoleCLIDownload',
  id: 'consoleclidownload',
  crd: true,
};

export const ConsoleCLIDownloadModelGroupVersionKind =
  modelToGroupVersionKind(ConsoleCLIDownloadModel);
export const ConsoleCLIDownloadModelRef = modelToRef(ConsoleCLIDownloadModel);
