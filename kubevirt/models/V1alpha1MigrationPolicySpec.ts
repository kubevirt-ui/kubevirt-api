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
import { V1alpha1Selectors, V1alpha1SelectorsFromJSON, V1alpha1SelectorsToJSON } from './';

/**
 *
 * @export
 * @interface V1alpha1MigrationPolicySpec
 */
export interface V1alpha1MigrationPolicySpec {
  /**
   *
   * @type {boolean}
   * @memberof V1alpha1MigrationPolicySpec
   */
  allowAutoConverge?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof V1alpha1MigrationPolicySpec
   */
  allowPostCopy?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof V1alpha1MigrationPolicySpec
   */
  allowWorkloadDisruption?: boolean;
  /**
   * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
   *
   * The serialization format is:
   *
   * ``` <quantity>        ::= <signedNumber><suffix>
   *
   * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
   *
   * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
   *
   * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
   *
   * <decimalSI>       ::= m | "" | k | M | G | T | P | E
   *
   * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
   *
   * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber> ```
   *
   * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
   *
   * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
   *
   * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
   *
   * - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.
   *
   * The sign will be omitted unless the number is negative.
   *
   * Examples:
   *
   * - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"
   *
   * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
   *
   * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
   *
   * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
   * @type {string}
   * @memberof V1alpha1MigrationPolicySpec
   */
  bandwidthPerMigration?: string;
  /**
   *
   * @type {number}
   * @memberof V1alpha1MigrationPolicySpec
   */
  completionTimeoutPerGiB?: number;
  /**
   *
   * @type {V1alpha1Selectors}
   * @memberof V1alpha1MigrationPolicySpec
   */
  selectors: V1alpha1Selectors;
}

export function V1alpha1MigrationPolicySpecFromJSON(json: any): V1alpha1MigrationPolicySpec {
  return V1alpha1MigrationPolicySpecFromJSONTyped(json, false);
}

export function V1alpha1MigrationPolicySpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1alpha1MigrationPolicySpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    allowAutoConverge: !exists(json, 'allowAutoConverge') ? undefined : json['allowAutoConverge'],
    allowPostCopy: !exists(json, 'allowPostCopy') ? undefined : json['allowPostCopy'],
    allowWorkloadDisruption: !exists(json, 'allowWorkloadDisruption')
      ? undefined
      : json['allowWorkloadDisruption'],
    bandwidthPerMigration: !exists(json, 'bandwidthPerMigration')
      ? undefined
      : json['bandwidthPerMigration'],
    completionTimeoutPerGiB: !exists(json, 'completionTimeoutPerGiB')
      ? undefined
      : json['completionTimeoutPerGiB'],
    selectors: V1alpha1SelectorsFromJSON(json['selectors']),
  };
}

export function V1alpha1MigrationPolicySpecToJSON(value?: V1alpha1MigrationPolicySpec | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    allowAutoConverge: value.allowAutoConverge,
    allowPostCopy: value.allowPostCopy,
    allowWorkloadDisruption: value.allowWorkloadDisruption,
    bandwidthPerMigration: value.bandwidthPerMigration,
    completionTimeoutPerGiB: value.completionTimeoutPerGiB,
    selectors: V1alpha1SelectorsToJSON(value.selectors),
  };
}
