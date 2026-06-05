export interface V1VirtualMachineInstanceMigrationSource {
  /**
   * The synchronization controller URL to connect to.
   * @default ""
   */
  connectURL: string;
  /**
   * A unique identifier to identify this migration.
   * @default ""
   */
  migrationID: string;
}
