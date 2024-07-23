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
    IoK8sApiNodeV1RuntimeClass,
    IoK8sApiNodeV1RuntimeClassFromJSON,
    IoK8sApiNodeV1RuntimeClassToJSON,
    IoK8sApiNodeV1RuntimeClassList,
    IoK8sApiNodeV1RuntimeClassListFromJSON,
    IoK8sApiNodeV1RuntimeClassListToJSON,
    IoK8sApimachineryPkgApisMetaV1APIResourceList,
    IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON,
    IoK8sApimachineryPkgApisMetaV1APIResourceListToJSON,
    IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    IoK8sApimachineryPkgApisMetaV1DeleteOptionsFromJSON,
    IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON,
    IoK8sApimachineryPkgApisMetaV1Status,
    IoK8sApimachineryPkgApisMetaV1StatusFromJSON,
    IoK8sApimachineryPkgApisMetaV1StatusToJSON,
    IoK8sApimachineryPkgApisMetaV1WatchEvent,
    IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON,
    IoK8sApimachineryPkgApisMetaV1WatchEventToJSON,
} from '../models';

export interface CreateNodeV1RuntimeClassRequest {
    body: IoK8sApiNodeV1RuntimeClass;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

export interface DeleteNodeV1CollectionRuntimeClassRequest {
    pretty?: string;
    _continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteNodeV1RuntimeClassRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface ListNodeV1RuntimeClassRequest {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
}

export interface PatchNodeV1RuntimeClassRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    force?: boolean;
}

export interface ReadNodeV1RuntimeClassRequest {
    name: string;
    pretty?: string;
}

export interface ReplaceNodeV1RuntimeClassRequest {
    name: string;
    body: IoK8sApiNodeV1RuntimeClass;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
}

export interface WatchNodeV1RuntimeClassRequest {
    name: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
}

export interface WatchNodeV1RuntimeClassListRequest {
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    resourceVersionMatch?: string;
    sendInitialEvents?: boolean;
    timeoutSeconds?: number;
    watch?: boolean;
}

/**
 * 
 */
export class NodeV1Api extends runtime.BaseAPI {

    /**
     * create a RuntimeClass
     */
    async createNodeV1RuntimeClassRaw(requestParameters: CreateNodeV1RuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApiNodeV1RuntimeClass>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createNodeV1RuntimeClass.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1/runtimeclasses`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiNodeV1RuntimeClassToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiNodeV1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * create a RuntimeClass
     */
    async createNodeV1RuntimeClass(requestParameters: CreateNodeV1RuntimeClassRequest, initOverrides?: RequestInit): Promise<IoK8sApiNodeV1RuntimeClass> {
        const response = await this.createNodeV1RuntimeClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete collection of RuntimeClass
     */
    async deleteNodeV1CollectionRuntimeClassRaw(requestParameters: DeleteNodeV1CollectionRuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.gracePeriodSeconds !== undefined) {
            queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.orphanDependents !== undefined) {
            queryParameters['orphanDependents'] = requestParameters.orphanDependents;
        }

        if (requestParameters.propagationPolicy !== undefined) {
            queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.resourceVersionMatch !== undefined) {
            queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
        }

        if (requestParameters.sendInitialEvents !== undefined) {
            queryParameters['sendInitialEvents'] = requestParameters.sendInitialEvents;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1/runtimeclasses`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of RuntimeClass
     */
    async deleteNodeV1CollectionRuntimeClass(requestParameters: DeleteNodeV1CollectionRuntimeClassRequest, initOverrides?: RequestInit): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
        const response = await this.deleteNodeV1CollectionRuntimeClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete a RuntimeClass
     */
    async deleteNodeV1RuntimeClassRaw(requestParameters: DeleteNodeV1RuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteNodeV1RuntimeClass.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.gracePeriodSeconds !== undefined) {
            queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
        }

        if (requestParameters.orphanDependents !== undefined) {
            queryParameters['orphanDependents'] = requestParameters.orphanDependents;
        }

        if (requestParameters.propagationPolicy !== undefined) {
            queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1StatusFromJSON(jsonValue));
    }

