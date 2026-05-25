import type { IoK8sApiAppsV1RollingUpdateStatefulSetStrategy } from './IoK8sApiAppsV1RollingUpdateStatefulSetStrategy';

export interface IoK8sApiAppsV1StatefulSetUpdateStrategy {
  /** RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType. */
  rollingUpdate?: IoK8sApiAppsV1RollingUpdateStatefulSetStrategy;
  /** Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate. */
  type?: string;
}
