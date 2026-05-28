export interface IoK8sApiCoreV1TopologySelectorLabelRequirement {
  /** The label key that the selector applies to. */
  key: string;
  /** An array of string values. One value must match the label to be selected. Each entry in Values is ORed. */
  values: string[];
}
