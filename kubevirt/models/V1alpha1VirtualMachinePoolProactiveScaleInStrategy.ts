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
  V1alpha1VirtualMachinePoolSelectionPolicy,
  V1alpha1VirtualMachinePoolSelectionPolicyFromJSON,
  V1alpha1VirtualMachinePoolSelectionPolicyToJSON,
} from './';

/**
 * VirtualMachinePoolProactiveScaleInStrategy represents proactive scale-in strategy
 * @export
 * @interface V1alpha1VirtualMachinePoolProactiveScaleInStrategy
 */
export interface V1alpha1VirtualMachinePoolProactiveScaleInStrategy {
  /**
   *
   * @type {V1alpha1VirtualMachinePoolSelectionPolicy}
   * @memberof V1alpha1VirtualMachinePoolProactiveScaleInStrategy
   */
  selectionPolicy?: V1alpha1VirtualMachinePoolSelectionPolicy;
}

export function V1alpha1VirtualMachinePoolProactiveScaleInStrategyFromJSON(
  json: any,
): V1alpha1VirtualMachinePoolProactiveScaleInStrategy {
  return V1alpha1VirtualMachinePoolProactiveScaleInStrategyFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachinePoolProactiveScaleInStrategyFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1alpha1VirtualMachinePoolProactiveScaleInStrategy {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    selectionPolicy: !exists(json, 'selectionPolicy')
      ? undefined
      : V1alpha1VirtualMachinePoolSelectionPolicyFromJSON(json['selectionPolicy']),
  };
}

export function V1alpha1VirtualMachinePoolProactiveScaleInStrategyToJSON(
  value?: V1alpha1VirtualMachinePoolProactiveScaleInStrategy | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    selectionPolicy: V1alpha1VirtualMachinePoolSelectionPolicyToJSON(value.selectionPolicy),
  };
}
