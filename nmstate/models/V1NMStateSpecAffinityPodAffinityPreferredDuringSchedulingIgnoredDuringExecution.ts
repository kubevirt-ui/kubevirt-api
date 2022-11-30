/* tslint:disable */
/* eslint-disable */
/**
 *
 *
 *
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
  V1NMStateSpecAffinityPodAffinityPodAffinityTerm,
  V1NMStateSpecAffinityPodAffinityPodAffinityTermFromJSON,
  V1NMStateSpecAffinityPodAffinityPodAffinityTermFromJSONTyped,
  V1NMStateSpecAffinityPodAffinityPodAffinityTermToJSON,
} from './';

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 * @export
 * @interface V1NMStateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution
 */
export interface V1NMStateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
   *
   * @type {V1NMStateSpecAffinityPodAffinityPodAffinityTerm}
   * @memberof V1NMStateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution
   */
  podAffinityTerm: V1NMStateSpecAffinityPodAffinityPodAffinityTerm;
  /**
   * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
   * @type {number}
   * @memberof V1NMStateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution
   */
  weight: number;
}

export function V1NMStateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionFromJSON(
  json: any,
): V1NMStateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  return V1NMStateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionFromJSONTyped(
    json,
    false,
  );
}

export function V1NMStateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1NMStateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    podAffinityTerm: V1NMStateSpecAffinityPodAffinityPodAffinityTermFromJSON(
      json['podAffinityTerm'],
    ),
    weight: json['weight'],
  };
}

export function V1NMStateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToJSON(
  value?: V1NMStateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    podAffinityTerm: V1NMStateSpecAffinityPodAffinityPodAffinityTermToJSON(value.podAffinityTerm),
    weight: value.weight,
  };
}
