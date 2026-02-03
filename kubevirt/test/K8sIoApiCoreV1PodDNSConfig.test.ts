import { K8sIoApiCoreV1PodDNSConfig } from '../models/K8sIoApiCoreV1PodDNSConfig';

export const testObject: K8sIoApiCoreV1PodDNSConfig = {
  nameservers: ['8.8.8.8', '8.8.4.4'],
  options: [
    {
      name: 'ndots',
      value: '5',
    },
    {
      name: 'edns0',
    },
  ],
  searches: ['test.svc.cluster.local', 'svc.cluster.local'],
};
