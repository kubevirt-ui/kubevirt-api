/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
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
 * KubeVirtWorkloadUpdateStrategy defines options related to updating a KubeVirt install
 * @export
 * @interface V1KubeVirtWorkloadUpdateStrategy
 */
export interface V1KubeVirtWorkloadUpdateStrategy {
    /**
     * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
     * @type {string}
     * @memberof V1KubeVirtWorkloadUpdateStrategy
     */
    batchEvictionInterval?: string;
    /**
     * BatchEvictionSize Represents the number of VMIs that can be forced updated per the BatchShutdownInteral interval
     * 
     * Defaults to 10
     * @type {number}
     * @memberof V1KubeVirtWorkloadUpdateStrategy
     */
    batchEvictionSize?: number;
    /**
     * WorkloadUpdateMethods defines the methods that can be used to disrupt workloads during automated workload updates. When multiple methods are present, the least disruptive method takes precedence over more disruptive methods. For example if both LiveMigrate and Shutdown methods are listed, only VMs which are not live migratable will be restarted/shutdown
     * 
     * An empty list defaults to no automated workload updating
     * @type {Array<string>}
     * @memberof V1KubeVirtWorkloadUpdateStrategy
     */
    workloadUpdateMethods?: Array<string>;
}

export function V1KubeVirtWorkloadUpdateStrategyFromJSON(json: any): V1KubeVirtWorkloadUpdateStrategy {
    return V1KubeVirtWorkloadUpdateStrategyFromJSONTyped(json, false);
}

export function V1KubeVirtWorkloadUpdateStrategyFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1KubeVirtWorkloadUpdateStrategy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'batchEvictionInterval': !exists(json, 'batchEvictionInterval') ? undefined : json['batchEvictionInterval'],
        'batchEvictionSize': !exists(json, 'batchEvictionSize') ? undefined : json['batchEvictionSize'],
        'workloadUpdateMethods': !exists(json, 'workloadUpdateMethods') ? undefined : json['workloadUpdateMethods'],
    };
}

export function V1KubeVirtWorkloadUpdateStrategyToJSON(value?: V1KubeVirtWorkloadUpdateStrategy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'batchEvictionInterval': value.batchEvictionInterval,
        'batchEvictionSize': value.batchEvictionSize,
        'workloadUpdateMethods': value.workloadUpdateMethods,
    };
}

