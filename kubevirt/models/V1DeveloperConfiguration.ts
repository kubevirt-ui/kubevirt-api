import type { V1DiskVerification } from './V1DiskVerification';
import type { V1LogVerbosity } from './V1LogVerbosity';

export interface V1DeveloperConfiguration {
  /** Enable the ability to pprof profile KubeVirt control plane */
  clusterProfiler?: boolean;
  /**
   * For each requested virtual CPU, CPUAllocationRatio defines how much physical CPU to request per VMI from the hosting node. The value is in fraction of a CPU thread (or core on non-hyperthreaded nodes). For example, a value of 1 means 1 physical CPU thread per VMI CPU thread. A value of 100 would be 1% of a physical thread allocated for each requested VMI thread. This option has no effect on VMIs that request dedicated CPUs. More information at: https://kubevirt.io/user-guide/operations/node_overcommit/#node-cpu-allocation-ratio Defaults to 10
   * @format int32
   */
  cpuAllocationRatio?: number;
  /** DisabledFeatureGates specifies a list of experimental feature gates to disable. A feature gate must not appear in both FeatureGates and DisabledFeatureGates. */
  disabledFeatureGates?: string[];
  /** DiskVerification holds container disks verification limits */
  diskVerification?: V1DiskVerification;
  /** FeatureGates specifies a list of experimental feature gates to enable. Defaults to none. A feature gate must not appear in both FeatureGates and DisabledFeatureGates. */
  featureGates?: string[];
  /** LogVerbosity sets log verbosity level of  various components */
  logVerbosity?: V1LogVerbosity;
  /**
   * MemoryOvercommit is the percentage of memory we want to give VMIs compared to the amount given to its parent pod (virt-launcher). For example, a value of 102 means the VMI will "see" 2% more memory than its parent pod. Values under 100 are effectively "undercommits". Overcommits can lead to memory exhaustion, which in turn can lead to crashes. Use carefully. Defaults to 100
   * @format int32
   */
  memoryOvercommit?: number;
  /**
   * Allow overriding the automatically determined minimum TSC frequency of the cluster and fixate the minimum to this frequency.
   * @format int64
   */
  minimumClusterTSCFrequency?: number;
  /**
   * MinimumReservePVCBytes is the amount of space, in bytes, to leave unused on disks. Defaults to 131072 (128KiB)
   * @format int64
   */
  minimumReservePVCBytes?: number;
  /** NodeSelectors allows restricting VMI creation to nodes that match a set of labels. Defaults to none */
  nodeSelectors?: Record<string, string>;
  /**
   * LessPVCSpaceToleration determines how much smaller, in percentage, disk PVCs are allowed to be compared to the requested size (to account for various overheads). Defaults to 10
   * @format int32
   */
  pvcTolerateLessSpaceUpToPercent?: number;
  /** UseEmulation can be set to true to allow fallback to software emulation in case hardware-assisted emulation is not available. Defaults to false */
  useEmulation?: boolean;
}
