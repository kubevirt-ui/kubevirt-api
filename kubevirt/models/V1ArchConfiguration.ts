import type { V1ArchSpecificConfiguration } from './V1ArchSpecificConfiguration';

export interface V1ArchConfiguration {
  amd64?: V1ArchSpecificConfiguration;
  arm64?: V1ArchSpecificConfiguration;
  defaultArchitecture?: string;
  /** Deprecated: ppc64le architecture is no longer supported. */
  ppc64le?: V1ArchSpecificConfiguration;
  s390x?: V1ArchSpecificConfiguration;
}
