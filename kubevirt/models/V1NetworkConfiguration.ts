import type { V1InterfaceBindingPlugin } from './V1InterfaceBindingPlugin';

/** NetworkConfiguration holds network options */
export interface V1NetworkConfiguration {
  binding?: Record<string, V1InterfaceBindingPlugin>;
  defaultNetworkInterface?: string;
  permitBridgeInterfaceOnPodNetwork?: boolean;
  /** DeprecatedPermitSlirpInterface is an alias for the deprecated PermitSlirpInterface. Deprecated: Removed in v1.3. */
  permitSlirpInterface?: boolean;
}
