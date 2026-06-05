/** CPUTopology allows specifying the amount of cores, sockets and threads. */
export interface V1CPUTopology {
  /**
   * Cores specifies the number of cores inside the vmi. Must be a value greater or equal 1.
   * @format int64
   */
  cores?: number;
  /**
   * Sockets specifies the number of sockets inside the vmi. Must be a value greater or equal 1.
   * @format int64
   */
  sockets?: number;
  /**
   * Threads specifies the number of threads inside the vmi. Must be a value greater or equal 1.
   * @format int64
   */
  threads?: number;
}
