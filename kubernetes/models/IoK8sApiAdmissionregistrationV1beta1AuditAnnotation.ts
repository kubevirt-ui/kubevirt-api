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
 * AuditAnnotation describes how to produce an audit annotation for an API request.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1beta1AuditAnnotation
 */
export interface IoK8sApiAdmissionregistrationV1beta1AuditAnnotation {
    /**
     * key specifies the audit annotation key. The audit annotation keys of a ValidatingAdmissionPolicy must be unique. The key must be a qualified name ([A-Za-z0-9][-A-Za-z0-9_.]*) no more than 63 bytes in length.
     * 
     * The key is combined with the resource name of the ValidatingAdmissionPolicy to construct an audit annotation key: "{ValidatingAdmissionPolicy name}/{key}".
     * 
     * If an admission webhook uses the same resource name as this ValidatingAdmissionPolicy and the same audit annotation key, the annotation key will be identical. In this case, the first annotation written with the key will be included in the audit event and all subsequent annotations with the same key will be discarded.
     * 
     * Required.
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1beta1AuditAnnotation
     */
    key: string;
    /**
     * valueExpression represents the expression which is evaluated by CEL to produce an audit annotation value. The expression must evaluate to either a string or null value. If the expression evaluates to a string, the audit annotation is included with the string value. If the expression evaluates to null or empty string the audit annotation will be omitted. The valueExpression may be no longer than 5kb in length. If the result of the valueExpression is more than 10kb in length, it will be truncated to 10kb.
     * 
     * If multiple ValidatingAdmissionPolicyBinding resources match an API request, then the valueExpression will be evaluated for each binding. All unique values produced by the valueExpressions will be joined together in a comma-separated list.
     * 
     * Required.
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1beta1AuditAnnotation
     */
    valueExpression: string;
}

export function IoK8sApiAdmissionregistrationV1beta1AuditAnnotationFromJSON(json: any): IoK8sApiAdmissionregistrationV1beta1AuditAnnotation {
    return IoK8sApiAdmissionregistrationV1beta1AuditAnnotationFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1beta1AuditAnnotationFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiAdmissionregistrationV1beta1AuditAnnotation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'valueExpression': json['valueExpression'],
    };
}

export function IoK8sApiAdmissionregistrationV1beta1AuditAnnotationToJSON(value?: IoK8sApiAdmissionregistrationV1beta1AuditAnnotation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'valueExpression': value.valueExpression,
    };
}

