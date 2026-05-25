export interface IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement {
  /** key is the label key that the selector applies to. */
  key: string;
  /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
  operator: string;
  /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
  values?: string[];
}
