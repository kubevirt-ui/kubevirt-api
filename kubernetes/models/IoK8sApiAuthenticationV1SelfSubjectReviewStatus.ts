import type { IoK8sApiAuthenticationV1UserInfo } from './IoK8sApiAuthenticationV1UserInfo';

/** SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user. */
export interface IoK8sApiAuthenticationV1SelfSubjectReviewStatus {
  /** User attributes of the user making this request. */
  userInfo?: IoK8sApiAuthenticationV1UserInfo;
}
