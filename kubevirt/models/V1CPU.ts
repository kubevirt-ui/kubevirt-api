import type { V1CPUFeature } from './V1CPUFeature';
import type { V1NUMA } from './V1NUMA';
import type { V1Realtime } from './V1Realtime';

export interface V1CPU {
  /**
   * Cores specifies the number of cores inside the vmi. Must be a value greater or equal 1.
   * @format int64
   */
  cores?: number;
  /** DedicatedCPUPlacement requests the scheduler to place the VirtualMachineInstance on a node with enough dedicated pCPUs and pin the vCPUs to it. */
  dedicatedCpuPlacement?: boolean;
  /** Features specifies the CPU features list inside the VMI. */
  features?: V1CPUFeature[];
  /** IsolateEmulatorThread requests one more dedicated pCPU to be allocated for the VMI to place the emulator thread on it. */
  isolateEmulatorThread?: boolean;
  /**
   * MaxSockets specifies the maximum amount of sockets that can be hotplugged
   * @format int64
   */
  maxSockets?: number;
  /** Model specifies the CPU model inside the VMI. List of available models https://github.com/libvirt/libvirt/tree/master/src/cpu_map. It is possible to specify special cases like "host-passthrough" to get the same CPU as the node and "host-model" to get CPU closest to the node one. Defaults to host-model. */
  model?: string;
  /** NUMA allows specifying settings for the guest NUMA topology */
  numa?: V1NUMA;
  /** Realtime instructs the virt-launcher to tune the VMI for lower latency, optional for real time workloads */
  realtime?: V1Realtime;
  /**
   * Sockets specifies the number of sockets inside the vmi. Must be a value greater or equal 1.
   * @format int64
   */
  sockets?: number;
  /**
   * Threads specifies the number of threads inside the vmi. Must be a value greater or equal 1.
   * @format int64
   */
  threads?: number;
}
