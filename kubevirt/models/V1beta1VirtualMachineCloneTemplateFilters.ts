export interface V1beta1VirtualMachineCloneTemplateFilters {
  /** Example use: "!some/key*". For a detailed description, please refer to https://kubevirt.io/user-guide/operations/clone_api/#label-annotation-filters. */
  annotationFilters?: string[];
  /** Example use: "!some/key*". For a detailed description, please refer to https://kubevirt.io/user-guide/operations/clone_api/#label-annotation-filters. */
  labelFilters?: string[];
}
