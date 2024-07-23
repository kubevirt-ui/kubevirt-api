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
 * NamedRuleWithOperations is a tuple of Operations and Resources with ResourceNames.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations
 */
export interface IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations {
    /**
     * APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
     * @type {Array<string>}
     * @memberof IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations
     */
    apiGroups?: Array<string>;
    /**
     * APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.
     * @type {Array<string>}
     * @memberof IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations
     */
    apiVersions?: Array<string>;
    /**
     * Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required.
     * @type {Array<string>}
     * @memberof IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations
     */
    operations?: Array<string>;
    /**
     * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
     * @type {Array<string>}
     * @memberof IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations
     */
    resourceNames?: Array<string>;
    /**
     * Resources is a list of resources this rule applies to.
     * 
     * For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '*/scale' means all scale subresources. '*/*' means all resources and their subresources.
     * 
     * If wildcard is present, the validation rule will ensure resources do not overlap with each other.
     * 
     * Depending on the enclosing object, subresources might not be allowed. Required.
     * @type {Array<string>}
     * @memberof IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations
     */
    resources?: Array<string>;
    /**
     * scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*".
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations
     */
    scope?: string;
}

export function IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperationsFromJSON(json: any): IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations {
    return IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperationsFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiGroups': !exists(json, 'apiGroups') ? undefined : json['apiGroups'],
        'apiVersions': !exists(json, 'apiVersions') ? undefined : json['apiVersions'],
        'operations': !exists(json, 'operations') ? undefined : json['operations'],
        'resourceNames': !exists(json, 'resourceNames') ? undefined : json['resourceNames'],
        'resources': !exists(json, 'resources') ? undefined : json['resources'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
    };
}

export function IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperationsToJSON(value?: IoK8sApiAdmissionregistrationV1beta1NamedRuleWithOperations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiGroups': value.apiGroups,
        'apiVersions': value.apiVersions,
        'operations': value.operations,
        'resourceNames': value.resourceNames,
        'resources': value.resources,
        'scope': value.scope,
    };
}

