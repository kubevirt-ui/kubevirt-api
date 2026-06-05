export interface V1ClaimRequest {
  /** ClaimName references the name of an entry in the VMI's spec.resourceClaims[] array. The referenced entry may use either resourceClaimName or resourceClaimTemplateName. */
  claimName?: string;
  /** RequestName specifies which request from the ResourceClaim/ResourceClaimTemplate spec.devices.requests array this claim request corresponds to. */
  requestName?: string;
}
