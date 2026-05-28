import type { IoK8sApiCoreV1ContainerStateRunning } from './IoK8sApiCoreV1ContainerStateRunning';
import type { IoK8sApiCoreV1ContainerStateTerminated } from './IoK8sApiCoreV1ContainerStateTerminated';
import type { IoK8sApiCoreV1ContainerStateWaiting } from './IoK8sApiCoreV1ContainerStateWaiting';

export interface IoK8sApiCoreV1ContainerState {
  /** Details about a running container */
  running?: IoK8sApiCoreV1ContainerStateRunning;
  /** Details about a terminated container */
  terminated?: IoK8sApiCoreV1ContainerStateTerminated;
  /** Details about a waiting container */
  waiting?: IoK8sApiCoreV1ContainerStateWaiting;
}
