/** Hugepages allow to use hugepages for the VirtualMachineInstance instead of regular memory. */
export interface V1Hugepages {
  /** PageSize specifies the hugepage size, for x86_64 architecture valid values are 1Gi and 2Mi. */
  pageSize?: string;
}
