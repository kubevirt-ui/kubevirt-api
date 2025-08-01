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
import {
    IoK8sApiResourceV1beta1DeviceAllocationConfiguration,
    IoK8sApiResourceV1beta1DeviceAllocationConfigurationFromJSON,
    IoK8sApiResourceV1beta1DeviceAllocationConfigurationFromJSONTyped,
    IoK8sApiResourceV1beta1DeviceAllocationConfigurationToJSON,
    IoK8sApiResourceV1beta1DeviceRequestAllocationResult,
    IoK8sApiResourceV1beta1DeviceRequestAllocationResultFromJSON,
    IoK8sApiResourceV1beta1DeviceRequestAllocationResultFromJSONTyped,
    IoK8sApiResourceV1beta1DeviceRequestAllocationResultToJSON,
} from './';

/**
 * DeviceAllocationResult is the result of allocating devices.
 * @export
 * @interface IoK8sApiResourceV1beta1DeviceAllocationResult
 */
export interface IoK8sApiResourceV1beta1DeviceAllocationResult {
    /**
     * This field is a combination of all the claim and class configuration parameters. Drivers can distinguish between those based on a flag.
     * 
     * This includes configuration parameters for drivers which have no allocated devices in the result because it is up to the drivers which configuration parameters they support. They can silently ignore unknown configuration parameters.
     * @type {Array<IoK8sApiResourceV1beta1DeviceAllocationConfiguration>}
     * @memberof IoK8sApiResourceV1beta1DeviceAllocationResult
     */
    config?: Array<IoK8sApiResourceV1beta1DeviceAllocationConfiguration>;
    /**
     * Results lists all allocated devices.
     * @type {Array<IoK8sApiResourceV1beta1DeviceRequestAllocationResult>}
     * @memberof IoK8sApiResourceV1beta1DeviceAllocationResult
     */
    results?: Array<IoK8sApiResourceV1beta1DeviceRequestAllocationResult>;
}

export function IoK8sApiResourceV1beta1DeviceAllocationResultFromJSON(json: any): IoK8sApiResourceV1beta1DeviceAllocationResult {
    return IoK8sApiResourceV1beta1DeviceAllocationResultFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1beta1DeviceAllocationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiResourceV1beta1DeviceAllocationResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'config': !exists(json, 'config') ? undefined : ((json['config'] as Array<any>).map(IoK8sApiResourceV1beta1DeviceAllocationConfigurationFromJSON)),
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(IoK8sApiResourceV1beta1DeviceRequestAllocationResultFromJSON)),
    };
}

export function IoK8sApiResourceV1beta1DeviceAllocationResultToJSON(value?: IoK8sApiResourceV1beta1DeviceAllocationResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'config': value.config === undefined ? undefined : ((value.config as Array<any>).map(IoK8sApiResourceV1beta1DeviceAllocationConfigurationToJSON)),
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(IoK8sApiResourceV1beta1DeviceRequestAllocationResultToJSON)),
    };
}

