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
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionFromJSON,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListFromJSON,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionToJSON,
  IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON,
  IoK8sApimachineryPkgApisMetaV1DeleteOptions,
  IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON,
  IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1StatusFromJSON,
  IoK8sApimachineryPkgApisMetaV1WatchEvent,
  IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON,
} from '../models';

export interface CreateApiextensionsV1CustomResourceDefinitionRequest {
  body: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
}

export interface DeleteApiextensionsV1CollectionCustomResourceDefinitionRequest {
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
  timeoutSeconds?: number;
  body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteApiextensionsV1CustomResourceDefinitionRequest {
  name: string;
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface ListApiextensionsV1CustomResourceDefinitionRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  _continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}

export interface PatchApiextensionsV1CustomResourceDefinitionRequest {
  name: string;
  body: object;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}

export interface PatchApiextensionsV1CustomResourceDefinitionStatusRequest {
  name: string;
  body: object;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}

export interface ReadApiextensionsV1CustomResourceDefinitionRequest {
  name: string;
  pretty?: string;
}

export interface ReadApiextensionsV1CustomResourceDefinitionStatusRequest {
  name: string;
  pretty?: string;
}

export interface ReplaceApiextensionsV1CustomResourceDefinitionRequest {
  name: string;
  body: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
}

export interface ReplaceApiextensionsV1CustomResourceDefinitionStatusRequest {
  name: string;
  body: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
}

export interface WatchApiextensionsV1CustomResourceDefinitionRequest {
  name: string;
  allowWatchBookmarks?: boolean;
  _continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}

export interface WatchApiextensionsV1CustomResourceDefinitionListRequest {
  allowWatchBookmarks?: boolean;
  _continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}

/**
 *
 */
export class ApiextensionsV1Api extends runtime.BaseAPI {
  /**
   * create a CustomResourceDefinition
   */
  async createApiextensionsV1CustomResourceDefinitionRaw(
    requestParameters: CreateApiextensionsV1CustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<
    runtime.ApiResponse<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition>
  > {
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling createApiextensionsV1CustomResourceDefinition.',
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
        path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionToJSON(
          requestParameters.body,
        ),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionFromJSON(jsonValue),
    );
  }

