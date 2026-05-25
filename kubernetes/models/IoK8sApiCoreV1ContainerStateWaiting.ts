export interface IoK8sApiCoreV1ContainerStateWaiting {
  /** Message regarding why the container is not yet running. */
  message?: string;
  /** (brief) reason the container is not yet running. */
  reason?: string;
}
