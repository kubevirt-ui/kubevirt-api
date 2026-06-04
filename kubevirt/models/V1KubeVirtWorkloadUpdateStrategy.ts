import type { K8sIoApimachineryPkgApisMetaV1Duration } from './K8sIoApimachineryPkgApisMetaV1Duration';

/** KubeVirtWorkloadUpdateStrategy defines options related to updating a KubeVirt install */
export interface V1KubeVirtWorkloadUpdateStrategy {
  /**
   * BatchEvictionInterval Represents the interval to wait before issuing the next batch of shutdowns
   *
   * Defaults to 1 minute
   */
  batchEvictionInterval?: K8sIoApimachineryPkgApisMetaV1Duration;
  /**
   * BatchEvictionSize Represents the number of VMIs that can be forced updated per the BatchShutdownInteral interval
   *
   * Defaults to 10
   * @format int32
   */
  batchEvictionSize?: number;
  /**
   * WorkloadUpdateMethods defines the methods that can be used to disrupt workloads during automated workload updates. When multiple methods are present, the least disruptive method takes precedence over more disruptive methods. For example if both LiveMigrate and Shutdown methods are listed, only VMs which are not live migratable will be restarted/shutdown
   *
   * An empty list defaults to no automated workload updating
   */
  workloadUpdateMethods?: string[];
}
