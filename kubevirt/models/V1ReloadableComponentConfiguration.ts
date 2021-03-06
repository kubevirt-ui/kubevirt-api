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
  V1RESTClientConfiguration,
  V1RESTClientConfigurationFromJSON,
  V1RESTClientConfigurationToJSON,
} from './';

/**
 * ReloadableComponentConfiguration holds all generic k8s configuration options which can be reloaded by components without requiring a restart.
 * @export
 * @interface V1ReloadableComponentConfiguration
 */
export interface V1ReloadableComponentConfiguration {
  /**
   *
   * @type {V1RESTClientConfiguration}
   * @memberof V1ReloadableComponentConfiguration
   */
  restClient?: V1RESTClientConfiguration;
}

export function V1ReloadableComponentConfigurationFromJSON(
  json: any,
): V1ReloadableComponentConfiguration {
  return V1ReloadableComponentConfigurationFromJSONTyped(json, false);
}

export function V1ReloadableComponentConfigurationFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1ReloadableComponentConfiguration {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    restClient: !exists(json, 'restClient')
      ? undefined
      : V1RESTClientConfigurationFromJSON(json['restClient']),
  };
}

export function V1ReloadableComponentConfigurationToJSON(
  value?: V1ReloadableComponentConfiguration | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    restClient: V1RESTClientConfigurationToJSON(value.restClient),
  };
}
