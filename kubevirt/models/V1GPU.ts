import type { V1VGPUOptions } from './V1VGPUOptions';

export interface V1GPU {
  /** ClaimName references the name of an entry in the VMI's spec.resourceClaims[] array. The referenced entry may use either resourceClaimName or resourceClaimTemplateName. */
  claimName?: string;
  /** DeviceName is the name of the device provisioned by device-plugins */
  deviceName?: string;
  /**
   * Name of the GPU device as exposed by a device plugin
   * @default ""
   */
  name: string;
  /** RequestName specifies which request from the ResourceClaim/ResourceClaimTemplate spec.devices.requests array this claim request corresponds to. */
  requestName?: string;
  /** If specified, the virtual network interface address and its tag will be provided to the guest via config drive */
  tag?: string;
  virtualGPUOptions?: V1VGPUOptions;
}
