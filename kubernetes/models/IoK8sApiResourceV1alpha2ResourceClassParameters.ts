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
  IoK8sApiResourceV1alpha2ResourceClassParametersReference,
  IoK8sApiResourceV1alpha2ResourceClassParametersReferenceFromJSON,
  IoK8sApiResourceV1alpha2ResourceClassParametersReferenceToJSON,
  IoK8sApiResourceV1alpha2ResourceFilter,
  IoK8sApiResourceV1alpha2ResourceFilterFromJSON,
  IoK8sApiResourceV1alpha2ResourceFilterToJSON,
  IoK8sApiResourceV1alpha2VendorParameters,
  IoK8sApiResourceV1alpha2VendorParametersFromJSON,
  IoK8sApiResourceV1alpha2VendorParametersToJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMeta,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * ResourceClassParameters defines resource requests for a ResourceClass in an in-tree format understood by Kubernetes.
 * @export
 * @interface IoK8sApiResourceV1alpha2ResourceClassParameters
 */
export interface IoK8sApiResourceV1alpha2ResourceClassParameters {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiResourceV1alpha2ResourceClassParameters
   */
  apiVersion?: string;
  /**
   * Filters describes additional contraints that must be met when using the class.
   * @type {Array<IoK8sApiResourceV1alpha2ResourceFilter>}
   * @memberof IoK8sApiResourceV1alpha2ResourceClassParameters
   */
  filters?: Array<IoK8sApiResourceV1alpha2ResourceFilter>;
  /**
   *
   * @type {IoK8sApiResourceV1alpha2ResourceClassParametersReference}
   * @memberof IoK8sApiResourceV1alpha2ResourceClassParameters
   */
  generatedFrom?: IoK8sApiResourceV1alpha2ResourceClassParametersReference;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiResourceV1alpha2ResourceClassParameters
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
   * @memberof IoK8sApiResourceV1alpha2ResourceClassParameters
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * VendorParameters are arbitrary setup parameters for all claims using this class. They are ignored while allocating the claim. There must not be more than one entry per driver.
   * @type {Array<IoK8sApiResourceV1alpha2VendorParameters>}
   * @memberof IoK8sApiResourceV1alpha2ResourceClassParameters
   */
  vendorParameters?: Array<IoK8sApiResourceV1alpha2VendorParameters>;
}

export function IoK8sApiResourceV1alpha2ResourceClassParametersFromJSON(
  json: any,
): IoK8sApiResourceV1alpha2ResourceClassParameters {
  return IoK8sApiResourceV1alpha2ResourceClassParametersFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2ResourceClassParametersFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiResourceV1alpha2ResourceClassParameters {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    filters: !exists(json, 'filters')
      ? undefined
      : (json['filters'] as Array<any>).map(IoK8sApiResourceV1alpha2ResourceFilterFromJSON),
    generatedFrom: !exists(json, 'generatedFrom')
      ? undefined
      : IoK8sApiResourceV1alpha2ResourceClassParametersReferenceFromJSON(json['generatedFrom']),
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
    vendorParameters: !exists(json, 'vendorParameters')
      ? undefined
      : (json['vendorParameters'] as Array<any>).map(
          IoK8sApiResourceV1alpha2VendorParametersFromJSON,
        ),
  };
}

export function IoK8sApiResourceV1alpha2ResourceClassParametersToJSON(
  value?: IoK8sApiResourceV1alpha2ResourceClassParameters | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    filters:
      value.filters === undefined
        ? undefined
        : (value.filters as Array<any>).map(IoK8sApiResourceV1alpha2ResourceFilterToJSON),
    generatedFrom: IoK8sApiResourceV1alpha2ResourceClassParametersReferenceToJSON(
      value.generatedFrom,
    ),
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
    vendorParameters:
      value.vendorParameters === undefined
        ? undefined
        : (value.vendorParameters as Array<any>).map(
            IoK8sApiResourceV1alpha2VendorParametersToJSON,
          ),
  };
}
