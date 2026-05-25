export interface V1VirtualMachineInstanceGuestOSUser {
  domain?: string;
  /**
   * Time of login of this user on the computer. If multiple instances of the user are logged in, the earliest login time is reported. The value is in fractional seconds since epoch time.
   * @format double
   */
  loginTime?: number;
  /** @default "" */
  userName: string;
}
