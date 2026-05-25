import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

export interface IoK8sApiCoreV1ContainerStateTerminated {
  /** Container's ID in the format '<type>://<container_id>' */
  containerID?: string;
  /**
   * Exit status from the last termination of the container
   * @format int32
   */
  exitCode: number;
  /** Time at which the container last terminated */
  finishedAt?: IoK8sApimachineryPkgApisMetaV1Time;
  /** Message regarding the last termination of the container */
  message?: string;
  /** (brief) reason from the last termination of the container */
  reason?: string;
  /**
   * Signal from the last termination of the container
   * @format int32
   */
  signal?: number;
  /** Time at which previous execution of the container started */
  startedAt?: IoK8sApimachineryPkgApisMetaV1Time;
}
