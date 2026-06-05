import type { IoK8sApiCoreV1ObjectReference } from './IoK8sApiCoreV1ObjectReference';
import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

/** CronJobStatus represents the current state of a cron job. */
export interface IoK8sApiBatchV1CronJobStatus {
  /** A list of pointers to currently running jobs. */
  active?: IoK8sApiCoreV1ObjectReference[];
  /** Information when was the last time the job was successfully scheduled. */
  lastScheduleTime?: IoK8sApimachineryPkgApisMetaV1Time;
  /** Information when was the last time the job successfully completed. */
  lastSuccessfulTime?: IoK8sApimachineryPkgApisMetaV1Time;
}
