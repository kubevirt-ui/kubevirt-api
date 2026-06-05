import type { V1RESTClientConfiguration } from './V1RESTClientConfiguration';

/** ReloadableComponentConfiguration holds all generic k8s configuration options which can be reloaded by components without requiring a restart. */
export interface V1ReloadableComponentConfiguration {
  /** RestClient can be used to tune certain aspects of the k8s client in use. */
  restClient?: V1RESTClientConfiguration;
}
