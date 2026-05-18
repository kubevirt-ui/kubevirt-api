import { V1beta1VirtualMachineExportLink } from '../models/V1beta1VirtualMachineExportLink';

export const testObject: V1beta1VirtualMachineExportLink = {
  cert: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0t',
  manifests: [
    {
      type: 'all',
      url: 'https://export.example.com/manifests/all',
    },
  ],
  volumes: [
    {
      name: 'rootdisk',
      formats: [
        {
          format: 'raw',
          url: 'https://export.example.com/volumes/rootdisk/disk.raw',
        },
      ],
    },
  ],
};
