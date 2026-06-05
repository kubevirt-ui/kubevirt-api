import type { IoK8sApiAppsV1RollingUpdateStatefulSetStrategy } from './IoK8sApiAppsV1RollingUpdateStatefulSetStrategy';

/** StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy. */
export interface IoK8sApiAppsV1StatefulSetUpdateStrategy {
  /** RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType. */
  rollingUpdate?: IoK8sApiAppsV1RollingUpdateStatefulSetStrategy;
  /** Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate. */
  type?: string;
}
