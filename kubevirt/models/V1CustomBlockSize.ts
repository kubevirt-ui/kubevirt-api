/** CustomBlockSize represents the desired logical and physical block size for a VM disk. */
export interface V1CustomBlockSize {
  /** @format int32 */
  discardGranularity?: number;
  /** @format int32 */
  logical?: number;
  /** @format int32 */
  physical?: number;
}
