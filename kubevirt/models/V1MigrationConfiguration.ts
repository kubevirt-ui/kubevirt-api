/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
/**
 * MigrationConfiguration holds migration options. Can be overridden for specific groups of VMs though migration policies. Visit https://kubevirt.io/user-guide/operations/migration_policies/ for more information.
 * @export
 * @interface V1MigrationConfiguration
 */
export interface V1MigrationConfiguration {
  /**
   * AllowAutoConverge allows the platform to compromise performance/availability of VMIs to guarantee successful VMI live migrations. Defaults to false
   * @type {boolean}
   * @memberof V1MigrationConfiguration
   */
  allowAutoConverge?: boolean;
  /**
   * AllowPostCopy enables post-copy live migrations. Such migrations allow even the busiest VMIs to successfully live-migrate. However, events like a network failure can cause a VMI crash. If set to true, migrations will still start in pre-copy, but switch to post-copy when CompletionTimeoutPerGiB triggers. Defaults to false
   * @type {boolean}
   * @memberof V1MigrationConfiguration
   */
  allowPostCopy?: boolean;
  /**
   * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
   *
   * The serialization format is:
   *
   * <quantity>        ::= <signedNumber><suffix>
   *   (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
   * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
   *   (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
   * <decimalSI>       ::= m | "" | k | M | G | T | P | E
   *   (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
   * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>
   *
   * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
   *
   * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
   *
   * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
   *   a. No precision is lost
   *   b. No fractional digits will be emitted
   *   c. The exponent (or suffix) is as large as possible.
   * The sign will be omitted unless the number is negative.
   *
   * Examples:
   *   1.5 will be serialized as "1500m"
   *   1.5Gi will be serialized as "1536Mi"
   *
   * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
   *
   * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
   *
   * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
   * @type {string}
   * @memberof V1MigrationConfiguration
   */
  bandwidthPerMigration?: string;
  /**
   * CompletionTimeoutPerGiB is the maximum number of seconds per GiB a migration is allowed to take. If a live-migration takes longer to migrate than this value multiplied by the size of the VMI, the migration will be cancelled, unless AllowPostCopy is true. Defaults to 800
   * @type {number}
   * @memberof V1MigrationConfiguration
   */
  completionTimeoutPerGiB?: number;
  /**
   * When set to true, DisableTLS will disable the additional layer of live migration encryption provided by KubeVirt. This is usually a bad idea. Defaults to false
   * @type {boolean}
   * @memberof V1MigrationConfiguration
   */
  disableTLS?: boolean;
  /**
   * Network is the name of the CNI network to use for live migrations. By default, migrations go through the pod network.
   * @type {string}
   * @memberof V1MigrationConfiguration
   */
  network?: string;
  /**
   * NodeDrainTaintKey defines the taint key that indicates a node should be drained. Note: this option relies on the deprecated node taint feature. Default: kubevirt.io/drain
   * @type {string}
   * @memberof V1MigrationConfiguration
   */
  nodeDrainTaintKey?: string;
  /**
   * ParallelMigrationsPerCluster is the total number of concurrent live migrations allowed cluster-wide. Defaults to 5
   * @type {number}
   * @memberof V1MigrationConfiguration
   */
  parallelMigrationsPerCluster?: number;
  /**
   * ParallelOutboundMigrationsPerNode is the maximum number of concurrent outgoing live migrations allowed per node. Defaults to 2
   * @type {number}
   * @memberof V1MigrationConfiguration
   */
  parallelOutboundMigrationsPerNode?: number;
  /**
   * ProgressTimeout is the maximum number of seconds a live migration is allowed to make no progress. Hitting this timeout means a migration transferred 0 data for that many seconds. The migration is then considered stuck and therefore cancelled. Defaults to 150
   * @type {number}
   * @memberof V1MigrationConfiguration
   */
  progressTimeout?: number;
  /**
   * UnsafeMigrationOverride allows live migrations to occur even if the compatibility check indicates the migration will be unsafe to the guest. Defaults to false
   * @type {boolean}
   * @memberof V1MigrationConfiguration
   */
  unsafeMigrationOverride?: boolean;
}

export function V1MigrationConfigurationFromJSON(json: any): V1MigrationConfiguration {
  return V1MigrationConfigurationFromJSONTyped(json, false);
}

export function V1MigrationConfigurationFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1MigrationConfiguration {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    allowAutoConverge: !exists(json, 'allowAutoConverge') ? undefined : json['allowAutoConverge'],
    allowPostCopy: !exists(json, 'allowPostCopy') ? undefined : json['allowPostCopy'],
    bandwidthPerMigration: !exists(json, 'bandwidthPerMigration')
      ? undefined
      : json['bandwidthPerMigration'],
    completionTimeoutPerGiB: !exists(json, 'completionTimeoutPerGiB')
      ? undefined
      : json['completionTimeoutPerGiB'],
    disableTLS: !exists(json, 'disableTLS') ? undefined : json['disableTLS'],
    network: !exists(json, 'network') ? undefined : json['network'],
    nodeDrainTaintKey: !exists(json, 'nodeDrainTaintKey') ? undefined : json['nodeDrainTaintKey'],
    parallelMigrationsPerCluster: !exists(json, 'parallelMigrationsPerCluster')
      ? undefined
      : json['parallelMigrationsPerCluster'],
    parallelOutboundMigrationsPerNode: !exists(json, 'parallelOutboundMigrationsPerNode')
      ? undefined
      : json['parallelOutboundMigrationsPerNode'],
    progressTimeout: !exists(json, 'progressTimeout') ? undefined : json['progressTimeout'],
    unsafeMigrationOverride: !exists(json, 'unsafeMigrationOverride')
      ? undefined
      : json['unsafeMigrationOverride'],
  };
}

export function V1MigrationConfigurationToJSON(value?: V1MigrationConfiguration | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    allowAutoConverge: value.allowAutoConverge,
    allowPostCopy: value.allowPostCopy,
    bandwidthPerMigration: value.bandwidthPerMigration,
    completionTimeoutPerGiB: value.completionTimeoutPerGiB,
    disableTLS: value.disableTLS,
    network: value.network,
    nodeDrainTaintKey: value.nodeDrainTaintKey,
    parallelMigrationsPerCluster: value.parallelMigrationsPerCluster,
    parallelOutboundMigrationsPerNode: value.parallelOutboundMigrationsPerNode,
    progressTimeout: value.progressTimeout,
    unsafeMigrationOverride: value.unsafeMigrationOverride,
  };
}
