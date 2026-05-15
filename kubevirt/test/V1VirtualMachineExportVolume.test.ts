import { V1VirtualMachineExportVolume } from '../models/V1VirtualMachineExportVolume';

export const testObject: V1VirtualMachineExportVolume = {
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
