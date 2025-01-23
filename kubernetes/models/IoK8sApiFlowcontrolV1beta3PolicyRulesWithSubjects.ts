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
    IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule,
    IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleFromJSON,
    IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleFromJSONTyped,
    IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleToJSON,
    IoK8sApiFlowcontrolV1beta3ResourcePolicyRule,
    IoK8sApiFlowcontrolV1beta3ResourcePolicyRuleFromJSON,
    IoK8sApiFlowcontrolV1beta3ResourcePolicyRuleFromJSONTyped,
    IoK8sApiFlowcontrolV1beta3ResourcePolicyRuleToJSON,
    IoK8sApiFlowcontrolV1beta3Subject,
    IoK8sApiFlowcontrolV1beta3SubjectFromJSON,
    IoK8sApiFlowcontrolV1beta3SubjectFromJSONTyped,
    IoK8sApiFlowcontrolV1beta3SubjectToJSON,
} from './';

/**
 * PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
 * @export
 * @interface IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects
 */
export interface IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects {
    /**
     * `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
     * @type {Array<IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule>}
     * @memberof IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects
     */
    nonResourceRules?: Array<IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule>;
    /**
     * `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.
     * @type {Array<IoK8sApiFlowcontrolV1beta3ResourcePolicyRule>}
     * @memberof IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects
     */
    resourceRules?: Array<IoK8sApiFlowcontrolV1beta3ResourcePolicyRule>;
    /**
     * subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
     * @type {Array<IoK8sApiFlowcontrolV1beta3Subject>}
     * @memberof IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects
     */
    subjects: Array<IoK8sApiFlowcontrolV1beta3Subject>;
}

export function IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjectsFromJSON(json: any): IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects {
    return IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjectsFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjectsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nonResourceRules': !exists(json, 'nonResourceRules') ? undefined : ((json['nonResourceRules'] as Array<any>).map(IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleFromJSON)),
        'resourceRules': !exists(json, 'resourceRules') ? undefined : ((json['resourceRules'] as Array<any>).map(IoK8sApiFlowcontrolV1beta3ResourcePolicyRuleFromJSON)),
        'subjects': ((json['subjects'] as Array<any>).map(IoK8sApiFlowcontrolV1beta3SubjectFromJSON)),
    };
}

export function IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjectsToJSON(value?: IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjects | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nonResourceRules': value.nonResourceRules === undefined ? undefined : ((value.nonResourceRules as Array<any>).map(IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleToJSON)),
        'resourceRules': value.resourceRules === undefined ? undefined : ((value.resourceRules as Array<any>).map(IoK8sApiFlowcontrolV1beta3ResourcePolicyRuleToJSON)),
        'subjects': ((value.subjects as Array<any>).map(IoK8sApiFlowcontrolV1beta3SubjectToJSON)),
    };
}

