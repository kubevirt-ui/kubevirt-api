import type { V1beta1CPUInstancetype } from './V1beta1CPUInstancetype';
import type { V1beta1MemoryInstancetype } from './V1beta1MemoryInstancetype';
import type { V1DiskIOThreads } from './V1DiskIOThreads';
import type { V1GPU } from './V1GPU';
import type { V1HostDevice } from './V1HostDevice';
import type { V1LaunchSecurity } from './V1LaunchSecurity';

export interface V1beta1VirtualMachineInstancetypeSpec {
  /** Optionally defines the required Annotations to be used by the instance type and applied to the VirtualMachineInstance */
  annotations?: Record<string, string>;
  /**
   * Required CPU related attributes of the instancetype.
   * @default {}
   */
  cpu: V1beta1CPUInstancetype;
  /** Optionally defines any GPU devices associated with the instancetype. */
  gpus?: V1GPU[];
  /** Optionally defines any HostDevices associated with the instancetype. */
  hostDevices?: V1HostDevice[];
  /** Optionally specifies the IOThreads options to be used by the instancetype. */
  ioThreads?: V1DiskIOThreads;
  /** Optionally defines the IOThreadsPolicy to be used by the instancetype. */
  ioThreadsPolicy?: string;
  /** Optionally defines the LaunchSecurity to be used by the instancetype. */
  launchSecurity?: V1LaunchSecurity;
  /**
   * Required Memory related attributes of the instancetype.
   * @default {}
   */
  memory: V1beta1MemoryInstancetype;
  /**
   * NodeSelector is a selector which must be true for the vmi to fit on a node. Selector which must match a node's labels for the vmi to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
   *
   * NodeSelector is the name of the custom node selector for the instancetype.
   */
  nodeSelector?: Record<string, string>;
  /**
   * If specified, the VMI will be dispatched by specified scheduler. If not specified, the VMI will be dispatched by default scheduler.
   *
   * SchedulerName is the name of the custom K8s scheduler for the instancetype.
   */
  schedulerName?: string;
}
