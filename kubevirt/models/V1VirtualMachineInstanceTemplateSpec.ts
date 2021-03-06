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
  K8sIoApimachineryPkgApisMetaV1ObjectMeta,
  K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
  K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
  V1VirtualMachineInstanceSpec,
  V1VirtualMachineInstanceSpecFromJSON,
  V1VirtualMachineInstanceSpecToJSON,
} from './';

/**
 *
 * @export
 * @interface V1VirtualMachineInstanceTemplateSpec
 */
export interface V1VirtualMachineInstanceTemplateSpec {
  /**
   *
   * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
   * @memberof V1VirtualMachineInstanceTemplateSpec
   */
  metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
  /**
   *
   * @type {V1VirtualMachineInstanceSpec}
   * @memberof V1VirtualMachineInstanceTemplateSpec
   */
  spec?: V1VirtualMachineInstanceSpec;
}

export function V1VirtualMachineInstanceTemplateSpecFromJSON(
  json: any,
): V1VirtualMachineInstanceTemplateSpec {
  return V1VirtualMachineInstanceTemplateSpecFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceTemplateSpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1VirtualMachineInstanceTemplateSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    metadata: !exists(json, 'metadata')
      ? undefined
      : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
    spec: !exists(json, 'spec') ? undefined : V1VirtualMachineInstanceSpecFromJSON(json['spec']),
  };
}

export function V1VirtualMachineInstanceTemplateSpecToJSON(
  value?: V1VirtualMachineInstanceTemplateSpec | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    metadata: K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
    spec: V1VirtualMachineInstanceSpecToJSON(value.spec),
  };
}
