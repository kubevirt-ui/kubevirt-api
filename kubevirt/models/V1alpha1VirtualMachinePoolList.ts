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
  K8sIoApimachineryPkgApisMetaV1ListMeta,
  K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON,
  K8sIoApimachineryPkgApisMetaV1ListMetaToJSON,
  V1alpha1VirtualMachinePool,
  V1alpha1VirtualMachinePoolFromJSON,
  V1alpha1VirtualMachinePoolToJSON,
} from './';

/**
 * VirtualMachinePoolList is a list of VirtualMachinePool resources.
 * @export
 * @interface V1alpha1VirtualMachinePoolList
 */
export interface V1alpha1VirtualMachinePoolList {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1alpha1VirtualMachinePoolList
   */
  apiVersion?: string;
  /**
   *
   * @type {Array<V1alpha1VirtualMachinePool>}
   * @memberof V1alpha1VirtualMachinePoolList
   */
  items: Array<V1alpha1VirtualMachinePool>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1alpha1VirtualMachinePoolList
   */
  kind?: string;
  /**
   *
   * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
   * @memberof V1alpha1VirtualMachinePoolList
   */
  metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

export function V1alpha1VirtualMachinePoolListFromJSON(json: any): V1alpha1VirtualMachinePoolList {
  return V1alpha1VirtualMachinePoolListFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachinePoolListFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1alpha1VirtualMachinePoolList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    items: (json['items'] as Array<any>).map(V1alpha1VirtualMachinePoolFromJSON),
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
  };
}

export function V1alpha1VirtualMachinePoolListToJSON(
  value?: V1alpha1VirtualMachinePoolList | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    items: (value.items as Array<any>).map(V1alpha1VirtualMachinePoolToJSON),
    kind: value.kind,
    metadata: K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
  };
}
