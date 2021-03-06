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
  IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration,
  IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationFromJSON,
  IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationToJSON,
  IoK8sApimachineryPkgApisMetaV1ListMeta,
  IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList
 */
export interface IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList
   */
  apiVersion?: string;
  /**
   * List of ValidatingWebhookConfiguration.
   * @type {Array<IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration>}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList
   */
  items: Array<IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationListFromJSON(
  json: any,
): IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList {
  return IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationListFromJSONTyped(
    json,
    false,
  );
}

export function IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationListFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    items: (json['items'] as Array<any>).map(
      IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationFromJSON,
    ),
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
  };
}

export function IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationListToJSON(
  value?: IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationList | null,
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
      IoK8sApiAdmissionregistrationV1ValidatingWebhookConfigurationToJSON,
    ),
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
  };
}
