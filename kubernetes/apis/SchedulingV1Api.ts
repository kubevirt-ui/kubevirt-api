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
  IoK8sApiSchedulingV1PriorityClass,
  IoK8sApiSchedulingV1PriorityClassFromJSON,
  IoK8sApiSchedulingV1PriorityClassList,
  IoK8sApiSchedulingV1PriorityClassListFromJSON,
  IoK8sApiSchedulingV1PriorityClassToJSON,
  IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON,
  IoK8sApimachineryPkgApisMetaV1DeleteOptions,
  IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON,
  IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1StatusFromJSON,
  IoK8sApimachineryPkgApisMetaV1WatchEvent,
  IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON,
} from '../models';

export interface CreateSchedulingV1PriorityClassRequest {
  body: IoK8sApiSchedulingV1PriorityClass;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
}

export interface DeleteSchedulingV1CollectionPriorityClassRequest {
  pretty?: string;
  _continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  ignoreStoreReadErrorWithClusterBreakingPotential?: boolean;
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

export interface DeleteSchedulingV1PriorityClassRequest {
  name: string;
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  ignoreStoreReadErrorWithClusterBreakingPotential?: boolean;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface ListSchedulingV1PriorityClassRequest {
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

export interface PatchSchedulingV1PriorityClassRequest {
  name: string;
  body: object;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}

export interface ReadSchedulingV1PriorityClassRequest {
  name: string;
  pretty?: string;
}

export interface ReplaceSchedulingV1PriorityClassRequest {
  name: string;
  body: IoK8sApiSchedulingV1PriorityClass;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
}

export interface WatchSchedulingV1PriorityClassRequest {
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

export interface WatchSchedulingV1PriorityClassListRequest {
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
export class SchedulingV1Api extends runtime.BaseAPI {
  /**
   * create a PriorityClass
   */
  async createSchedulingV1PriorityClassRaw(
    requestParameters: CreateSchedulingV1PriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApiSchedulingV1PriorityClass>> {
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling createSchedulingV1PriorityClass.',
      );
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
      headerParameters['authorization'] = this.configuration.apiKey('authorization'); // BearerToken authentication
    }

    const response = await this.request(
      {
        path: `/apis/scheduling.k8s.io/v1/priorityclasses`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: IoK8sApiSchedulingV1PriorityClassToJSON(requestParameters.body),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiSchedulingV1PriorityClassFromJSON(jsonValue),
    );
  }

  /**
   * create a PriorityClass
   */
  async createSchedulingV1PriorityClass(
    requestParameters: CreateSchedulingV1PriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiSchedulingV1PriorityClass> {
    const response = await this.createSchedulingV1PriorityClassRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * delete collection of PriorityClass
   */
  async deleteSchedulingV1CollectionPriorityClassRaw(
    requestParameters: DeleteSchedulingV1CollectionPriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
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

    if (requestParameters.ignoreStoreReadErrorWithClusterBreakingPotential !== undefined) {
      queryParameters['ignoreStoreReadErrorWithClusterBreakingPotential'] =
        requestParameters.ignoreStoreReadErrorWithClusterBreakingPotential;
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
      headerParameters['authorization'] = this.configuration.apiKey('authorization'); // BearerToken authentication
    }

    const response = await this.request(
      {
        path: `/apis/scheduling.k8s.io/v1/priorityclasses`,
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
        body: IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(requestParameters.body),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApimachineryPkgApisMetaV1StatusFromJSON(jsonValue),
    );
  }

  /**
   * delete collection of PriorityClass
   */
  async deleteSchedulingV1CollectionPriorityClass(
    requestParameters: DeleteSchedulingV1CollectionPriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const response = await this.deleteSchedulingV1CollectionPriorityClassRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * delete a PriorityClass
   */
  async deleteSchedulingV1PriorityClassRaw(
    requestParameters: DeleteSchedulingV1PriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling deleteSchedulingV1PriorityClass.',
      );
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

    if (requestParameters.ignoreStoreReadErrorWithClusterBreakingPotential !== undefined) {
      queryParameters['ignoreStoreReadErrorWithClusterBreakingPotential'] =
        requestParameters.ignoreStoreReadErrorWithClusterBreakingPotential;
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
      headerParameters['authorization'] = this.configuration.apiKey('authorization'); // BearerToken authentication
    }

    const response = await this.request(
      {
        path: `/apis/scheduling.k8s.io/v1/priorityclasses/{name}`.replace(
          `{${'name'}}`,
          encodeURIComponent(String(requestParameters.name)),
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
        body: IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(requestParameters.body),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApimachineryPkgApisMetaV1StatusFromJSON(jsonValue),
    );
  }

  /**
   * delete a PriorityClass
   */
  async deleteSchedulingV1PriorityClass(
    requestParameters: DeleteSchedulingV1PriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const response = await this.deleteSchedulingV1PriorityClassRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * get available resources
   */
  async getSchedulingV1APIResourcesRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIResourceList>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['authorization'] = this.configuration.apiKey('authorization'); // BearerToken authentication
    }

    const response = await this.request(
      {
        path: `/apis/scheduling.k8s.io/v1/`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON(jsonValue),
    );
  }

  /**
   * get available resources
   */
  async getSchedulingV1APIResources(
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const response = await this.getSchedulingV1APIResourcesRaw(initOverrides);
    return await response.value();
  }

  /**
   * list or watch objects of kind PriorityClass
   */
  async listSchedulingV1PriorityClassRaw(
    requestParameters: ListSchedulingV1PriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApiSchedulingV1PriorityClassList>> {
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
      headerParameters['authorization'] = this.configuration.apiKey('authorization'); // BearerToken authentication
    }

    const response = await this.request(
      {
        path: `/apis/scheduling.k8s.io/v1/priorityclasses`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiSchedulingV1PriorityClassListFromJSON(jsonValue),
    );
  }

  /**
   * list or watch objects of kind PriorityClass
   */
  async listSchedulingV1PriorityClass(
    requestParameters: ListSchedulingV1PriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiSchedulingV1PriorityClassList> {
    const response = await this.listSchedulingV1PriorityClassRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * partially update the specified PriorityClass
   */
  async patchSchedulingV1PriorityClassRaw(
    requestParameters: PatchSchedulingV1PriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApiSchedulingV1PriorityClass>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling patchSchedulingV1PriorityClass.',
      );
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling patchSchedulingV1PriorityClass.',
      );
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
      headerParameters['authorization'] = this.configuration.apiKey('authorization'); // BearerToken authentication
    }

    const response = await this.request(
      {
        path: `/apis/scheduling.k8s.io/v1/priorityclasses/{name}`.replace(
          `{${'name'}}`,
          encodeURIComponent(String(requestParameters.name)),
        ),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.body as any,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiSchedulingV1PriorityClassFromJSON(jsonValue),
    );
  }

  /**
   * partially update the specified PriorityClass
   */
  async patchSchedulingV1PriorityClass(
    requestParameters: PatchSchedulingV1PriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiSchedulingV1PriorityClass> {
    const response = await this.patchSchedulingV1PriorityClassRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * read the specified PriorityClass
   */
  async readSchedulingV1PriorityClassRaw(
    requestParameters: ReadSchedulingV1PriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApiSchedulingV1PriorityClass>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling readSchedulingV1PriorityClass.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['authorization'] = this.configuration.apiKey('authorization'); // BearerToken authentication
    }

    const response = await this.request(
      {
        path: `/apis/scheduling.k8s.io/v1/priorityclasses/{name}`.replace(
          `{${'name'}}`,
          encodeURIComponent(String(requestParameters.name)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiSchedulingV1PriorityClassFromJSON(jsonValue),
    );
  }

  /**
   * read the specified PriorityClass
   */
  async readSchedulingV1PriorityClass(
    requestParameters: ReadSchedulingV1PriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiSchedulingV1PriorityClass> {
    const response = await this.readSchedulingV1PriorityClassRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * replace the specified PriorityClass
   */
  async replaceSchedulingV1PriorityClassRaw(
    requestParameters: ReplaceSchedulingV1PriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApiSchedulingV1PriorityClass>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling replaceSchedulingV1PriorityClass.',
      );
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling replaceSchedulingV1PriorityClass.',
      );
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
      headerParameters['authorization'] = this.configuration.apiKey('authorization'); // BearerToken authentication
    }

    const response = await this.request(
      {
        path: `/apis/scheduling.k8s.io/v1/priorityclasses/{name}`.replace(
          `{${'name'}}`,
          encodeURIComponent(String(requestParameters.name)),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: IoK8sApiSchedulingV1PriorityClassToJSON(requestParameters.body),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiSchedulingV1PriorityClassFromJSON(jsonValue),
    );
  }

  /**
   * replace the specified PriorityClass
   */
  async replaceSchedulingV1PriorityClass(
    requestParameters: ReplaceSchedulingV1PriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiSchedulingV1PriorityClass> {
    const response = await this.replaceSchedulingV1PriorityClassRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * watch changes to an object of kind PriorityClass. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
   */
  async watchSchedulingV1PriorityClassRaw(
    requestParameters: WatchSchedulingV1PriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling watchSchedulingV1PriorityClass.',
      );
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
      headerParameters['authorization'] = this.configuration.apiKey('authorization'); // BearerToken authentication
    }

    const response = await this.request(
      {
        path: `/apis/scheduling.k8s.io/v1/watch/priorityclasses/{name}`.replace(
          `{${'name'}}`,
          encodeURIComponent(String(requestParameters.name)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue),
    );
  }

  /**
   * watch changes to an object of kind PriorityClass. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
   */
  async watchSchedulingV1PriorityClass(
    requestParameters: WatchSchedulingV1PriorityClassRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const response = await this.watchSchedulingV1PriorityClassRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * watch individual changes to a list of PriorityClass. deprecated: use the \'watch\' parameter with a list operation instead.
   */
  async watchSchedulingV1PriorityClassListRaw(
    requestParameters: WatchSchedulingV1PriorityClassListRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
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
      headerParameters['authorization'] = this.configuration.apiKey('authorization'); // BearerToken authentication
    }

    const response = await this.request(
      {
        path: `/apis/scheduling.k8s.io/v1/watch/priorityclasses`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue),
    );
  }

  /**
   * watch individual changes to a list of PriorityClass. deprecated: use the \'watch\' parameter with a list operation instead.
   */
  async watchSchedulingV1PriorityClassList(
    requestParameters: WatchSchedulingV1PriorityClassListRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const response = await this.watchSchedulingV1PriorityClassListRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
