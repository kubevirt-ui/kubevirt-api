import { V1beta1VirtualMachineExportVolume } from '../models/V1beta1VirtualMachineExportVolume';

export const testObject: V1beta1VirtualMachineExportVolume = {
  name: 'rootdisk',
  formats: [
    {
      format: 'raw',
      url: 'https://export.example.com/volumes/rootdisk/disk.raw',
    },
    {
      format: 'gzip',
      url: 'https://export.example.com/volumes/rootdisk/disk.raw.gz',
    },
  ],
};
