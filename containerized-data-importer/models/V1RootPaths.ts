/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * RootPaths lists the paths available at root. For example: "/healthz", "/apis".
 * @export
 * @interface V1RootPaths
 */
export interface V1RootPaths {
    /**
     * paths are the paths available at root.
     * @type {Array<string>}
     * @memberof V1RootPaths
     */
    paths: Array<string>;
}

export function V1RootPathsFromJSON(json: any): V1RootPaths {
    return V1RootPathsFromJSONTyped(json, false);
}

export function V1RootPathsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1RootPaths {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paths': json['paths'],
    };
}

export function V1RootPathsToJSON(value?: V1RootPaths | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paths': value.paths,
    };
}

