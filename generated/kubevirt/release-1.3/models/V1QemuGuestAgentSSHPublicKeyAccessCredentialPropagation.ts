/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation
 */
export interface V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation {
    /**
     * Users represents a list of guest users that should have the ssh public keys added to their authorized_keys file.
     * @type {Array<string>}
     * @memberof V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation
     */
    users: Array<string>;
}

export function V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagationFromJSON(json: any): V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation {
    return V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagationFromJSONTyped(json, false);
}

export function V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'users': json['users'],
    };
}

export function V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagationToJSON(value?: V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'users': value.users,
    };
}
