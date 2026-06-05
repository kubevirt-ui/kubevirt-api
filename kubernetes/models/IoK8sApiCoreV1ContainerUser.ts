import type { IoK8sApiCoreV1LinuxContainerUser } from './IoK8sApiCoreV1LinuxContainerUser';

/** ContainerUser represents user identity information */
export interface IoK8sApiCoreV1ContainerUser {
  /** Linux holds user identity information initially attached to the first process of the containers in Linux. Note that the actual running identity can be changed if the process has enough privilege to do so. */
  linux?: IoK8sApiCoreV1LinuxContainerUser;
}
