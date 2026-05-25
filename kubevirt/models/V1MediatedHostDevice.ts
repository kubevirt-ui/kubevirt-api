export interface V1MediatedHostDevice {
  externalResourceProvider?: boolean;
  /** @default "" */
  mdevNameSelector: string;
  /** @default "" */
  resourceName: string;
}
