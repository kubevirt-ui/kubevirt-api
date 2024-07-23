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
import {
    V1DataVolumeTemplateSpec,
    V1DataVolumeTemplateSpecFromJSON,
    V1DataVolumeTemplateSpecFromJSONTyped,
    V1DataVolumeTemplateSpecToJSON,
    V1InstancetypeMatcher,
    V1InstancetypeMatcherFromJSON,
    V1InstancetypeMatcherFromJSONTyped,
    V1InstancetypeMatcherToJSON,
    V1LiveUpdateFeatures,
    V1LiveUpdateFeaturesFromJSON,
    V1LiveUpdateFeaturesFromJSONTyped,
    V1LiveUpdateFeaturesToJSON,
    V1PreferenceMatcher,
    V1PreferenceMatcherFromJSON,
    V1PreferenceMatcherFromJSONTyped,
    V1PreferenceMatcherToJSON,
    V1VirtualMachineInstanceTemplateSpec,
    V1VirtualMachineInstanceTemplateSpecFromJSON,
    V1VirtualMachineInstanceTemplateSpecFromJSONTyped,
    V1VirtualMachineInstanceTemplateSpecToJSON,
} from './';

/**
 * VirtualMachineSpec describes how the proper VirtualMachine should look like
 * @export
 * @interface V1VirtualMachineSpec
 */
export interface V1VirtualMachineSpec {
    /**
     * dataVolumeTemplates is a list of dataVolumes that the VirtualMachineInstance template can reference. DataVolumes in this list are dynamically created for the VirtualMachine and are tied to the VirtualMachine's life-cycle.
     * @type {Array<V1DataVolumeTemplateSpec>}
     * @memberof V1VirtualMachineSpec
     */
    dataVolumeTemplates?: Array<V1DataVolumeTemplateSpec>;
    /**
     * 
     * @type {V1InstancetypeMatcher}
     * @memberof V1VirtualMachineSpec
     */
    instancetype?: V1InstancetypeMatcher;
    /**
     * 
     * @type {V1LiveUpdateFeatures}
     * @memberof V1VirtualMachineSpec
     */
    liveUpdateFeatures?: V1LiveUpdateFeatures;
    /**
     * 
     * @type {V1PreferenceMatcher}
     * @memberof V1VirtualMachineSpec
     */
    preference?: V1PreferenceMatcher;
    /**
     * Running state indicates the requested running state of the VirtualMachineInstance mutually exclusive with Running
     * @type {string}
     * @memberof V1VirtualMachineSpec
     */
    runStrategy?: string;
    /**
     * Running controls whether the associatied VirtualMachineInstance is created or not Mutually exclusive with RunStrategy
     * @type {boolean}
     * @memberof V1VirtualMachineSpec
     */
    running?: boolean;
    /**
     * 
     * @type {V1VirtualMachineInstanceTemplateSpec}
     * @memberof V1VirtualMachineSpec
     */
    template: V1VirtualMachineInstanceTemplateSpec;
}

export function V1VirtualMachineSpecFromJSON(json: any): V1VirtualMachineSpec {
    return V1VirtualMachineSpecFromJSONTyped(json, false);
}

export function V1VirtualMachineSpecFromJSONTyped(json: any, _ignoreDiscriminator: boolean): V1VirtualMachineSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataVolumeTemplates': !exists(json, 'dataVolumeTemplates') ? undefined : ((json['dataVolumeTemplates'] as Array<any>).map(V1DataVolumeTemplateSpecFromJSON)),
        'instancetype': !exists(json, 'instancetype') ? undefined : V1InstancetypeMatcherFromJSON(json['instancetype']),
        'liveUpdateFeatures': !exists(json, 'liveUpdateFeatures') ? undefined : V1LiveUpdateFeaturesFromJSON(json['liveUpdateFeatures']),
        'preference': !exists(json, 'preference') ? undefined : V1PreferenceMatcherFromJSON(json['preference']),
        'runStrategy': !exists(json, 'runStrategy') ? undefined : json['runStrategy'],
        'running': !exists(json, 'running') ? undefined : json['running'],
        'template': V1VirtualMachineInstanceTemplateSpecFromJSON(json['template']),
    };
}

export function V1VirtualMachineSpecToJSON(value?: V1VirtualMachineSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataVolumeTemplates': value.dataVolumeTemplates === undefined ? undefined : ((value.dataVolumeTemplates as Array<any>).map(V1DataVolumeTemplateSpecToJSON)),
        'instancetype': V1InstancetypeMatcherToJSON(value.instancetype),
        'liveUpdateFeatures': V1LiveUpdateFeaturesToJSON(value.liveUpdateFeatures),
        'preference': V1PreferenceMatcherToJSON(value.preference),
        'runStrategy': value.runStrategy,
        'running': value.running,
        'template': V1VirtualMachineInstanceTemplateSpecToJSON(value.template),
    };
}

