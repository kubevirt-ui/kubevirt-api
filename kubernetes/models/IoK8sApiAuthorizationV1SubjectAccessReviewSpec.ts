import type { IoK8sApiAuthorizationV1NonResourceAttributes } from './IoK8sApiAuthorizationV1NonResourceAttributes';
import type { IoK8sApiAuthorizationV1ResourceAttributes } from './IoK8sApiAuthorizationV1ResourceAttributes';

export interface IoK8sApiAuthorizationV1SubjectAccessReviewSpec {
  /** Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here. */
  extra?: Record<string, string[]>;
  /** Groups is the groups you're testing for. */
  groups?: string[];
  /** NonResourceAttributes describes information for a non-resource access request */
  nonResourceAttributes?: IoK8sApiAuthorizationV1NonResourceAttributes;
  /** ResourceAuthorizationAttributes describes information for a resource access request */
  resourceAttributes?: IoK8sApiAuthorizationV1ResourceAttributes;
  /** UID information about the requesting user. */
  uid?: string;
  /** User is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups */
  user?: string;
}
