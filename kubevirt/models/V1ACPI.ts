export interface V1ACPI {
  /** Similar to SlicNameRef, another ACPI entry that is used in more recent Windows versions. The above points to the spec of MSDM too. */
  msdmNameRef?: string;
  /** SlicNameRef should match the volume name of a secret object. The data in the secret should be a binary blob that follows the ACPI SLIC standard, see: https://learn.microsoft.com/en-us/previous-versions/windows/hardware/design/dn653305(v=vs.85) */
  slicNameRef?: string;
}
