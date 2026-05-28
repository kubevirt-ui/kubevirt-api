export interface V1GenerationStatus {
  /**
   * group is the group of the thing you're tracking
   * @default ""
   */
  group: string;
  /** hash is an optional field set for resources without generation that are content sensitive like secrets and configmaps */
  hash?: string;
  /**
   * lastGeneration is the last generation of the workload controller involved
   * @format int64
   * @default 0
   */
  lastGeneration: number;
  /**
   * name is the name of the thing you're tracking
   * @default ""
   */
  name: string;
  /** namespace is where the thing you're tracking is */
  namespace?: string;
  /**
   * resource is the resource type of the thing you're tracking
   * @default ""
   */
  resource: string;
}
