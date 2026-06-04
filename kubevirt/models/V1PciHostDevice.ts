/** PciHostDevice represents a host PCI device allowed for passthrough */
export interface V1PciHostDevice {
  /** If true, KubeVirt will leave the allocation and monitoring to an external device plugin */
  externalResourceProvider?: boolean;
  /**
   * The vendor_id:product_id tuple of the PCI device
   * @default ""
   */
  pciVendorSelector: string;
  /**
   * The name of the resource that is representing the device. Exposed by a device plugin and requested by VMs. Typically of the form vendor.com/product_name
   * @default ""
   */
  resourceName: string;
}
