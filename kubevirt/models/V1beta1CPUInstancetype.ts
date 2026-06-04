import type { V1NUMA } from './V1NUMA';
import type { V1Realtime } from './V1Realtime';

/**
 * CPUInstancetype contains the CPU related configuration of a given VirtualMachineInstancetypeSpec.
 *
 * Guest is a required attribute and defines the number of vCPUs to be exposed to the guest by the instancetype.
 */
export interface V1beta1CPUInstancetype {
  /** DedicatedCPUPlacement requests the scheduler to place the VirtualMachineInstance on a node with enough dedicated pCPUs and pin the vCPUs to it. */
  dedicatedCPUPlacement?: boolean;
  /**
   * Required number of vCPUs to expose to the guest.
   *
   * The resulting CPU topology being derived from the optional PreferredCPUTopology attribute of CPUPreferences that itself defaults to PreferSockets.
   * @format int64
   * @default 0
   */
  guest: number;
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
}
