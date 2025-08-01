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
/**
 * NetworkDeviceData provides network-related details for the allocated device. This information may be filled by drivers or other components to configure or identify the device within a network context.
 * @export
 * @interface IoK8sApiResourceV1beta1NetworkDeviceData
 */
export interface IoK8sApiResourceV1beta1NetworkDeviceData {
  /**
   * HardwareAddress represents the hardware address (e.g. MAC Address) of the device's network interface.
   *
   * Must not be longer than 128 characters.
   * @type {string}
   * @memberof IoK8sApiResourceV1beta1NetworkDeviceData
   */
  hardwareAddress?: string;
  /**
   * InterfaceName specifies the name of the network interface associated with the allocated device. This might be the name of a physical or virtual network interface being configured in the pod.
   *
   * Must not be longer than 256 characters.
   * @type {string}
   * @memberof IoK8sApiResourceV1beta1NetworkDeviceData
   */
  interfaceName?: string;
  /**
   * IPs lists the network addresses assigned to the device's network interface. This can include both IPv4 and IPv6 addresses. The IPs are in the CIDR notation, which includes both the address and the associated subnet mask. e.g.: "192.0.2.5/24" for IPv4 and "2001:db8::5/64" for IPv6.
   *
   * Must not contain more than 16 entries.
   * @type {Array<string>}
   * @memberof IoK8sApiResourceV1beta1NetworkDeviceData
   */
  ips?: Array<string>;
}

export function IoK8sApiResourceV1beta1NetworkDeviceDataFromJSON(
  json: any,
): IoK8sApiResourceV1beta1NetworkDeviceData {
  return IoK8sApiResourceV1beta1NetworkDeviceDataFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1beta1NetworkDeviceDataFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiResourceV1beta1NetworkDeviceData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    hardwareAddress: !exists(json, 'hardwareAddress') ? undefined : json['hardwareAddress'],
    interfaceName: !exists(json, 'interfaceName') ? undefined : json['interfaceName'],
    ips: !exists(json, 'ips') ? undefined : json['ips'],
  };
}

export function IoK8sApiResourceV1beta1NetworkDeviceDataToJSON(
  value?: IoK8sApiResourceV1beta1NetworkDeviceData | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    hardwareAddress: value.hardwareAddress,
    interfaceName: value.interfaceName,
    ips: value.ips,
  };
}
