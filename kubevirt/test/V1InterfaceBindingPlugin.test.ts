import { V1InterfaceBindingPlugin } from '../models/V1InterfaceBindingPlugin';

export const testObject: V1InterfaceBindingPlugin = {
  domainAttachmentType: 'tap',
  downwardAPI: 'device-info',
  migration: {
    method: 'link-refresh',
  },
  networkAttachmentDefinition: 'default/my-net',
  sidecarImage: 'quay.io/kubevirt/network-binding:latest',
};