    /**
     * delete a RuntimeClass
     */
    async deleteNodeV1RuntimeClass(requestParameters: DeleteNodeV1RuntimeClassRequest, initOverrides?: RequestInit): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
        const response = await this.deleteNodeV1RuntimeClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get available resources
     */
    async getNodeV1APIResourcesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIResourceList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON(jsonValue));
    }

    /**
     * get available resources
     */
    async getNodeV1APIResources(initOverrides?: RequestInit): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
        const response = await this.getNodeV1APIResourcesRaw(initOverrides);
        return await response.value();
    }

    /**
     * list or watch objects of kind RuntimeClass
     */
    async listNodeV1RuntimeClassRaw(requestParameters: ListNodeV1RuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApiNodeV1RuntimeClassList>> {
        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.resourceVersionMatch !== undefined) {
            queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
        }

        if (requestParameters.sendInitialEvents !== undefined) {
            queryParameters['sendInitialEvents'] = requestParameters.sendInitialEvents;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1/runtimeclasses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiNodeV1RuntimeClassListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind RuntimeClass
     */
    async listNodeV1RuntimeClass(requestParameters: ListNodeV1RuntimeClassRequest, initOverrides?: RequestInit): Promise<IoK8sApiNodeV1RuntimeClassList> {
        const response = await this.listNodeV1RuntimeClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * partially update the specified RuntimeClass
     */
    async patchNodeV1RuntimeClassRaw(requestParameters: PatchNodeV1RuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApiNodeV1RuntimeClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchNodeV1RuntimeClass.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchNodeV1RuntimeClass.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        if (requestParameters.force !== undefined) {
            queryParameters['force'] = requestParameters.force;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiNodeV1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * partially update the specified RuntimeClass
     */
    async patchNodeV1RuntimeClass(requestParameters: PatchNodeV1RuntimeClassRequest, initOverrides?: RequestInit): Promise<IoK8sApiNodeV1RuntimeClass> {
        const response = await this.patchNodeV1RuntimeClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * read the specified RuntimeClass
     */
    async readNodeV1RuntimeClassRaw(requestParameters: ReadNodeV1RuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApiNodeV1RuntimeClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readNodeV1RuntimeClass.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiNodeV1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * read the specified RuntimeClass
     */
    async readNodeV1RuntimeClass(requestParameters: ReadNodeV1RuntimeClassRequest, initOverrides?: RequestInit): Promise<IoK8sApiNodeV1RuntimeClass> {
        const response = await this.readNodeV1RuntimeClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * replace the specified RuntimeClass
     */
    async replaceNodeV1RuntimeClassRaw(requestParameters: ReplaceNodeV1RuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApiNodeV1RuntimeClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceNodeV1RuntimeClass.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceNodeV1RuntimeClass.');
        }

        const queryParameters: any = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiNodeV1RuntimeClassToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiNodeV1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * replace the specified RuntimeClass
     */
    async replaceNodeV1RuntimeClass(requestParameters: ReplaceNodeV1RuntimeClassRequest, initOverrides?: RequestInit): Promise<IoK8sApiNodeV1RuntimeClass> {
        const response = await this.replaceNodeV1RuntimeClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * watch changes to an object of kind RuntimeClass. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
     */
    async watchNodeV1RuntimeClassRaw(requestParameters: WatchNodeV1RuntimeClassRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling watchNodeV1RuntimeClass.');
        }

        const queryParameters: any = {};

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.resourceVersionMatch !== undefined) {
            queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
        }

        if (requestParameters.sendInitialEvents !== undefined) {
            queryParameters['sendInitialEvents'] = requestParameters.sendInitialEvents;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1/watch/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue));
    }

    /**
     * watch changes to an object of kind RuntimeClass. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
     */
    async watchNodeV1RuntimeClass(requestParameters: WatchNodeV1RuntimeClassRequest, initOverrides?: RequestInit): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const response = await this.watchNodeV1RuntimeClassRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * watch individual changes to a list of RuntimeClass. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    async watchNodeV1RuntimeClassListRaw(requestParameters: WatchNodeV1RuntimeClassListRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
        const queryParameters: any = {};

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.resourceVersionMatch !== undefined) {
            queryParameters['resourceVersionMatch'] = requestParameters.resourceVersionMatch;
        }

        if (requestParameters.sendInitialEvents !== undefined) {
            queryParameters['sendInitialEvents'] = requestParameters.sendInitialEvents;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1/watch/runtimeclasses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue));
    }

    /**
     * watch individual changes to a list of RuntimeClass. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    async watchNodeV1RuntimeClassList(requestParameters: WatchNodeV1RuntimeClassListRequest, initOverrides?: RequestInit): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const response = await this.watchNodeV1RuntimeClassListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
