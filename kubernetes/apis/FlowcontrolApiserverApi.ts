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
  IoK8sApimachineryPkgApisMetaV1APIGroup,
  IoK8sApimachineryPkgApisMetaV1APIGroupFromJSON,
} from '../models';

/**
 *
 */
export class FlowcontrolApiserverApi extends runtime.BaseAPI {
  /**
   * get information of a group
   */
  async getFlowcontrolApiserverAPIGroupRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIGroup>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['authorization'] = this.configuration.apiKey('authorization'); // BearerToken authentication
    }

    const response = await this.request(
      {
        path: `/apis/flowcontrol.apiserver.k8s.io/`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      IoK8sApimachineryPkgApisMetaV1APIGroupFromJSON(jsonValue),
    );
  }

  /**
   * get information of a group
   */
  async getFlowcontrolApiserverAPIGroup(
    initOverrides?: RequestInit,
  ): Promise<IoK8sApimachineryPkgApisMetaV1APIGroup> {
    const response = await this.getFlowcontrolApiserverAPIGroupRaw(initOverrides);
    return await response.value();
  }
}
