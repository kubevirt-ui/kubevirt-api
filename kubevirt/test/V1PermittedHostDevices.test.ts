import { V1PermittedHostDevices } from '../models/V1PermittedHostDevices';

export const testObject: V1PermittedHostDevices = {
  pciHostDevices: [
    {
      pciVendorSelector: '10de:1eb8',
      resourceName: 'nvidia.com/GP102GL_Tesla_P40',
    },
  ],
  mediatedDevices: [
    {
      mdevNameSelector: 'GRID T4-2Q',
      resourceName: 'nvidia.com/GRID_T4-2Q',
    },
  ],
};
