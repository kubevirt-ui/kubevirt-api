/** LogVerbosity sets log verbosity level of  various components */
export interface V1LogVerbosity {
  /** NodeVerbosity represents a map of nodes with a specific verbosity level */
  nodeVerbosity?: Record<string, number>;
  /** @format int32 */
  virtAPI?: number;
  /** @format int32 */
  virtController?: number;
  /** @format int32 */
  virtHandler?: number;
  /** @format int32 */
  virtLauncher?: number;
  /** @format int32 */
  virtOperator?: number;
  /** @format int32 */
  virtSynchronizationController?: number;
}
