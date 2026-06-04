import type { IoK8sApimachineryPkgApiResourceQuantity } from './IoK8sApimachineryPkgApiResourceQuantity';

/** Overhead structure represents the resource overhead associated with running a pod. */
export interface IoK8sApiNodeV1Overhead {
  /** podFixed represents the fixed resource overhead associated with running a pod. */
  podFixed?: Record<string, IoK8sApimachineryPkgApiResourceQuantity>;
}
