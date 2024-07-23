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
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 * @export
 * @interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference
 */
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference {
  /**
   * name is the name of the service. Required
   * @type {string}
   * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference
   */
  name: string;
  /**
   * namespace is the namespace of the service. Required
   * @type {string}
   * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference
   */
  namespace: string;
  /**
   * path is an optional URL path at which the webhook will be contacted.
   * @type {string}
   * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference
   */
  path?: string;
  /**
   * port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.
   * @type {number}
   * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference
   */
  port?: number;
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReferenceFromJSON(
  json: any,
): IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference {
  return IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReferenceFromJSONTyped(
    json,
    false,
  );
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReferenceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json['name'],
    namespace: json['namespace'],
    path: !exists(json, 'path') ? undefined : json['path'],
    port: !exists(json, 'port') ? undefined : json['port'],
  };
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReferenceToJSON(
  value?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    namespace: value.namespace,
    path: value.path,
    port: value.port,
  };
}
