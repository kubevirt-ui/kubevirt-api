export interface V1beta1UploadTokenRequestSpec {
  /**
   * PvcName is the name of the PVC to upload to
   * @default ""
   */
  pvcName: string;
}
