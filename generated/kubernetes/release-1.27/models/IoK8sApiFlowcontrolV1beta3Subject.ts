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
    IoK8sApiFlowcontrolV1beta3GroupSubject,
    IoK8sApiFlowcontrolV1beta3GroupSubjectFromJSON,
    IoK8sApiFlowcontrolV1beta3GroupSubjectFromJSONTyped,
    IoK8sApiFlowcontrolV1beta3GroupSubjectToJSON,
    IoK8sApiFlowcontrolV1beta3ServiceAccountSubject,
    IoK8sApiFlowcontrolV1beta3ServiceAccountSubjectFromJSON,
    IoK8sApiFlowcontrolV1beta3ServiceAccountSubjectFromJSONTyped,
    IoK8sApiFlowcontrolV1beta3ServiceAccountSubjectToJSON,
    IoK8sApiFlowcontrolV1beta3UserSubject,
    IoK8sApiFlowcontrolV1beta3UserSubjectFromJSON,
    IoK8sApiFlowcontrolV1beta3UserSubjectFromJSONTyped,
    IoK8sApiFlowcontrolV1beta3UserSubjectToJSON,
} from './';

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 * @export
 * @interface IoK8sApiFlowcontrolV1beta3Subject
 */
export interface IoK8sApiFlowcontrolV1beta3Subject {
    /**
     * 
     * @type {IoK8sApiFlowcontrolV1beta3GroupSubject}
     * @memberof IoK8sApiFlowcontrolV1beta3Subject
     */
    group?: IoK8sApiFlowcontrolV1beta3GroupSubject;
    /**
     * `kind` indicates which one of the other fields is non-empty. Required
     * @type {string}
     * @memberof IoK8sApiFlowcontrolV1beta3Subject
     */
    kind: string;
    /**
     * 
     * @type {IoK8sApiFlowcontrolV1beta3ServiceAccountSubject}
     * @memberof IoK8sApiFlowcontrolV1beta3Subject
     */
    serviceAccount?: IoK8sApiFlowcontrolV1beta3ServiceAccountSubject;
    /**
     * 
     * @type {IoK8sApiFlowcontrolV1beta3UserSubject}
     * @memberof IoK8sApiFlowcontrolV1beta3Subject
     */
    user?: IoK8sApiFlowcontrolV1beta3UserSubject;
}

export function IoK8sApiFlowcontrolV1beta3SubjectFromJSON(json: any): IoK8sApiFlowcontrolV1beta3Subject {
    return IoK8sApiFlowcontrolV1beta3SubjectFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1beta3SubjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1beta3Subject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'group': !exists(json, 'group') ? undefined : IoK8sApiFlowcontrolV1beta3GroupSubjectFromJSON(json['group']),
        'kind': json['kind'],
        'serviceAccount': !exists(json, 'serviceAccount') ? undefined : IoK8sApiFlowcontrolV1beta3ServiceAccountSubjectFromJSON(json['serviceAccount']),
        'user': !exists(json, 'user') ? undefined : IoK8sApiFlowcontrolV1beta3UserSubjectFromJSON(json['user']),
    };
}

export function IoK8sApiFlowcontrolV1beta3SubjectToJSON(value?: IoK8sApiFlowcontrolV1beta3Subject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'group': IoK8sApiFlowcontrolV1beta3GroupSubjectToJSON(value.group),
        'kind': value.kind,
        'serviceAccount': IoK8sApiFlowcontrolV1beta3ServiceAccountSubjectToJSON(value.serviceAccount),
        'user': IoK8sApiFlowcontrolV1beta3UserSubjectToJSON(value.user),
    };
}
