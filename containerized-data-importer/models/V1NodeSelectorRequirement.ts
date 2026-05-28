export interface V1NodeSelectorRequirement {
  /**
   * The label key that the selector applies to.
   * @default ""
   */
  key: string;
  /**
   * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
   *
   * Possible enum values:
   *  - `"DoesNotExist"`
   *  - `"Exists"`
   *  - `"Gt"`
   *  - `"In"`
   *  - `"Lt"`
   *  - `"NotIn"`
   * @default ""
   */
  operator: "DoesNotExist" | "Exists" | "Gt" | "In" | "Lt" | "NotIn";
  /** An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  values?: string[];
}
