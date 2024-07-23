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

import { exists, mapValues } from '../runtime';
/**
 * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
 * @export
 * @interface IoK8sApiCoreV1SecretReference
 */
export interface IoK8sApiCoreV1SecretReference {
    /**
     * name is unique within a namespace to reference a secret resource.
     * @type {string}
     * @memberof IoK8sApiCoreV1SecretReference
     */
    name?: string;
    /**
     * namespace defines the space within which the secret name must be unique.
     * @type {string}
     * @memberof IoK8sApiCoreV1SecretReference
     */
    namespace?: string;
}

export function IoK8sApiCoreV1SecretReferenceFromJSON(json: any): IoK8sApiCoreV1SecretReference {
    return IoK8sApiCoreV1SecretReferenceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1SecretReferenceFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiCoreV1SecretReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
    };
}

export function IoK8sApiCoreV1SecretReferenceToJSON(value?: IoK8sApiCoreV1SecretReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'namespace': value.namespace,
    };
}

