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
  IoK8sApiCoreV1LoadBalancerIngress,
  IoK8sApiCoreV1LoadBalancerIngressFromJSON,
  IoK8sApiCoreV1LoadBalancerIngressToJSON,
} from './';

/**
 * LoadBalancerStatus represents the status of a load-balancer.
 * @export
 * @interface IoK8sApiCoreV1LoadBalancerStatus
 */
export interface IoK8sApiCoreV1LoadBalancerStatus {
  /**
   * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
   * @type {Array<IoK8sApiCoreV1LoadBalancerIngress>}
   * @memberof IoK8sApiCoreV1LoadBalancerStatus
   */
  ingress?: Array<IoK8sApiCoreV1LoadBalancerIngress>;
}

export function IoK8sApiCoreV1LoadBalancerStatusFromJSON(
  json: any,
): IoK8sApiCoreV1LoadBalancerStatus {
  return IoK8sApiCoreV1LoadBalancerStatusFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1LoadBalancerStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1LoadBalancerStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    ingress: !exists(json, 'ingress')
      ? undefined
      : (json['ingress'] as Array<any>).map(IoK8sApiCoreV1LoadBalancerIngressFromJSON),
  };
}

export function IoK8sApiCoreV1LoadBalancerStatusToJSON(
  value?: IoK8sApiCoreV1LoadBalancerStatus | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    ingress:
      value.ingress === undefined
        ? undefined
        : (value.ingress as Array<any>).map(IoK8sApiCoreV1LoadBalancerIngressToJSON),
  };
}
