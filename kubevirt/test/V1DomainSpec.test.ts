import { V1DomainSpec } from '../models/V1DomainSpec';

export const testObject: V1DomainSpec = {
  chassis: {
    manufacturer: 'KubeVirt',
    serial: 'VM123456',
    asset: 'kubevirt-asset',
    sku: 'kubevirt-sku',
    version: '1.0.0',
  },
  clock: {
    timezone: 'UTC',
    utc: { offsetSeconds: 0 },
  },
  cpu: {
    cores: 2,
    sockets: 1,
    threads: 1,
    model: 'host-model',
    dedicatedCpuPlacement: false,
  },
  devices: {
    autoattachGraphicsDevice: true,
    autoattachSerialConsole: true,
    disks: [{ name: 'rootdisk', disk: { bus: 'virtio' } }],
    interfaces: [{ name: 'default', masquerade: {} }],
  },
  features: {
    acpi: { enabled: true },
    apic: { enabled: true },
  },
  firmware: {
    serial: 'VM-SERIAL-123',
    uuid: '12345678-1234-1234-1234-123456789012',
  },
  ioThreadsPolicy: 'auto',
  launchSecurity: {
    sev: { policy: { encryptedState: false } },
  },
  machine: { type: 'q35' },
  memory: {
    guest: '4Gi',
    hugepages: { pageSize: '2Mi' },
  },
  resources: {
    requests: { memory: '4Gi', cpu: '2' },
    limits: { memory: '4Gi', cpu: '2' },
  },
};
