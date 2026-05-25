export interface IoK8sApiCoreV1ResourceHealth {
  /**
   * Health of the resource. can be one of:
   *  - Healthy: operates as normal
   *  - Unhealthy: reported unhealthy. We consider this a temporary health issue
   *               since we do not have a mechanism today to distinguish
   *               temporary and permanent issues.
   *  - Unknown: The status cannot be determined.
   *             For example, Device Plugin got unregistered and hasn't been re-registered since.
   *
   * In future we may want to introduce the PermanentlyUnhealthy Status.
   */
  health?: string;
  /** ResourceID is the unique identifier of the resource. See the ResourceID type for more information. */
  resourceID: string;
}
