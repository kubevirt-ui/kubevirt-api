import { K8sModel } from '@openshift-console/dynamic-plugin-sdk/lib/api/common-types';
import { modelToGroupVersionKind, modelToRef } from '../modelUtils'; 

const StorageProfileModel: K8sModel = {
    label: 'StorageProfile',
    labelPlural: 'StorageProfiles',
    apiVersion: 'v1beta1',
    apiGroup: 'cdi.kubevirt.io',
    plural: 'storageprofiles',
    abbr: 'SP',
    namespaced: false,
    kind: 'StorageProfile',
    id: 'storageprofile',
    crd: true,
};

export const StorageProfileModelGroupVersionKind = modelToGroupVersionKind(StorageProfileModel);
export const StorageProfileModelRef = modelToRef(StorageProfileModel);

export default StorageProfileModel;
