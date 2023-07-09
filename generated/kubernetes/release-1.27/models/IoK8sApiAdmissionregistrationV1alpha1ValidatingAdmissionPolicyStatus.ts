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
    IoK8sApiAdmissionregistrationV1alpha1TypeChecking,
    IoK8sApiAdmissionregistrationV1alpha1TypeCheckingFromJSON,
    IoK8sApiAdmissionregistrationV1alpha1TypeCheckingFromJSONTyped,
    IoK8sApiAdmissionregistrationV1alpha1TypeCheckingToJSON,
    IoK8sApimachineryPkgApisMetaV1Condition,
    IoK8sApimachineryPkgApisMetaV1ConditionFromJSON,
    IoK8sApimachineryPkgApisMetaV1ConditionFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ConditionToJSON,
} from './';

/**
 * ValidatingAdmissionPolicyStatus represents the status of a ValidatingAdmissionPolicy.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus
 */
export interface IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus {
    /**
     * The conditions represent the latest available observations of a policy's current state.
     * @type {Array<IoK8sApimachineryPkgApisMetaV1Condition>}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus
     */
    conditions?: Array<IoK8sApimachineryPkgApisMetaV1Condition>;
    /**
     * The generation observed by the controller.
     * @type {number}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus
     */
    observedGeneration?: number;
    /**
     * 
     * @type {IoK8sApiAdmissionregistrationV1alpha1TypeChecking}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus
     */
    typeChecking?: IoK8sApiAdmissionregistrationV1alpha1TypeChecking;
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatusFromJSON(json: any): IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus {
    return IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatusFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(IoK8sApimachineryPkgApisMetaV1ConditionFromJSON)),
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
        'typeChecking': !exists(json, 'typeChecking') ? undefined : IoK8sApiAdmissionregistrationV1alpha1TypeCheckingFromJSON(json['typeChecking']),
    };
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatusToJSON(value?: IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(IoK8sApimachineryPkgApisMetaV1ConditionToJSON)),
        'observedGeneration': value.observedGeneration,
        'typeChecking': IoK8sApiAdmissionregistrationV1alpha1TypeCheckingToJSON(value.typeChecking),
    };
}

