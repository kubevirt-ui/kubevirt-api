export const K8sIoApiCoreV1HTTPGetActionSchemeEnum = {
  HTTP: 'HTTP',
  HTTPS: 'HTTPS',
} as const;

export type K8sIoApiCoreV1HTTPGetActionSchemeEnum =
  typeof K8sIoApiCoreV1HTTPGetActionSchemeEnum[keyof typeof K8sIoApiCoreV1HTTPGetActionSchemeEnum];
