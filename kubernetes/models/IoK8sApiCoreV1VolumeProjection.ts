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
  IoK8sApiCoreV1ClusterTrustBundleProjection,
  IoK8sApiCoreV1ClusterTrustBundleProjectionFromJSON,
  IoK8sApiCoreV1ClusterTrustBundleProjectionToJSON,
  IoK8sApiCoreV1ConfigMapProjection,
  IoK8sApiCoreV1ConfigMapProjectionFromJSON,
  IoK8sApiCoreV1ConfigMapProjectionToJSON,
  IoK8sApiCoreV1DownwardAPIProjection,
  IoK8sApiCoreV1DownwardAPIProjectionFromJSON,
  IoK8sApiCoreV1DownwardAPIProjectionToJSON,
  IoK8sApiCoreV1SecretProjection,
  IoK8sApiCoreV1SecretProjectionFromJSON,
  IoK8sApiCoreV1SecretProjectionToJSON,
  IoK8sApiCoreV1ServiceAccountTokenProjection,
  IoK8sApiCoreV1ServiceAccountTokenProjectionFromJSON,
  IoK8sApiCoreV1ServiceAccountTokenProjectionToJSON,
} from './';

/**
 * Projection that may be projected along with other supported volume types
 * @export
 * @interface IoK8sApiCoreV1VolumeProjection
 */
export interface IoK8sApiCoreV1VolumeProjection {
  /**
   *
   * @type {IoK8sApiCoreV1ClusterTrustBundleProjection}
   * @memberof IoK8sApiCoreV1VolumeProjection
   */
  clusterTrustBundle?: IoK8sApiCoreV1ClusterTrustBundleProjection;
  /**
   *
   * @type {IoK8sApiCoreV1ConfigMapProjection}
   * @memberof IoK8sApiCoreV1VolumeProjection
   */
  configMap?: IoK8sApiCoreV1ConfigMapProjection;
  /**
   *
   * @type {IoK8sApiCoreV1DownwardAPIProjection}
   * @memberof IoK8sApiCoreV1VolumeProjection
   */
  downwardAPI?: IoK8sApiCoreV1DownwardAPIProjection;
  /**
   *
   * @type {IoK8sApiCoreV1SecretProjection}
   * @memberof IoK8sApiCoreV1VolumeProjection
   */
  secret?: IoK8sApiCoreV1SecretProjection;
  /**
   *
   * @type {IoK8sApiCoreV1ServiceAccountTokenProjection}
   * @memberof IoK8sApiCoreV1VolumeProjection
   */
  serviceAccountToken?: IoK8sApiCoreV1ServiceAccountTokenProjection;
}

export function IoK8sApiCoreV1VolumeProjectionFromJSON(json: any): IoK8sApiCoreV1VolumeProjection {
  return IoK8sApiCoreV1VolumeProjectionFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1VolumeProjectionFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1VolumeProjection {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    clusterTrustBundle: !exists(json, 'clusterTrustBundle')
      ? undefined
      : IoK8sApiCoreV1ClusterTrustBundleProjectionFromJSON(json['clusterTrustBundle']),
    configMap: !exists(json, 'configMap')
      ? undefined
      : IoK8sApiCoreV1ConfigMapProjectionFromJSON(json['configMap']),
    downwardAPI: !exists(json, 'downwardAPI')
      ? undefined
      : IoK8sApiCoreV1DownwardAPIProjectionFromJSON(json['downwardAPI']),
    secret: !exists(json, 'secret')
      ? undefined
      : IoK8sApiCoreV1SecretProjectionFromJSON(json['secret']),
    serviceAccountToken: !exists(json, 'serviceAccountToken')
      ? undefined
      : IoK8sApiCoreV1ServiceAccountTokenProjectionFromJSON(json['serviceAccountToken']),
  };
}

export function IoK8sApiCoreV1VolumeProjectionToJSON(
  value?: IoK8sApiCoreV1VolumeProjection | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    clusterTrustBundle: IoK8sApiCoreV1ClusterTrustBundleProjectionToJSON(value.clusterTrustBundle),
    configMap: IoK8sApiCoreV1ConfigMapProjectionToJSON(value.configMap),
    downwardAPI: IoK8sApiCoreV1DownwardAPIProjectionToJSON(value.downwardAPI),
    secret: IoK8sApiCoreV1SecretProjectionToJSON(value.secret),
    serviceAccountToken: IoK8sApiCoreV1ServiceAccountTokenProjectionToJSON(
      value.serviceAccountToken,
    ),
  };
}
