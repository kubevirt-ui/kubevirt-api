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
 * @interface V1LaunchSecurity
 */
export interface V1LaunchSecurity {
  /**
   *
   * @type {object}
   * @memberof V1LaunchSecurity
   */
  sev?: object;
}

export function V1LaunchSecurityFromJSON(json: any): V1LaunchSecurity {
  return V1LaunchSecurityFromJSONTyped(json, false);
}

export function V1LaunchSecurityFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1LaunchSecurity {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    sev: !exists(json, 'sev') ? undefined : json['sev'],
  };
}

export function V1LaunchSecurityToJSON(value?: V1LaunchSecurity | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    sev: value.sev,
  };
}
