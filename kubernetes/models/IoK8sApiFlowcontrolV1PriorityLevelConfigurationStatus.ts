import type { IoK8sApiFlowcontrolV1PriorityLevelConfigurationCondition } from './IoK8sApiFlowcontrolV1PriorityLevelConfigurationCondition';

/** PriorityLevelConfigurationStatus represents the current state of a "request-priority". */
export interface IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus {
  /** `conditions` is the current state of "request-priority". */
  conditions?: IoK8sApiFlowcontrolV1PriorityLevelConfigurationCondition[];
}
