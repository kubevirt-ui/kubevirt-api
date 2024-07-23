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
 *
 * @export
 * @interface V1beta1SpreadOptions
 */
export interface V1beta1SpreadOptions {
  /**
   * Across optionally defines how to spread vCPUs across the guest visible topology. Default: SocketsCores
   * @type {string}
   * @memberof V1beta1SpreadOptions
   */
  across?: string;
  /**
   * Ratio optionally defines the ratio to spread vCPUs across the guest visible topology:
   *
   * CoresThreads        - 1:2   - Controls the ratio of cores to threads. Only a ratio of 2 is currently accepted. SocketsCores        - 1:N   - Controls the ratio of socket to cores. SocketsCoresThreads - 1:N:2 - Controls the ratio of socket to cores. Each core providing 2 threads.
   *
   * Default: 2
   * @type {number}
   * @memberof V1beta1SpreadOptions
   */
  ratio?: number;
}

export function V1beta1SpreadOptionsFromJSON(json: any): V1beta1SpreadOptions {
  return V1beta1SpreadOptionsFromJSONTyped(json, false);
}

export function V1beta1SpreadOptionsFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1beta1SpreadOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    across: !exists(json, 'across') ? undefined : json['across'],
    ratio: !exists(json, 'ratio') ? undefined : json['ratio'],
  };
}

export function V1beta1SpreadOptionsToJSON(value?: V1beta1SpreadOptions | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    across: value.across,
    ratio: value.ratio,
  };
}
