import { V1KubeVirtConfiguration } from '../models/V1KubeVirtConfiguration';

export const testObject: V1KubeVirtConfiguration = {
  cpuModel: 'host-model',
  cpuRequest: '100m',
  defaultRuntimeClass: 'runc',
  evictionStrategy: 'LiveMigrate',
  imagePullPolicy: 'IfNotPresent',
  machineType: 'q35',
  memBalloonStatsPeriod: 10,
  minCPUModel: 'Skylake-Server',
  selinuxLauncherType: 'virt_launcher.process',
  virtualMachineInstancesPerNode: 10,
  vmRolloutStrategy: 'LiveUpdate',
};
