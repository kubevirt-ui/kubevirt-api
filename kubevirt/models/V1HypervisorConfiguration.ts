/** HypervisorConfiguration holds information regarding the hypervisor present on cluster nodes. */
export interface V1HypervisorConfiguration {
  /** Name is the name of the hypervisor. Supported values are: "kvm", "hyperv-direct". */
  name?: string;
}
