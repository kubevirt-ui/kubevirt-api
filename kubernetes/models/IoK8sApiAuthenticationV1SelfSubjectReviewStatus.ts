import type { IoK8sApiAuthenticationV1UserInfo } from './IoK8sApiAuthenticationV1UserInfo';

export interface IoK8sApiAuthenticationV1SelfSubjectReviewStatus {
  /** User attributes of the user making this request. */
  userInfo?: IoK8sApiAuthenticationV1UserInfo;
}
