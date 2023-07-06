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
  IoK8sApiEventsV1Event,
  IoK8sApiEventsV1EventFromJSON,
  IoK8sApiEventsV1EventList,
  IoK8sApiEventsV1EventListFromJSON,
  IoK8sApiEventsV1EventToJSON,
  IoK8sApimachineryPkgApisMetaV1APIResourceList,
  IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON,
  IoK8sApimachineryPkgApisMetaV1DeleteOptions,
  IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON,
  IoK8sApimachineryPkgApisMetaV1Status,
  IoK8sApimachineryPkgApisMetaV1StatusFromJSON,
  IoK8sApimachineryPkgApisMetaV1WatchEvent,
  IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON,
} from '../models';

export interface CreateEventsV1NamespacedEventRequest {
  namespace: string;
  body: IoK8sApiEventsV1Event;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
}

export interface DeleteEventsV1CollectionNamespacedEventRequest {
  namespace: string;
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

export interface DeleteEventsV1NamespacedEventRequest {
  name: string;
  namespace: string;
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface ListEventsV1EventForAllNamespacesRequest {
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

export interface ListEventsV1NamespacedEventRequest {
  namespace: string;
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

export interface PatchEventsV1NamespacedEventRequest {
  name: string;
  namespace: string;
  body: object;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
  force?: boolean;
}

export interface ReadEventsV1NamespacedEventRequest {
  name: string;
  namespace: string;
  pretty?: string;
}

export interface ReplaceEventsV1NamespacedEventRequest {
  name: string;
  namespace: string;
  body: IoK8sApiEventsV1Event;
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  fieldValidation?: string;
}

export interface WatchEventsV1EventListForAllNamespacesRequest {
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

export interface WatchEventsV1NamespacedEventRequest {
  name: string;
  namespace: string;
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

export interface WatchEventsV1NamespacedEventListRequest {
  namespace: string;
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
export class EventsV1Api extends runtime.BaseAPI {
  /**
   * create an Event
   */
  async createEventsV1NamespacedEventRaw(
    requestParameters: CreateEventsV1NamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApiEventsV1Event>> {
    if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
      throw new runtime.RequiredError(
        'namespace',
        'Required parameter requestParameters.namespace was null or undefined when calling createEventsV1NamespacedEvent.',
      );
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling createEventsV1NamespacedEvent.',
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
        path: `/apis/events.k8s.io/v1/namespaces/{namespace}/events`.replace(
          `{${'namespace'}}`,
          encodeURIComponent(String(requestParameters.namespace)),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: IoK8sApiEventsV1EventToJSON(requestParameters.body),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiEventsV1EventFromJSON(jsonValue),
    );
  }

  /**
   * create an Event
   */
  async createEventsV1NamespacedEvent(
    requestParameters: CreateEventsV1NamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiEventsV1Event> {
    const response = await this.createEventsV1NamespacedEventRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * delete collection of Event
   */
  async deleteEventsV1CollectionNamespacedEventRaw(
    requestParameters: DeleteEventsV1CollectionNamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
    if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
      throw new runtime.RequiredError(
        'namespace',
        'Required parameter requestParameters.namespace was null or undefined when calling deleteEventsV1CollectionNamespacedEvent.',
      );
    }

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
      headerParameters['authorization'] = this.configuration.apiKey('authorization'); // BearerToken authentication
    }

    const response = await this.request(
      {
        path: `/apis/events.k8s.io/v1/namespaces/{namespace}/events`.replace(
          `{${'namespace'}}`,
          encodeURIComponent(String(requestParameters.namespace)),
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
   * delete collection of Event
   */
  async deleteEventsV1CollectionNamespacedEvent(
    requestParameters: DeleteEventsV1CollectionNamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const response = await this.deleteEventsV1CollectionNamespacedEventRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * delete an Event
   */
  async deleteEventsV1NamespacedEventRaw(
    requestParameters: DeleteEventsV1NamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling deleteEventsV1NamespacedEvent.',
      );
    }

    if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
      throw new runtime.RequiredError(
        'namespace',
        'Required parameter requestParameters.namespace was null or undefined when calling deleteEventsV1NamespacedEvent.',
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
        path: `/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}`
          .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
          .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
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
   * delete an Event
   */
  async deleteEventsV1NamespacedEvent(
    requestParameters: DeleteEventsV1NamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
    const response = await this.deleteEventsV1NamespacedEventRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * get available resources
   */
  async getEventsV1APIResourcesRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIResourceList>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['authorization'] = this.configuration.apiKey('authorization'); // BearerToken authentication
    }

    const response = await this.request(
      {
        path: `/apis/events.k8s.io/v1/`,
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
  async getEventsV1APIResources(
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
    const response = await this.getEventsV1APIResourcesRaw(initOverrides);
    return await response.value();
  }

  /**
   * list or watch objects of kind Event
   */
  async listEventsV1EventForAllNamespacesRaw(
    requestParameters: ListEventsV1EventForAllNamespacesRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApiEventsV1EventList>> {
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
        path: `/apis/events.k8s.io/v1/events`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiEventsV1EventListFromJSON(jsonValue),
    );
  }

  /**
   * list or watch objects of kind Event
   */
  async listEventsV1EventForAllNamespaces(
    requestParameters: ListEventsV1EventForAllNamespacesRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiEventsV1EventList> {
    const response = await this.listEventsV1EventForAllNamespacesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * list or watch objects of kind Event
   */
  async listEventsV1NamespacedEventRaw(
    requestParameters: ListEventsV1NamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApiEventsV1EventList>> {
    if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
      throw new runtime.RequiredError(
        'namespace',
        'Required parameter requestParameters.namespace was null or undefined when calling listEventsV1NamespacedEvent.',
      );
    }

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
        path: `/apis/events.k8s.io/v1/namespaces/{namespace}/events`.replace(
          `{${'namespace'}}`,
          encodeURIComponent(String(requestParameters.namespace)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiEventsV1EventListFromJSON(jsonValue),
    );
  }

  /**
   * list or watch objects of kind Event
   */
  async listEventsV1NamespacedEvent(
    requestParameters: ListEventsV1NamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiEventsV1EventList> {
    const response = await this.listEventsV1NamespacedEventRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * partially update the specified Event
   */
  async patchEventsV1NamespacedEventRaw(
    requestParameters: PatchEventsV1NamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApiEventsV1Event>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling patchEventsV1NamespacedEvent.',
      );
    }

    if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
      throw new runtime.RequiredError(
        'namespace',
        'Required parameter requestParameters.namespace was null or undefined when calling patchEventsV1NamespacedEvent.',
      );
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling patchEventsV1NamespacedEvent.',
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
        path: `/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}`
          .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
          .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.body as any,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiEventsV1EventFromJSON(jsonValue),
    );
  }

  /**
   * partially update the specified Event
   */
  async patchEventsV1NamespacedEvent(
    requestParameters: PatchEventsV1NamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiEventsV1Event> {
    const response = await this.patchEventsV1NamespacedEventRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * read the specified Event
   */
  async readEventsV1NamespacedEventRaw(
    requestParameters: ReadEventsV1NamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApiEventsV1Event>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling readEventsV1NamespacedEvent.',
      );
    }

    if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
      throw new runtime.RequiredError(
        'namespace',
        'Required parameter requestParameters.namespace was null or undefined when calling readEventsV1NamespacedEvent.',
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
        path: `/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}`
          .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
          .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiEventsV1EventFromJSON(jsonValue),
    );
  }

  /**
   * read the specified Event
   */
  async readEventsV1NamespacedEvent(
    requestParameters: ReadEventsV1NamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiEventsV1Event> {
    const response = await this.readEventsV1NamespacedEventRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * replace the specified Event
   */
  async replaceEventsV1NamespacedEventRaw(
    requestParameters: ReplaceEventsV1NamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApiEventsV1Event>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling replaceEventsV1NamespacedEvent.',
      );
    }

    if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
      throw new runtime.RequiredError(
        'namespace',
        'Required parameter requestParameters.namespace was null or undefined when calling replaceEventsV1NamespacedEvent.',
      );
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling replaceEventsV1NamespacedEvent.',
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
        path: `/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}`
          .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
          .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: IoK8sApiEventsV1EventToJSON(requestParameters.body),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApiEventsV1EventFromJSON(jsonValue),
    );
  }

  /**
   * replace the specified Event
   */
  async replaceEventsV1NamespacedEvent(
    requestParameters: ReplaceEventsV1NamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApiEventsV1Event> {
    const response = await this.replaceEventsV1NamespacedEventRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * watch individual changes to a list of Event. deprecated: use the \'watch\' parameter with a list operation instead.
   */
  async watchEventsV1EventListForAllNamespacesRaw(
    requestParameters: WatchEventsV1EventListForAllNamespacesRequest,
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
        path: `/apis/events.k8s.io/v1/watch/events`,
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
   * watch individual changes to a list of Event. deprecated: use the \'watch\' parameter with a list operation instead.
   */
  async watchEventsV1EventListForAllNamespaces(
    requestParameters: WatchEventsV1EventListForAllNamespacesRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const response = await this.watchEventsV1EventListForAllNamespacesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * watch changes to an object of kind Event. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
   */
  async watchEventsV1NamespacedEventRaw(
    requestParameters: WatchEventsV1NamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new runtime.RequiredError(
        'name',
        'Required parameter requestParameters.name was null or undefined when calling watchEventsV1NamespacedEvent.',
      );
    }

    if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
      throw new runtime.RequiredError(
        'namespace',
        'Required parameter requestParameters.namespace was null or undefined when calling watchEventsV1NamespacedEvent.',
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
        path: `/apis/events.k8s.io/v1/watch/namespaces/{namespace}/events/{name}`
          .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
          .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
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
   * watch changes to an object of kind Event. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
   */
  async watchEventsV1NamespacedEvent(
    requestParameters: WatchEventsV1NamespacedEventRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const response = await this.watchEventsV1NamespacedEventRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * watch individual changes to a list of Event. deprecated: use the \'watch\' parameter with a list operation instead.
   */
  async watchEventsV1NamespacedEventListRaw(
    requestParameters: WatchEventsV1NamespacedEventListRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
    if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
      throw new runtime.RequiredError(
        'namespace',
        'Required parameter requestParameters.namespace was null or undefined when calling watchEventsV1NamespacedEventList.',
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
        path: `/apis/events.k8s.io/v1/watch/namespaces/{namespace}/events`.replace(
          `{${'namespace'}}`,
          encodeURIComponent(String(requestParameters.namespace)),
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
   * watch individual changes to a list of Event. deprecated: use the \'watch\' parameter with a list operation instead.
   */
  async watchEventsV1NamespacedEventList(
    requestParameters: WatchEventsV1NamespacedEventListRequest,
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
    const response = await this.watchEventsV1NamespacedEventListRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
