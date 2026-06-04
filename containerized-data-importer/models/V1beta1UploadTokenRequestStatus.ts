/** UploadTokenRequestStatus stores the status of a token request */
export interface V1beta1UploadTokenRequestStatus {
  /** Token is a JWT token to be inserted in "Authentication Bearer header" */
  token?: string;
}
