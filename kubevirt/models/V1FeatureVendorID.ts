export interface V1FeatureVendorID {
  /** Enabled determines if the feature should be enabled or disabled on the guest. Defaults to true. */
  enabled?: boolean;
  /** VendorID sets the hypervisor vendor id, visible to the vmi. String up to twelve characters. */
  vendorid?: string;
}
