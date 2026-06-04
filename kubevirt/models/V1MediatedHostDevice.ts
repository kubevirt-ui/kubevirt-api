/** MediatedHostDevice represents a host mediated device allowed for passthrough */
export interface V1MediatedHostDevice {
  externalResourceProvider?: boolean;
  /** @default "" */
  mdevNameSelector: string;
  /** @default "" */
  resourceName: string;
}
