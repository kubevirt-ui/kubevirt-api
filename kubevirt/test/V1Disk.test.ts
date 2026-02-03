import { V1Disk } from '../models/V1Disk';

export const testObject: V1Disk = {
  blockSize: {
    custom: { logical: 512, physical: 4096 },
    matchVolume: { enabled: true },
  },
  bootOrder: 1,
  cache: 'none',
  cdrom: { bus: 'sata', readonly: true, tray: 'closed' },
  dedicatedIOThread: true,
  disk: { bus: 'virtio', pciAddress: '0000:00:05.0', readonly: false },
  errorPolicy: 'stop',
  io: 'native',
  lun: { bus: 'scsi', readonly: false },
  name: 'rootdisk',
  serial: 'DISK123456',
  shareable: false,
  tag: 'disk0',
};
