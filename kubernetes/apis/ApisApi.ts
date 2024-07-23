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
    IoK8sApimachineryPkgApisMetaV1APIGroupList,
    IoK8sApimachineryPkgApisMetaV1APIGroupListFromJSON,
    IoK8sApimachineryPkgApisMetaV1APIGroupListToJSON,
} from '../models';

/**
 * 
 */
export class ApisApi extends runtime.BaseAPI {

    /**
     * get available API versions
     */
    async getAPIVersionsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIGroupList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1APIGroupListFromJSON(jsonValue));
    }

    /**
     * get available API versions
     */
    async getAPIVersions(initOverrides?: RequestInit): Promise<IoK8sApimachineryPkgApisMetaV1APIGroupList> {
        const response = await this.getAPIVersionsRaw(initOverrides);
        return await response.value();
    }

}
