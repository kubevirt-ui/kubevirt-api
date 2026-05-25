export interface V1ServiceAccountVolumeSource {
  /** Name of the service account in the pod's namespace to use. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/ */
  serviceAccountName?: string;
}
