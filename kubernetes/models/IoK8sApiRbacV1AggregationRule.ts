import type { IoK8sApimachineryPkgApisMetaV1LabelSelector } from './IoK8sApimachineryPkgApisMetaV1LabelSelector';

/** AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
export interface IoK8sApiRbacV1AggregationRule {
  /** ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added */
  clusterRoleSelectors?: IoK8sApimachineryPkgApisMetaV1LabelSelector[];
}
