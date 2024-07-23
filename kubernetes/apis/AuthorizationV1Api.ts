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


import * as runtime from '../runtime';
import {
    IoK8sApiAuthorizationV1LocalSubjectAccessReview,
    IoK8sApiAuthorizationV1LocalSubjectAccessReviewFromJSON,
    IoK8sApiAuthorizationV1LocalSubjectAccessReviewToJSON,
    IoK8sApiAuthorizationV1SelfSubjectAccessReview,
    IoK8sApiAuthorizationV1SelfSubjectAccessReviewFromJSON,
    IoK8sApiAuthorizationV1SelfSubjectAccessReviewToJSON,
    IoK8sApiAuthorizationV1SelfSubjectRulesReview,
    IoK8sApiAuthorizationV1SelfSubjectRulesReviewFromJSON,
    IoK8sApiAuthorizationV1SelfSubjectRulesReviewToJSON,
    IoK8sApiAuthorizationV1SubjectAccessReview,
    IoK8sApiAuthorizationV1SubjectAccessReviewFromJSON,
    IoK8sApiAuthorizationV1SubjectAccessReviewToJSON,
    IoK8sApimachineryPkgApisMetaV1APIResourceList,
    IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON,
    IoK8sApimachineryPkgApisMetaV1APIResourceListToJSON,
} from '../models';

export interface CreateAuthorizationV1NamespacedLocalSubjectAccessReviewRequest {
    namespace: string;
    body: IoK8sApiAuthorizationV1LocalSubjectAccessReview;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
}

export interface CreateAuthorizationV1SelfSubjectAccessReviewRequest {
    body: IoK8sApiAuthorizationV1SelfSubjectAccessReview;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
}

export interface CreateAuthorizationV1SelfSubjectRulesReviewRequest {
    body: IoK8sApiAuthorizationV1SelfSubjectRulesReview;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
}

export interface CreateAuthorizationV1SubjectAccessReviewRequest {
    body: IoK8sApiAuthorizationV1SubjectAccessReview;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
}

/**
 * 
 */
export class AuthorizationV1Api extends runtime.BaseAPI {

    /**
     * create a LocalSubjectAccessReview
     */
    async createAuthorizationV1NamespacedLocalSubjectAccessReviewRaw(requestParameters: CreateAuthorizationV1NamespacedLocalSubjectAccessReviewRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApiAuthorizationV1LocalSubjectAccessReview>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling createAuthorizationV1NamespacedLocalSubjectAccessReview.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createAuthorizationV1NamespacedLocalSubjectAccessReview.');
        }

        const queryParameters: any = {};

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/authorization.k8s.io/v1/namespaces/{namespace}/localsubjectaccessreviews`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiAuthorizationV1LocalSubjectAccessReviewToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiAuthorizationV1LocalSubjectAccessReviewFromJSON(jsonValue));
    }

    /**
     * create a LocalSubjectAccessReview
     */
    async createAuthorizationV1NamespacedLocalSubjectAccessReview(requestParameters: CreateAuthorizationV1NamespacedLocalSubjectAccessReviewRequest, initOverrides?: RequestInit): Promise<IoK8sApiAuthorizationV1LocalSubjectAccessReview> {
        const response = await this.createAuthorizationV1NamespacedLocalSubjectAccessReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * create a SelfSubjectAccessReview
     */
    async createAuthorizationV1SelfSubjectAccessReviewRaw(requestParameters: CreateAuthorizationV1SelfSubjectAccessReviewRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApiAuthorizationV1SelfSubjectAccessReview>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createAuthorizationV1SelfSubjectAccessReview.');
        }

        const queryParameters: any = {};

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/authorization.k8s.io/v1/selfsubjectaccessreviews`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiAuthorizationV1SelfSubjectAccessReviewToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiAuthorizationV1SelfSubjectAccessReviewFromJSON(jsonValue));
    }

    /**
     * create a SelfSubjectAccessReview
     */
    async createAuthorizationV1SelfSubjectAccessReview(requestParameters: CreateAuthorizationV1SelfSubjectAccessReviewRequest, initOverrides?: RequestInit): Promise<IoK8sApiAuthorizationV1SelfSubjectAccessReview> {
        const response = await this.createAuthorizationV1SelfSubjectAccessReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * create a SelfSubjectRulesReview
     */
    async createAuthorizationV1SelfSubjectRulesReviewRaw(requestParameters: CreateAuthorizationV1SelfSubjectRulesReviewRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApiAuthorizationV1SelfSubjectRulesReview>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createAuthorizationV1SelfSubjectRulesReview.');
        }

        const queryParameters: any = {};

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/authorization.k8s.io/v1/selfsubjectrulesreviews`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiAuthorizationV1SelfSubjectRulesReviewToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiAuthorizationV1SelfSubjectRulesReviewFromJSON(jsonValue));
    }

    /**
     * create a SelfSubjectRulesReview
     */
    async createAuthorizationV1SelfSubjectRulesReview(requestParameters: CreateAuthorizationV1SelfSubjectRulesReviewRequest, initOverrides?: RequestInit): Promise<IoK8sApiAuthorizationV1SelfSubjectRulesReview> {
        const response = await this.createAuthorizationV1SelfSubjectRulesReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * create a SubjectAccessReview
     */
    async createAuthorizationV1SubjectAccessReviewRaw(requestParameters: CreateAuthorizationV1SubjectAccessReviewRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApiAuthorizationV1SubjectAccessReview>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createAuthorizationV1SubjectAccessReview.');
        }

        const queryParameters: any = {};

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/authorization.k8s.io/v1/subjectaccessreviews`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiAuthorizationV1SubjectAccessReviewToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiAuthorizationV1SubjectAccessReviewFromJSON(jsonValue));
    }

    /**
     * create a SubjectAccessReview
     */
    async createAuthorizationV1SubjectAccessReview(requestParameters: CreateAuthorizationV1SubjectAccessReviewRequest, initOverrides?: RequestInit): Promise<IoK8sApiAuthorizationV1SubjectAccessReview> {
        const response = await this.createAuthorizationV1SubjectAccessReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get available resources
     */
    async getAuthorizationV1APIResourcesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIResourceList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/authorization.k8s.io/v1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON(jsonValue));
    }

    /**
     * get available resources
     */
    async getAuthorizationV1APIResources(initOverrides?: RequestInit): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
        const response = await this.getAuthorizationV1APIResourcesRaw(initOverrides);
        return await response.value();
    }

}
