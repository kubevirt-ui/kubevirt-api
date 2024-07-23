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
 * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
 * @export
 * @interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames
 */
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames {
    /**
     * categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.
     * @type {Array<string>}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames
     */
    categories?: Array<string>;
    /**
     * kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames
     */
    kind: string;
    /**
     * listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames
     */
    listKind?: string;
    /**
     * plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames
     */
    plural: string;
    /**
     * shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.
     * @type {Array<string>}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames
     */
    shortNames?: Array<string>;
    /**
     * singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames
     */
    singular?: string;
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesFromJSON(json: any): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames {
    return IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesFromJSONTyped(json, false);
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
        'kind': json['kind'],
        'listKind': !exists(json, 'listKind') ? undefined : json['listKind'],
        'plural': json['plural'],
        'shortNames': !exists(json, 'shortNames') ? undefined : json['shortNames'],
        'singular': !exists(json, 'singular') ? undefined : json['singular'],
    };
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesToJSON(value?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'categories': value.categories,
        'kind': value.kind,
        'listKind': value.listKind,
        'plural': value.plural,
        'shortNames': value.shortNames,
        'singular': value.singular,
    };
}

