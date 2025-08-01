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
 * PortStatus represents the error condition of a service port
 * @export
 * @interface IoK8sApiCoreV1PortStatus
 */
export interface IoK8sApiCoreV1PortStatus {
  /**
   * Error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use
   *   CamelCase names
   * - cloud provider specific error values must have names that comply with the
   *   format foo.example.com/CamelCase.
   * @type {string}
   * @memberof IoK8sApiCoreV1PortStatus
   */
  error?: string;
  /**
   * Port is the port number of the service port of which status is recorded here
   * @type {number}
   * @memberof IoK8sApiCoreV1PortStatus
   */
  port: number;
  /**
   * Protocol is the protocol of the service port of which status is recorded here The supported values are: "TCP", "UDP", "SCTP"
   * @type {string}
   * @memberof IoK8sApiCoreV1PortStatus
   */
  protocol: string;
}

export function IoK8sApiCoreV1PortStatusFromJSON(json: any): IoK8sApiCoreV1PortStatus {
  return IoK8sApiCoreV1PortStatusFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PortStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1PortStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    error: !exists(json, 'error') ? undefined : json['error'],
    port: json['port'],
    protocol: json['protocol'],
  };
}

export function IoK8sApiCoreV1PortStatusToJSON(value?: IoK8sApiCoreV1PortStatus | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    error: value.error,
    port: value.port,
    protocol: value.protocol,
  };
}
