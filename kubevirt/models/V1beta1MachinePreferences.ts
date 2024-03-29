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
 * MachinePreferences contains various optional defaults for Machine.
 * @export
 * @interface V1beta1MachinePreferences
 */
export interface V1beta1MachinePreferences {
  /**
   * PreferredMachineType optionally defines the preferred machine type to use.
   * @type {string}
   * @memberof V1beta1MachinePreferences
   */
  preferredMachineType?: string;
}

export function V1beta1MachinePreferencesFromJSON(json: any): V1beta1MachinePreferences {
  return V1beta1MachinePreferencesFromJSONTyped(json, false);
}

export function V1beta1MachinePreferencesFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1beta1MachinePreferences {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    preferredMachineType: !exists(json, 'preferredMachineType')
      ? undefined
      : json['preferredMachineType'],
  };
}

export function V1beta1MachinePreferencesToJSON(value?: V1beta1MachinePreferences | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    preferredMachineType: value.preferredMachineType,
  };
}
