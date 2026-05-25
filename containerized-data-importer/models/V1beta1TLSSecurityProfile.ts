import type { V1beta1CustomTLSProfile } from './V1beta1CustomTLSProfile';
import type { V1beta1IntermediateTLSProfile } from './V1beta1IntermediateTLSProfile';
import type { V1beta1ModernTLSProfile } from './V1beta1ModernTLSProfile';
import type { V1beta1OldTLSProfile } from './V1beta1OldTLSProfile';

export interface V1beta1TLSSecurityProfile {
  /**
   * custom is a user-defined TLS security profile. Be extremely careful using a custom profile as invalid configurations can be catastrophic. An example custom profile looks like this:
   *
   *   ciphers:
   *     - ECDHE-ECDSA-CHACHA20-POLY1305
   *     - ECDHE-RSA-CHACHA20-POLY1305
   *     - ECDHE-RSA-AES128-GCM-SHA256
   *     - ECDHE-ECDSA-AES128-GCM-SHA256
   *   minTLSVersion: VersionTLS11
   */
  custom?: V1beta1CustomTLSProfile;
  /**
   * intermediate is a TLS security profile based on:
   *
   * https://wiki.mozilla.org/Security/Server_Side_TLS#Intermediate_compatibility_.28recommended.29
   *
   * and looks like this (yaml):
   *
   *   ciphers:
   *     - TLS_AES_128_GCM_SHA256
   *     - TLS_AES_256_GCM_SHA384
   *     - TLS_CHACHA20_POLY1305_SHA256
   *     - ECDHE-ECDSA-AES128-GCM-SHA256
   *     - ECDHE-RSA-AES128-GCM-SHA256
   *     - ECDHE-ECDSA-AES256-GCM-SHA384
   *     - ECDHE-RSA-AES256-GCM-SHA384
   *     - ECDHE-ECDSA-CHACHA20-POLY1305
   *     - ECDHE-RSA-CHACHA20-POLY1305
   *     - DHE-RSA-AES128-GCM-SHA256
   *     - DHE-RSA-AES256-GCM-SHA384
   *   minTLSVersion: VersionTLS12
   */
  intermediate?: V1beta1IntermediateTLSProfile;
  /**
   * modern is a TLS security profile based on:
   *
   * https://wiki.mozilla.org/Security/Server_Side_TLS#Modern_compatibility
   *
   * and looks like this (yaml):
   *
   *   ciphers:
   *     - TLS_AES_128_GCM_SHA256
   *     - TLS_AES_256_GCM_SHA384
   *     - TLS_CHACHA20_POLY1305_SHA256
   *   minTLSVersion: VersionTLS13
   *
   * NOTE: Currently unsupported.
   */
  modern?: V1beta1ModernTLSProfile;
  /**
   * old is a TLS security profile based on:
   *
   * https://wiki.mozilla.org/Security/Server_Side_TLS#Old_backward_compatibility
   *
   * and looks like this (yaml):
   *
   *   ciphers:
   *     - TLS_AES_128_GCM_SHA256
   *     - TLS_AES_256_GCM_SHA384
   *     - TLS_CHACHA20_POLY1305_SHA256
   *     - ECDHE-ECDSA-AES128-GCM-SHA256
   *     - ECDHE-RSA-AES128-GCM-SHA256
   *     - ECDHE-ECDSA-AES256-GCM-SHA384
   *     - ECDHE-RSA-AES256-GCM-SHA384
   *     - ECDHE-ECDSA-CHACHA20-POLY1305
   *     - ECDHE-RSA-CHACHA20-POLY1305
   *     - DHE-RSA-AES128-GCM-SHA256
   *     - DHE-RSA-AES256-GCM-SHA384
   *     - DHE-RSA-CHACHA20-POLY1305
   *     - ECDHE-ECDSA-AES128-SHA256
   *     - ECDHE-RSA-AES128-SHA256
   *     - ECDHE-ECDSA-AES128-SHA
   *     - ECDHE-RSA-AES128-SHA
   *     - ECDHE-ECDSA-AES256-SHA384
   *     - ECDHE-RSA-AES256-SHA384
   *     - ECDHE-ECDSA-AES256-SHA
   *     - ECDHE-RSA-AES256-SHA
   *     - DHE-RSA-AES128-SHA256
   *     - DHE-RSA-AES256-SHA256
   *     - AES128-GCM-SHA256
   *     - AES256-GCM-SHA384
   *     - AES128-SHA256
   *     - AES256-SHA256
   *     - AES128-SHA
   *     - AES256-SHA
   *     - DES-CBC3-SHA
   *   minTLSVersion: VersionTLS10
   */
  old?: V1beta1OldTLSProfile;
  /**
   * type is one of Old, Intermediate, Modern or Custom. Custom provides the ability to specify individual TLS security profile parameters. Old, Intermediate and Modern are TLS security profiles based on:
   *
   * https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations
   *
   * The profiles are intent based, so they may change over time as new ciphers are developed and existing ciphers are found to be insecure.  Depending on precisely which ciphers are available to a process, the list may be reduced.
   *
   * Note that the Modern profile is currently not supported because it is not yet well adopted by common software libraries.
   * @default ""
   */
  type?: string;
}