  /**
   * create a CustomResourceDefinition
   */
  async createApiextensionsV1CustomResourceDefinition(
    requestParameters: CreateApiextensionsV1CustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
    const response = await this.createApiextensionsV1CustomResourceDefinitionRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * delete collection of CustomResourceDefinition
   */
  async deleteApiextensionsV1CollectionCustomResourceDefinitionRaw(
    requestParameters: DeleteApiextensionsV1CollectionCustomResourceDefinitionRequest,
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
        path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`,
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
   * delete collection of CustomResourceDefinition
   */
  async deleteApiextensionsV1CollectionCustomResourceDefinition(
    requestParameters: DeleteApiextensionsV1CollectionCustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const response = await this.deleteApiextensionsV1CollectionCustomResourceDefinitionRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * delete a CustomResourceDefinition
   */
  async deleteApiextensionsV1CustomResourceDefinitionRaw(
    requestParameters: DeleteApiextensionsV1CustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling deleteApiextensionsV1CustomResourceDefinition.',
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
        path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`.replace(
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
   * delete a CustomResourceDefinition
   */
  async deleteApiextensionsV1CustomResourceDefinition(
    requestParameters: DeleteApiextensionsV1CustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const response = await this.deleteApiextensionsV1CustomResourceDefinitionRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * get available resources
   */
  async getApiextensionsV1APIResourcesRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIResourceList>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['authorization'] = this.configuration.apiKey('authorization'); // BearerToken authentication
    }

    const response = await this.request(
      {
        path: `/apis/apiextensions.k8s.io/v1/`,
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
  async getApiextensionsV1APIResources(
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const response = await this.getApiextensionsV1APIResourcesRaw(initOverrides);
    return await response.value();
  }

  /**
   * list or watch objects of kind CustomResourceDefinition
   */
  async listApiextensionsV1CustomResourceDefinitionRaw(
    requestParameters: ListApiextensionsV1CustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<
    runtime.ApiResponse<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList>
  > {
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
        path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListFromJSON(
        jsonValue,
      ),
    );
  }

  /**
   * list or watch objects of kind CustomResourceDefinition
   */
  async listApiextensionsV1CustomResourceDefinition(
    requestParameters: ListApiextensionsV1CustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList> {
    const response = await this.listApiextensionsV1CustomResourceDefinitionRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * partially update the specified CustomResourceDefinition
   */
  async patchApiextensionsV1CustomResourceDefinitionRaw(
    requestParameters: PatchApiextensionsV1CustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<
    runtime.ApiResponse<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition>
  > {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling patchApiextensionsV1CustomResourceDefinition.',
      );
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling patchApiextensionsV1CustomResourceDefinition.',
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
        path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`.replace(
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
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionFromJSON(jsonValue),
    );
  }

  /**
   * partially update the specified CustomResourceDefinition
   */
  async patchApiextensionsV1CustomResourceDefinition(
    requestParameters: PatchApiextensionsV1CustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
    const response = await this.patchApiextensionsV1CustomResourceDefinitionRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * partially update status of the specified CustomResourceDefinition
   */
  async patchApiextensionsV1CustomResourceDefinitionStatusRaw(
    requestParameters: PatchApiextensionsV1CustomResourceDefinitionStatusRequest,
    initOverrides?: RequestInit,
  ): Promise<
    runtime.ApiResponse<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition>
  > {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling patchApiextensionsV1CustomResourceDefinitionStatus.',
      );
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling patchApiextensionsV1CustomResourceDefinitionStatus.',
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
        path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`.replace(
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
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionFromJSON(jsonValue),
    );
  }

  /**
   * partially update status of the specified CustomResourceDefinition
   */
  async patchApiextensionsV1CustomResourceDefinitionStatus(
    requestParameters: PatchApiextensionsV1CustomResourceDefinitionStatusRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
    const response = await this.patchApiextensionsV1CustomResourceDefinitionStatusRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * read the specified CustomResourceDefinition
   */
  async readApiextensionsV1CustomResourceDefinitionRaw(
    requestParameters: ReadApiextensionsV1CustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<
    runtime.ApiResponse<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition>
  > {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling readApiextensionsV1CustomResourceDefinition.',
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
        path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`.replace(
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
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionFromJSON(jsonValue),
    );
  }

  /**
   * read the specified CustomResourceDefinition
   */
  async readApiextensionsV1CustomResourceDefinition(
    requestParameters: ReadApiextensionsV1CustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
    const response = await this.readApiextensionsV1CustomResourceDefinitionRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * read status of the specified CustomResourceDefinition
   */
  async readApiextensionsV1CustomResourceDefinitionStatusRaw(
    requestParameters: ReadApiextensionsV1CustomResourceDefinitionStatusRequest,
    initOverrides?: RequestInit,
  ): Promise<
    runtime.ApiResponse<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition>
  > {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling readApiextensionsV1CustomResourceDefinitionStatus.',
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
        path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`.replace(
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
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionFromJSON(jsonValue),
    );
  }

  /**
   * read status of the specified CustomResourceDefinition
   */
  async readApiextensionsV1CustomResourceDefinitionStatus(
    requestParameters: ReadApiextensionsV1CustomResourceDefinitionStatusRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
    const response = await this.readApiextensionsV1CustomResourceDefinitionStatusRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * replace the specified CustomResourceDefinition
   */
  async replaceApiextensionsV1CustomResourceDefinitionRaw(
    requestParameters: ReplaceApiextensionsV1CustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<
    runtime.ApiResponse<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition>
  > {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling replaceApiextensionsV1CustomResourceDefinition.',
      );
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling replaceApiextensionsV1CustomResourceDefinition.',
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
        path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`.replace(
          `{${'name'}}`,
          encodeURIComponent(String(requestParameters.name)),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionToJSON(
          requestParameters.body,
        ),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionFromJSON(jsonValue),
    );
  }

  /**
   * replace the specified CustomResourceDefinition
   */
  async replaceApiextensionsV1CustomResourceDefinition(
    requestParameters: ReplaceApiextensionsV1CustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
    const response = await this.replaceApiextensionsV1CustomResourceDefinitionRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * replace status of the specified CustomResourceDefinition
   */
  async replaceApiextensionsV1CustomResourceDefinitionStatusRaw(
    requestParameters: ReplaceApiextensionsV1CustomResourceDefinitionStatusRequest,
    initOverrides?: RequestInit,
  ): Promise<
    runtime.ApiResponse<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition>
  > {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling replaceApiextensionsV1CustomResourceDefinitionStatus.',
      );
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling replaceApiextensionsV1CustomResourceDefinitionStatus.',
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
        path: `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`.replace(
          `{${'name'}}`,
          encodeURIComponent(String(requestParameters.name)),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionToJSON(
          requestParameters.body,
        ),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionFromJSON(jsonValue),
    );
  }

  /**
   * replace status of the specified CustomResourceDefinition
   */
  async replaceApiextensionsV1CustomResourceDefinitionStatus(
    requestParameters: ReplaceApiextensionsV1CustomResourceDefinitionStatusRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition> {
    const response = await this.replaceApiextensionsV1CustomResourceDefinitionStatusRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * watch changes to an object of kind CustomResourceDefinition. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
   */
  async watchApiextensionsV1CustomResourceDefinitionRaw(
    requestParameters: WatchApiextensionsV1CustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling watchApiextensionsV1CustomResourceDefinition.',
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
        path: `/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/{name}`.replace(
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
   * watch changes to an object of kind CustomResourceDefinition. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
   */
  async watchApiextensionsV1CustomResourceDefinition(
    requestParameters: WatchApiextensionsV1CustomResourceDefinitionRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const response = await this.watchApiextensionsV1CustomResourceDefinitionRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * watch individual changes to a list of CustomResourceDefinition. deprecated: use the \'watch\' parameter with a list operation instead.
   */
  async watchApiextensionsV1CustomResourceDefinitionListRaw(
    requestParameters: WatchApiextensionsV1CustomResourceDefinitionListRequest,
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
        path: `/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions`,
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
   * watch individual changes to a list of CustomResourceDefinition. deprecated: use the \'watch\' parameter with a list operation instead.
   */
  async watchApiextensionsV1CustomResourceDefinitionList(
    requestParameters: WatchApiextensionsV1CustomResourceDefinitionListRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const response = await this.watchApiextensionsV1CustomResourceDefinitionListRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}