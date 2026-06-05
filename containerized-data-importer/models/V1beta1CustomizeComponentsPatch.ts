/** CustomizeComponentsPatch defines a patch for some resource. */
export interface V1beta1CustomizeComponentsPatch {
  /** @default "" */
  patch: string;
  /** @default "" */
  resourceName: string;
  /** @default "" */
  resourceType: string;
  /** @default "" */
  type: string;
}
