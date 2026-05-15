import { V1NetworkConfiguration } from '../models/V1NetworkConfiguration';

export const testObject: V1NetworkConfiguration = {
  binding: {
    'my-binding': {
      domainAttachmentType: 'tap',
      sidecarImage: 'quay.io/kubevirt/network-binding:latest',
    },
  },
  defaultNetworkInterface: 'bridge',
  permitBridgeInterfaceOnPodNetwork: true,
  permitSlirpInterface: false,
};
