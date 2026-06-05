import type { IoK8sApiCoreV1NodeRuntimeHandlerFeatures } from './IoK8sApiCoreV1NodeRuntimeHandlerFeatures';

/** NodeRuntimeHandler is a set of runtime handler information. */
export interface IoK8sApiCoreV1NodeRuntimeHandler {
  /** Supported features. */
  features?: IoK8sApiCoreV1NodeRuntimeHandlerFeatures;
  /** Runtime handler name. Empty for the default runtime handler. */
  name?: string;
}
