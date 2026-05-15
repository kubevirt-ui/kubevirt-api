import { V1beta1DataVolumeSourceVDDK } from '../models/V1beta1DataVolumeSourceVDDK';

export const testObject: V1beta1DataVolumeSourceVDDK = {
  backingFile: '[datastore1] vm/vm.vmdk',
  initImageURL: 'quay.io/kubevirt/vddk:latest',
  secretRef: 'vcenter-secret',
  thumbprint: 'AB:CD:EF:12:34:56:78:90',
  url: 'https://vcenter.example.com',
  uuid: '422b03ce-1234-5678-90ab-cdef12345678',
};
