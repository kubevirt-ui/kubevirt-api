import type { IoK8sApiFlowcontrolV1GroupSubject } from './IoK8sApiFlowcontrolV1GroupSubject';
import type { IoK8sApiFlowcontrolV1ServiceAccountSubject } from './IoK8sApiFlowcontrolV1ServiceAccountSubject';
import type { IoK8sApiFlowcontrolV1UserSubject } from './IoK8sApiFlowcontrolV1UserSubject';

export interface IoK8sApiFlowcontrolV1Subject {
  /** `group` matches based on user group name. */
  group?: IoK8sApiFlowcontrolV1GroupSubject;
  /** `kind` indicates which one of the other fields is non-empty. Required */
  kind: string;
  /** `serviceAccount` matches ServiceAccounts. */
  serviceAccount?: IoK8sApiFlowcontrolV1ServiceAccountSubject;
  /** `user` matches based on username. */
  user?: IoK8sApiFlowcontrolV1UserSubject;
}
