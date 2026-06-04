import type { IoK8sApiFlowcontrolV1QueuingConfiguration } from './IoK8sApiFlowcontrolV1QueuingConfiguration';

/** LimitResponse defines how to handle requests that can not be executed right now. */
export interface IoK8sApiFlowcontrolV1LimitResponse {
  /** `queuing` holds the configuration parameters for queuing. This field may be non-empty only if `type` is `"Queue"`. */
  queuing?: IoK8sApiFlowcontrolV1QueuingConfiguration;
  /** `type` is "Queue" or "Reject". "Queue" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. "Reject" means that requests that can not be executed upon arrival are rejected. Required. */
  type: string;
}
