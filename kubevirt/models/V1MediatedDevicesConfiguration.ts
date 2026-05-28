import type { V1NodeMediatedDeviceTypesConfig } from './V1NodeMediatedDeviceTypesConfig';

export interface V1MediatedDevicesConfiguration {
  /** Enable the creation and removal of mediated devices by virt-handler Replaces the deprecated DisableMDEVConfiguration feature gate Defaults to true */
  enabled?: boolean;
  mediatedDeviceTypes?: string[];
  /** Deprecated. Use mediatedDeviceTypes instead. */
  mediatedDevicesTypes?: string[];
  nodeMediatedDeviceTypes?: V1NodeMediatedDeviceTypesConfig[];
}
