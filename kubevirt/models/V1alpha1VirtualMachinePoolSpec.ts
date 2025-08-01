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
  V1alpha1VirtualMachinePoolNameGeneration,
  V1alpha1VirtualMachinePoolNameGenerationFromJSON,
  V1alpha1VirtualMachinePoolNameGenerationToJSON,
  V1alpha1VirtualMachinePoolScaleInStrategy,
  V1alpha1VirtualMachinePoolScaleInStrategyFromJSON,
  V1alpha1VirtualMachinePoolScaleInStrategyToJSON,
  V1alpha1VirtualMachineTemplateSpec,
  V1alpha1VirtualMachineTemplateSpecFromJSON,
  V1alpha1VirtualMachineTemplateSpecToJSON,
} from './';

/**
 *
 * @export
 * @interface V1alpha1VirtualMachinePoolSpec
 */
export interface V1alpha1VirtualMachinePoolSpec {
  /**
   * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
   * @type {string}
   * @memberof V1alpha1VirtualMachinePoolSpec
   */
  maxUnavailable?: string;
  /**
   *
   * @type {V1alpha1VirtualMachinePoolNameGeneration}
   * @memberof V1alpha1VirtualMachinePoolSpec
   */
  nameGeneration?: V1alpha1VirtualMachinePoolNameGeneration;
  /**
   * Indicates that the pool is paused.
   * @type {boolean}
   * @memberof V1alpha1VirtualMachinePoolSpec
   */
  paused?: boolean;
  /**
   * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
   * @type {number}
   * @memberof V1alpha1VirtualMachinePoolSpec
   */
  replicas?: number;
  /**
   *
   * @type {V1alpha1VirtualMachinePoolScaleInStrategy}
   * @memberof V1alpha1VirtualMachinePoolSpec
   */
  scaleInStrategy?: V1alpha1VirtualMachinePoolScaleInStrategy;
  /**
   *
   * @type {K8sIoApimachineryPkgApisMetaV1LabelSelector}
   * @memberof V1alpha1VirtualMachinePoolSpec
   */
  selector: K8sIoApimachineryPkgApisMetaV1LabelSelector;
  /**
   *
   * @type {V1alpha1VirtualMachineTemplateSpec}
   * @memberof V1alpha1VirtualMachinePoolSpec
   */
  virtualMachineTemplate: V1alpha1VirtualMachineTemplateSpec;
}

export function V1alpha1VirtualMachinePoolSpecFromJSON(json: any): V1alpha1VirtualMachinePoolSpec {
  return V1alpha1VirtualMachinePoolSpecFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachinePoolSpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1alpha1VirtualMachinePoolSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    maxUnavailable: !exists(json, 'maxUnavailable') ? undefined : json['maxUnavailable'],
    nameGeneration: !exists(json, 'nameGeneration')
      ? undefined
      : V1alpha1VirtualMachinePoolNameGenerationFromJSON(json['nameGeneration']),
    paused: !exists(json, 'paused') ? undefined : json['paused'],
    replicas: !exists(json, 'replicas') ? undefined : json['replicas'],
    scaleInStrategy: !exists(json, 'scaleInStrategy')
      ? undefined
      : V1alpha1VirtualMachinePoolScaleInStrategyFromJSON(json['scaleInStrategy']),
    selector: K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
    virtualMachineTemplate: V1alpha1VirtualMachineTemplateSpecFromJSON(
      json['virtualMachineTemplate'],
    ),
  };
}

export function V1alpha1VirtualMachinePoolSpecToJSON(
  value?: V1alpha1VirtualMachinePoolSpec | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    maxUnavailable: value.maxUnavailable,
    nameGeneration: V1alpha1VirtualMachinePoolNameGenerationToJSON(value.nameGeneration),
    paused: value.paused,
    replicas: value.replicas,
    scaleInStrategy: V1alpha1VirtualMachinePoolScaleInStrategyToJSON(value.scaleInStrategy),
    selector: K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON(value.selector),
    virtualMachineTemplate: V1alpha1VirtualMachineTemplateSpecToJSON(value.virtualMachineTemplate),
  };
}
