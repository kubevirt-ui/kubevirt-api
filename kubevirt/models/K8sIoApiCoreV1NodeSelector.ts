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

import {
  K8sIoApiCoreV1NodeSelectorTerm,
  K8sIoApiCoreV1NodeSelectorTermFromJSON,
  K8sIoApiCoreV1NodeSelectorTermToJSON,
} from './';

/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 * @export
 * @interface K8sIoApiCoreV1NodeSelector
 */
export interface K8sIoApiCoreV1NodeSelector {
  /**
   * Required. A list of node selector terms. The terms are ORed.
   * @type {Array<K8sIoApiCoreV1NodeSelectorTerm>}
   * @memberof K8sIoApiCoreV1NodeSelector
   */
  nodeSelectorTerms: Array<K8sIoApiCoreV1NodeSelectorTerm>;
}

export function K8sIoApiCoreV1NodeSelectorFromJSON(json: any): K8sIoApiCoreV1NodeSelector {
  return K8sIoApiCoreV1NodeSelectorFromJSONTyped(json, false);
}

export function K8sIoApiCoreV1NodeSelectorFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): K8sIoApiCoreV1NodeSelector {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    nodeSelectorTerms: (json['nodeSelectorTerms'] as Array<any>).map(
      K8sIoApiCoreV1NodeSelectorTermFromJSON,
    ),
  };
}

export function K8sIoApiCoreV1NodeSelectorToJSON(value?: K8sIoApiCoreV1NodeSelector | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    nodeSelectorTerms: (value.nodeSelectorTerms as Array<any>).map(
      K8sIoApiCoreV1NodeSelectorTermToJSON,
    ),
  };
}
