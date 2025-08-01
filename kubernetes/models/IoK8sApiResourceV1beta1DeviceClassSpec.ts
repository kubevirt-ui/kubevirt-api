/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
import {
  IoK8sApiResourceV1beta1DeviceClassConfiguration,
  IoK8sApiResourceV1beta1DeviceClassConfigurationFromJSON,
  IoK8sApiResourceV1beta1DeviceClassConfigurationToJSON,
  IoK8sApiResourceV1beta1DeviceSelector,
  IoK8sApiResourceV1beta1DeviceSelectorFromJSON,
  IoK8sApiResourceV1beta1DeviceSelectorToJSON,
} from './';

/**
 * DeviceClassSpec is used in a [DeviceClass] to define what can be allocated and how to configure it.
 * @export
 * @interface IoK8sApiResourceV1beta1DeviceClassSpec
 */
export interface IoK8sApiResourceV1beta1DeviceClassSpec {
  /**
   * Config defines configuration parameters that apply to each device that is claimed via this class. Some classses may potentially be satisfied by multiple drivers, so each instance of a vendor configuration applies to exactly one driver.
   *
   * They are passed to the driver, but are not considered while allocating the claim.
   * @type {Array<IoK8sApiResourceV1beta1DeviceClassConfiguration>}
   * @memberof IoK8sApiResourceV1beta1DeviceClassSpec
   */
  config?: Array<IoK8sApiResourceV1beta1DeviceClassConfiguration>;
  /**
   * Each selector must be satisfied by a device which is claimed via this class.
   * @type {Array<IoK8sApiResourceV1beta1DeviceSelector>}
   * @memberof IoK8sApiResourceV1beta1DeviceClassSpec
   */
  selectors?: Array<IoK8sApiResourceV1beta1DeviceSelector>;
}

export function IoK8sApiResourceV1beta1DeviceClassSpecFromJSON(
  json: any,
): IoK8sApiResourceV1beta1DeviceClassSpec {
  return IoK8sApiResourceV1beta1DeviceClassSpecFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1beta1DeviceClassSpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiResourceV1beta1DeviceClassSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    config: !exists(json, 'config')
      ? undefined
      : (json['config'] as Array<any>).map(IoK8sApiResourceV1beta1DeviceClassConfigurationFromJSON),
    selectors: !exists(json, 'selectors')
      ? undefined
      : (json['selectors'] as Array<any>).map(IoK8sApiResourceV1beta1DeviceSelectorFromJSON),
  };
}

export function IoK8sApiResourceV1beta1DeviceClassSpecToJSON(
  value?: IoK8sApiResourceV1beta1DeviceClassSpec | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    config:
      value.config === undefined
        ? undefined
        : (value.config as Array<any>).map(IoK8sApiResourceV1beta1DeviceClassConfigurationToJSON),
    selectors:
      value.selectors === undefined
        ? undefined
        : (value.selectors as Array<any>).map(IoK8sApiResourceV1beta1DeviceSelectorToJSON),
  };
}
