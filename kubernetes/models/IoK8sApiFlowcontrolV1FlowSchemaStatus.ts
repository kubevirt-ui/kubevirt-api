import type { IoK8sApiFlowcontrolV1FlowSchemaCondition } from './IoK8sApiFlowcontrolV1FlowSchemaCondition';

/** FlowSchemaStatus represents the current state of a FlowSchema. */
export interface IoK8sApiFlowcontrolV1FlowSchemaStatus {
  /** `conditions` is a list of the current states of FlowSchema. */
  conditions?: IoK8sApiFlowcontrolV1FlowSchemaCondition[];
}
