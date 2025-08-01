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
import {
  K8sIoApimachineryPkgApisMetaV1LabelSelector,
  K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON,
  K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './';

/**
 * ObjectGraphOptions holds options for the object graph.
 * @export
 * @interface V1ObjectGraphOptions
 */
export interface V1ObjectGraphOptions {
  /**
   * IncludeOptionalNodes indicates whether to include optional nodes in the graph. True by default.
   * @type {boolean}
   * @memberof V1ObjectGraphOptions
   */
  includeOptionalNodes?: boolean;
  /**
   *
   * @type {K8sIoApimachineryPkgApisMetaV1LabelSelector}
   * @memberof V1ObjectGraphOptions
   */
  labelSelector?: K8sIoApimachineryPkgApisMetaV1LabelSelector;
}

export function V1ObjectGraphOptionsFromJSON(json: any): V1ObjectGraphOptions {
  return V1ObjectGraphOptionsFromJSONTyped(json, false);
}

export function V1ObjectGraphOptionsFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1ObjectGraphOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    includeOptionalNodes: !exists(json, 'includeOptionalNodes')
      ? undefined
      : json['includeOptionalNodes'],
    labelSelector: !exists(json, 'labelSelector')
      ? undefined
      : K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['labelSelector']),
  };
}

export function V1ObjectGraphOptionsToJSON(value?: V1ObjectGraphOptions | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    includeOptionalNodes: value.includeOptionalNodes,
    labelSelector: K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON(value.labelSelector),
  };
}
