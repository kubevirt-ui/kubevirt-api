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
    IoK8sApiResourceV1alpha2NamedResourcesIntSlice,
    IoK8sApiResourceV1alpha2NamedResourcesIntSliceFromJSON,
    IoK8sApiResourceV1alpha2NamedResourcesIntSliceFromJSONTyped,
    IoK8sApiResourceV1alpha2NamedResourcesIntSliceToJSON,
    IoK8sApiResourceV1alpha2NamedResourcesStringSlice,
    IoK8sApiResourceV1alpha2NamedResourcesStringSliceFromJSON,
    IoK8sApiResourceV1alpha2NamedResourcesStringSliceFromJSONTyped,
    IoK8sApiResourceV1alpha2NamedResourcesStringSliceToJSON,
} from './';

/**
 * NamedResourcesAttribute is a combination of an attribute name and its value.
 * @export
 * @interface IoK8sApiResourceV1alpha2NamedResourcesAttribute
 */
export interface IoK8sApiResourceV1alpha2NamedResourcesAttribute {
    /**
     * BoolValue is a true/false value.
     * @type {boolean}
     * @memberof IoK8sApiResourceV1alpha2NamedResourcesAttribute
     */
    bool?: boolean;
    /**
     * IntValue is a 64-bit integer.
     * @type {number}
     * @memberof IoK8sApiResourceV1alpha2NamedResourcesAttribute
     */
    _int?: number;
    /**
     * 
     * @type {IoK8sApiResourceV1alpha2NamedResourcesIntSlice}
     * @memberof IoK8sApiResourceV1alpha2NamedResourcesAttribute
     */
    intSlice?: IoK8sApiResourceV1alpha2NamedResourcesIntSlice;
    /**
     * Name is unique identifier among all resource instances managed by the driver on the node. It must be a DNS subdomain.
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2NamedResourcesAttribute
     */
    name: string;
    /**
     * Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.
     * 
     * The serialization format is:
     * 
     * ``` <quantity>        ::= <signedNumber><suffix>
     * 
     * 	(Note that <suffix> may be empty, from the "" case in <decimalSI>.)
     * 
     * <digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
     * 
     * 	(International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
     * 
     * <decimalSI>       ::= m | "" | k | M | G | T | P | E
     * 
     * 	(Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
     * 
     * <decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber> ```
     * 
     * No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.
     * 
     * When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.
     * 
     * Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
     * 
     * - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible.
     * 
     * The sign will be omitted unless the number is negative.
     * 
     * Examples:
     * 
     * - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi"
     * 
     * Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.
     * 
     * Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)
     * 
     * This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2NamedResourcesAttribute
     */
    quantity?: string;
    /**
     * StringValue is a string.
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2NamedResourcesAttribute
     */
    string?: string;
    /**
     * 
     * @type {IoK8sApiResourceV1alpha2NamedResourcesStringSlice}
     * @memberof IoK8sApiResourceV1alpha2NamedResourcesAttribute
     */
    stringSlice?: IoK8sApiResourceV1alpha2NamedResourcesStringSlice;
    /**
     * VersionValue is a semantic version according to semver.org spec 2.0.0.
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2NamedResourcesAttribute
     */
    version?: string;
}

export function IoK8sApiResourceV1alpha2NamedResourcesAttributeFromJSON(json: any): IoK8sApiResourceV1alpha2NamedResourcesAttribute {
    return IoK8sApiResourceV1alpha2NamedResourcesAttributeFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2NamedResourcesAttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiResourceV1alpha2NamedResourcesAttribute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bool': !exists(json, 'bool') ? undefined : json['bool'],
        '_int': !exists(json, 'int') ? undefined : json['int'],
        'intSlice': !exists(json, 'intSlice') ? undefined : IoK8sApiResourceV1alpha2NamedResourcesIntSliceFromJSON(json['intSlice']),
        'name': json['name'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'string': !exists(json, 'string') ? undefined : json['string'],
        'stringSlice': !exists(json, 'stringSlice') ? undefined : IoK8sApiResourceV1alpha2NamedResourcesStringSliceFromJSON(json['stringSlice']),
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function IoK8sApiResourceV1alpha2NamedResourcesAttributeToJSON(value?: IoK8sApiResourceV1alpha2NamedResourcesAttribute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bool': value.bool,
        'int': value._int,
        'intSlice': IoK8sApiResourceV1alpha2NamedResourcesIntSliceToJSON(value.intSlice),
        'name': value.name,
        'quantity': value.quantity,
        'string': value.string,
        'stringSlice': IoK8sApiResourceV1alpha2NamedResourcesStringSliceToJSON(value.stringSlice),
        'version': value.version,
    };
}

