/** SourceIndication provides an indication of the source VM with its description message */
export interface V1beta1SourceIndication {
  /**
   * Indication is the indication type
   * @default ""
   */
  indication: string;
  /**
   * Message provides a description message of the indication
   * @default ""
   */
  message: string;
}
