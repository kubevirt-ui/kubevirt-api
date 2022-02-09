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
  IoK8sApiAuthenticationV1TokenReviewSpec,
  IoK8sApiAuthenticationV1TokenReviewSpecFromJSON,
  IoK8sApiAuthenticationV1TokenReviewSpecToJSON,
  IoK8sApiAuthenticationV1TokenReviewStatus,
  IoK8sApiAuthenticationV1TokenReviewStatusFromJSON,
  IoK8sApiAuthenticationV1TokenReviewStatusToJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMeta,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 * @export
 * @interface IoK8sApiAuthenticationV1TokenReview
 */
export interface IoK8sApiAuthenticationV1TokenReview {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiAuthenticationV1TokenReview
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiAuthenticationV1TokenReview
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
   * @memberof IoK8sApiAuthenticationV1TokenReview
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   *
   * @type {IoK8sApiAuthenticationV1TokenReviewSpec}
   * @memberof IoK8sApiAuthenticationV1TokenReview
   */
  spec: IoK8sApiAuthenticationV1TokenReviewSpec;
  /**
   *
   * @type {IoK8sApiAuthenticationV1TokenReviewStatus}
   * @memberof IoK8sApiAuthenticationV1TokenReview
   */
  status?: IoK8sApiAuthenticationV1TokenReviewStatus;
}

export function IoK8sApiAuthenticationV1TokenReviewFromJSON(
  json: any,
): IoK8sApiAuthenticationV1TokenReview {
  return IoK8sApiAuthenticationV1TokenReviewFromJSONTyped(json, false);
}

export function IoK8sApiAuthenticationV1TokenReviewFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAuthenticationV1TokenReview {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
    spec: IoK8sApiAuthenticationV1TokenReviewSpecFromJSON(json['spec']),
    status: !exists(json, 'status')
      ? undefined
      : IoK8sApiAuthenticationV1TokenReviewStatusFromJSON(json['status']),
  };
}

export function IoK8sApiAuthenticationV1TokenReviewToJSON(
  value?: IoK8sApiAuthenticationV1TokenReview | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
    spec: IoK8sApiAuthenticationV1TokenReviewSpecToJSON(value.spec),
    status: IoK8sApiAuthenticationV1TokenReviewStatusToJSON(value.status),
  };
}