import type { IoK8sApiAppsV1RollingUpdateDeployment } from './IoK8sApiAppsV1RollingUpdateDeployment';

/** DeploymentStrategy describes how to replace existing pods with new ones. */
export interface IoK8sApiAppsV1DeploymentStrategy {
  /** Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. */
  rollingUpdate?: IoK8sApiAppsV1RollingUpdateDeployment;
  /** Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate. */
  type?: string;
}
