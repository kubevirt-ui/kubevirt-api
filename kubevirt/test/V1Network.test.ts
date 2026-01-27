import { V1Network } from '../models/V1Network';

export const testObject: V1Network = {
  multus: {
    networkName: 'default/my-network',
  },
  name: 'default-network',
  pod: {
    vmNetworkCIDR: '10.0.2.0/24',
  },
};
