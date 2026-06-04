export interface V1VirtualMachineStateChangeRequest {
  /**
   * Indicates the type of action that is requested. e.g. Start or Stop
   * @default ""
   */
  action: string;
  /** Provides additional data in order to perform the Action */
  data?: Record<string, string>;
  /** Indicates the UUID of an existing Virtual Machine Instance that this change request applies to -- if applicable */
  uid?: string;
}
