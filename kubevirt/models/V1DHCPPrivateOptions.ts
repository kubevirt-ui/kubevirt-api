export interface V1DHCPPrivateOptions {
  /**
   * Option is an Integer value from 224-254 Required.
   * @format int32
   * @default 0
   */
  option: number;
  /**
   * Value is a String value for the Option provided Required.
   * @default ""
   */
  value: string;
}
