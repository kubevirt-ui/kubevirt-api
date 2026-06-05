import type { IoK8sApiFlowcontrolV1GroupSubject } from './IoK8sApiFlowcontrolV1GroupSubject';
import type { IoK8sApiFlowcontrolV1ServiceAccountSubject } from './IoK8sApiFlowcontrolV1ServiceAccountSubject';
import type { IoK8sApiFlowcontrolV1UserSubject } from './IoK8sApiFlowcontrolV1UserSubject';

/** Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account. */
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
