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
    IoK8sApiAppsV1DaemonSetUpdateStrategy,
    IoK8sApiAppsV1DaemonSetUpdateStrategyFromJSON,
    IoK8sApiAppsV1DaemonSetUpdateStrategyFromJSONTyped,
    IoK8sApiAppsV1DaemonSetUpdateStrategyToJSON,
    IoK8sApiCoreV1PodTemplateSpec,
    IoK8sApiCoreV1PodTemplateSpecFromJSON,
    IoK8sApiCoreV1PodTemplateSpecFromJSONTyped,
    IoK8sApiCoreV1PodTemplateSpecToJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelector,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './';

/**
 * DaemonSetSpec is the specification of a daemon set.
 * @export
 * @interface IoK8sApiAppsV1DaemonSetSpec
 */
export interface IoK8sApiAppsV1DaemonSetSpec {
    /**
     * The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
     * @type {number}
     * @memberof IoK8sApiAppsV1DaemonSetSpec
     */
    minReadySeconds?: number;
    /**
     * The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
     * @type {number}
     * @memberof IoK8sApiAppsV1DaemonSetSpec
     */
    revisionHistoryLimit?: number;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
     * @memberof IoK8sApiAppsV1DaemonSetSpec
     */
    selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
    /**
     * 
     * @type {IoK8sApiCoreV1PodTemplateSpec}
     * @memberof IoK8sApiAppsV1DaemonSetSpec
     */
    template: IoK8sApiCoreV1PodTemplateSpec;
    /**
     * 
     * @type {IoK8sApiAppsV1DaemonSetUpdateStrategy}
     * @memberof IoK8sApiAppsV1DaemonSetSpec
     */
    updateStrategy?: IoK8sApiAppsV1DaemonSetUpdateStrategy;
}

export function IoK8sApiAppsV1DaemonSetSpecFromJSON(json: any): IoK8sApiAppsV1DaemonSetSpec {
    return IoK8sApiAppsV1DaemonSetSpecFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1DaemonSetSpecFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiAppsV1DaemonSetSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'minReadySeconds': !exists(json, 'minReadySeconds') ? undefined : json['minReadySeconds'],
        'revisionHistoryLimit': !exists(json, 'revisionHistoryLimit') ? undefined : json['revisionHistoryLimit'],
        'selector': IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
        'template': IoK8sApiCoreV1PodTemplateSpecFromJSON(json['template']),
        'updateStrategy': !exists(json, 'updateStrategy') ? undefined : IoK8sApiAppsV1DaemonSetUpdateStrategyFromJSON(json['updateStrategy']),
    };
}

export function IoK8sApiAppsV1DaemonSetSpecToJSON(value?: IoK8sApiAppsV1DaemonSetSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'minReadySeconds': value.minReadySeconds,
        'revisionHistoryLimit': value.revisionHistoryLimit,
        'selector': IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.selector),
        'template': IoK8sApiCoreV1PodTemplateSpecToJSON(value.template),
        'updateStrategy': IoK8sApiAppsV1DaemonSetUpdateStrategyToJSON(value.updateStrategy),
    };
}

