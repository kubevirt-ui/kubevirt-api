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
 * ExpressionWarning is a warning information that targets a specific expression.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1alpha1ExpressionWarning
 */
export interface IoK8sApiAdmissionregistrationV1alpha1ExpressionWarning {
    /**
     * The path to the field that refers the expression. For example, the reference to the expression of the first item of validations is "spec.validations[0].expression"
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ExpressionWarning
     */
    fieldRef: string;
    /**
     * The content of type checking information in a human-readable form. Each line of the warning contains the type that the expression is checked against, followed by the type check error from the compiler.
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ExpressionWarning
     */
    warning: string;
}

export function IoK8sApiAdmissionregistrationV1alpha1ExpressionWarningFromJSON(json: any): IoK8sApiAdmissionregistrationV1alpha1ExpressionWarning {
    return IoK8sApiAdmissionregistrationV1alpha1ExpressionWarningFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1alpha1ExpressionWarningFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiAdmissionregistrationV1alpha1ExpressionWarning {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fieldRef': json['fieldRef'],
        'warning': json['warning'],
    };
}

export function IoK8sApiAdmissionregistrationV1alpha1ExpressionWarningToJSON(value?: IoK8sApiAdmissionregistrationV1alpha1ExpressionWarning | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fieldRef': value.fieldRef,
        'warning': value.warning,
    };
}

