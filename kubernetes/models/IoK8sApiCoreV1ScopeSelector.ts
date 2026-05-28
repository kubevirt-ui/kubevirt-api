import type { IoK8sApiCoreV1ScopedResourceSelectorRequirement } from './IoK8sApiCoreV1ScopedResourceSelectorRequirement';

export interface IoK8sApiCoreV1ScopeSelector {
  /** A list of scope selector requirements by scope of the resources. */
  matchExpressions?: IoK8sApiCoreV1ScopedResourceSelectorRequirement[];
}
