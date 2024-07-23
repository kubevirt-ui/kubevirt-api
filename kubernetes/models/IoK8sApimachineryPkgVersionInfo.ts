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
 * Info contains versioning information. how we'll want to distribute that information.
 * @export
 * @interface IoK8sApimachineryPkgVersionInfo
 */
export interface IoK8sApimachineryPkgVersionInfo {
    /**
     * 
     * @type {string}
     * @memberof IoK8sApimachineryPkgVersionInfo
     */
    buildDate: string;
    /**
     * 
     * @type {string}
     * @memberof IoK8sApimachineryPkgVersionInfo
     */
    compiler: string;
    /**
     * 
     * @type {string}
     * @memberof IoK8sApimachineryPkgVersionInfo
     */
    gitCommit: string;
    /**
     * 
     * @type {string}
     * @memberof IoK8sApimachineryPkgVersionInfo
     */
    gitTreeState: string;
    /**
     * 
     * @type {string}
     * @memberof IoK8sApimachineryPkgVersionInfo
     */
    gitVersion: string;
    /**
     * 
     * @type {string}
     * @memberof IoK8sApimachineryPkgVersionInfo
     */
    goVersion: string;
    /**
     * 
     * @type {string}
     * @memberof IoK8sApimachineryPkgVersionInfo
     */
    major: string;
    /**
     * 
     * @type {string}
     * @memberof IoK8sApimachineryPkgVersionInfo
     */
    minor: string;
    /**
     * 
     * @type {string}
     * @memberof IoK8sApimachineryPkgVersionInfo
     */
    platform: string;
}

export function IoK8sApimachineryPkgVersionInfoFromJSON(json: any): IoK8sApimachineryPkgVersionInfo {
    return IoK8sApimachineryPkgVersionInfoFromJSONTyped(json, false);
}

export function IoK8sApimachineryPkgVersionInfoFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApimachineryPkgVersionInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buildDate': json['buildDate'],
        'compiler': json['compiler'],
        'gitCommit': json['gitCommit'],
        'gitTreeState': json['gitTreeState'],
        'gitVersion': json['gitVersion'],
        'goVersion': json['goVersion'],
        'major': json['major'],
        'minor': json['minor'],
        'platform': json['platform'],
    };
}

export function IoK8sApimachineryPkgVersionInfoToJSON(value?: IoK8sApimachineryPkgVersionInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buildDate': value.buildDate,
        'compiler': value.compiler,
        'gitCommit': value.gitCommit,
        'gitTreeState': value.gitTreeState,
        'gitVersion': value.gitVersion,
        'goVersion': value.goVersion,
        'major': value.major,
        'minor': value.minor,
        'platform': value.platform,
    };
}

