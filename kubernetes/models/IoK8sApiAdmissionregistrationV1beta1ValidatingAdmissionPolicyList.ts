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
  IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy,
  IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyFromJSON,
  IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyToJSON,
  IoK8sApimachineryPkgApisMetaV1ListMeta,
  IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * ValidatingAdmissionPolicyList is a list of ValidatingAdmissionPolicy.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList
 */
export interface IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList
   */
  apiVersion?: string;
  /**
   * List of ValidatingAdmissionPolicy.
   * @type {Array<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy>}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList
   */
  items: Array<IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicy>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyListFromJSON(
  json: any,
): IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList {
  return IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyListFromJSONTyped(
    json,
    false,
  );
}

export function IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyListFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    items: (json['items'] as Array<any>).map(
      IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyFromJSON,
    ),
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
  };
}

export function IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyListToJSON(
  value?: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyList | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    items: (value.items as Array<any>).map(
      IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyToJSON,
    ),
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
  };
}
