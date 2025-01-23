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
    IoK8sApiAppsV1StatefulSetOrdinals,
    IoK8sApiAppsV1StatefulSetOrdinalsFromJSON,
    IoK8sApiAppsV1StatefulSetOrdinalsFromJSONTyped,
    IoK8sApiAppsV1StatefulSetOrdinalsToJSON,
    IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy,
    IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyFromJSON,
    IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyFromJSONTyped,
    IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyToJSON,
    IoK8sApiAppsV1StatefulSetUpdateStrategy,
    IoK8sApiAppsV1StatefulSetUpdateStrategyFromJSON,
    IoK8sApiAppsV1StatefulSetUpdateStrategyFromJSONTyped,
    IoK8sApiAppsV1StatefulSetUpdateStrategyToJSON,
    IoK8sApiCoreV1PersistentVolumeClaim,
    IoK8sApiCoreV1PersistentVolumeClaimFromJSON,
    IoK8sApiCoreV1PersistentVolumeClaimFromJSONTyped,
    IoK8sApiCoreV1PersistentVolumeClaimToJSON,
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
 * A StatefulSetSpec is the specification of a StatefulSet.
 * @export
 * @interface IoK8sApiAppsV1StatefulSetSpec
 */
export interface IoK8sApiAppsV1StatefulSetSpec {
    /**
     * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
     * @type {number}
     * @memberof IoK8sApiAppsV1StatefulSetSpec
     */
    minReadySeconds?: number;
    /**
     * 
     * @type {IoK8sApiAppsV1StatefulSetOrdinals}
     * @memberof IoK8sApiAppsV1StatefulSetSpec
     */
    ordinals?: IoK8sApiAppsV1StatefulSetOrdinals;
    /**
     * 
     * @type {IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy}
     * @memberof IoK8sApiAppsV1StatefulSetSpec
     */
    persistentVolumeClaimRetentionPolicy?: IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicy;
    /**
     * podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.
     * @type {string}
     * @memberof IoK8sApiAppsV1StatefulSetSpec
     */
    podManagementPolicy?: string;
    /**
     * replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
     * @type {number}
     * @memberof IoK8sApiAppsV1StatefulSetSpec
     */
    replicas?: number;
    /**
     * revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
     * @type {number}
     * @memberof IoK8sApiAppsV1StatefulSetSpec
     */
    revisionHistoryLimit?: number;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
     * @memberof IoK8sApiAppsV1StatefulSetSpec
     */
    selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
    /**
     * serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller.
     * @type {string}
     * @memberof IoK8sApiAppsV1StatefulSetSpec
     */
    serviceName: string;
    /**
     * 
     * @type {IoK8sApiCoreV1PodTemplateSpec}
     * @memberof IoK8sApiAppsV1StatefulSetSpec
     */
    template: IoK8sApiCoreV1PodTemplateSpec;
    /**
     * 
     * @type {IoK8sApiAppsV1StatefulSetUpdateStrategy}
     * @memberof IoK8sApiAppsV1StatefulSetSpec
     */
    updateStrategy?: IoK8sApiAppsV1StatefulSetUpdateStrategy;
    /**
     * volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
     * @type {Array<IoK8sApiCoreV1PersistentVolumeClaim>}
     * @memberof IoK8sApiAppsV1StatefulSetSpec
     */
    volumeClaimTemplates?: Array<IoK8sApiCoreV1PersistentVolumeClaim>;
}

export function IoK8sApiAppsV1StatefulSetSpecFromJSON(json: any): IoK8sApiAppsV1StatefulSetSpec {
    return IoK8sApiAppsV1StatefulSetSpecFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1StatefulSetSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAppsV1StatefulSetSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'minReadySeconds': !exists(json, 'minReadySeconds') ? undefined : json['minReadySeconds'],
        'ordinals': !exists(json, 'ordinals') ? undefined : IoK8sApiAppsV1StatefulSetOrdinalsFromJSON(json['ordinals']),
        'persistentVolumeClaimRetentionPolicy': !exists(json, 'persistentVolumeClaimRetentionPolicy') ? undefined : IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyFromJSON(json['persistentVolumeClaimRetentionPolicy']),
        'podManagementPolicy': !exists(json, 'podManagementPolicy') ? undefined : json['podManagementPolicy'],
        'replicas': !exists(json, 'replicas') ? undefined : json['replicas'],
        'revisionHistoryLimit': !exists(json, 'revisionHistoryLimit') ? undefined : json['revisionHistoryLimit'],
        'selector': IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
        'serviceName': json['serviceName'],
        'template': IoK8sApiCoreV1PodTemplateSpecFromJSON(json['template']),
        'updateStrategy': !exists(json, 'updateStrategy') ? undefined : IoK8sApiAppsV1StatefulSetUpdateStrategyFromJSON(json['updateStrategy']),
        'volumeClaimTemplates': !exists(json, 'volumeClaimTemplates') ? undefined : ((json['volumeClaimTemplates'] as Array<any>).map(IoK8sApiCoreV1PersistentVolumeClaimFromJSON)),
    };
}

export function IoK8sApiAppsV1StatefulSetSpecToJSON(value?: IoK8sApiAppsV1StatefulSetSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'minReadySeconds': value.minReadySeconds,
        'ordinals': IoK8sApiAppsV1StatefulSetOrdinalsToJSON(value.ordinals),
        'persistentVolumeClaimRetentionPolicy': IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyToJSON(value.persistentVolumeClaimRetentionPolicy),
        'podManagementPolicy': value.podManagementPolicy,
        'replicas': value.replicas,
        'revisionHistoryLimit': value.revisionHistoryLimit,
        'selector': IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.selector),
        'serviceName': value.serviceName,
        'template': IoK8sApiCoreV1PodTemplateSpecToJSON(value.template),
        'updateStrategy': IoK8sApiAppsV1StatefulSetUpdateStrategyToJSON(value.updateStrategy),
        'volumeClaimTemplates': value.volumeClaimTemplates === undefined ? undefined : ((value.volumeClaimTemplates as Array<any>).map(IoK8sApiCoreV1PersistentVolumeClaimToJSON)),
    };
}

