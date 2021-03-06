/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
import {
  V1NodeSelectorRequirement,
  V1NodeSelectorRequirementFromJSON,
  V1NodeSelectorRequirementToJSON,
} from './';

/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 * @export
 * @interface V1NodeSelectorTerm
 */
export interface V1NodeSelectorTerm {
  /**
   * A list of node selector requirements by node's labels.
   * @type {Array<V1NodeSelectorRequirement>}
   * @memberof V1NodeSelectorTerm
   */
  matchExpressions?: Array<V1NodeSelectorRequirement>;
  /**
   * A list of node selector requirements by node's fields.
   * @type {Array<V1NodeSelectorRequirement>}
   * @memberof V1NodeSelectorTerm
   */
  matchFields?: Array<V1NodeSelectorRequirement>;
}

export function V1NodeSelectorTermFromJSON(json: any): V1NodeSelectorTerm {
  return V1NodeSelectorTermFromJSONTyped(json, false);
}

export function V1NodeSelectorTermFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1NodeSelectorTerm {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    matchExpressions: !exists(json, 'matchExpressions')
      ? undefined
      : (json['matchExpressions'] as Array<any>).map(V1NodeSelectorRequirementFromJSON),
    matchFields: !exists(json, 'matchFields')
      ? undefined
      : (json['matchFields'] as Array<any>).map(V1NodeSelectorRequirementFromJSON),
  };
}

export function V1NodeSelectorTermToJSON(value?: V1NodeSelectorTerm | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    matchExpressions:
      value.matchExpressions === undefined
        ? undefined
        : (value.matchExpressions as Array<any>).map(V1NodeSelectorRequirementToJSON),
    matchFields:
      value.matchFields === undefined
        ? undefined
        : (value.matchFields as Array<any>).map(V1NodeSelectorRequirementToJSON),
  };
}
