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
    IoK8sApiCoreV1SELinuxOptions,
    IoK8sApiCoreV1SELinuxOptionsFromJSON,
    IoK8sApiCoreV1SELinuxOptionsFromJSONTyped,
    IoK8sApiCoreV1SELinuxOptionsToJSON,
    IoK8sApiCoreV1SeccompProfile,
    IoK8sApiCoreV1SeccompProfileFromJSON,
    IoK8sApiCoreV1SeccompProfileFromJSONTyped,
    IoK8sApiCoreV1SeccompProfileToJSON,
    IoK8sApiCoreV1Sysctl,
    IoK8sApiCoreV1SysctlFromJSON,
    IoK8sApiCoreV1SysctlFromJSONTyped,
    IoK8sApiCoreV1SysctlToJSON,
    IoK8sApiCoreV1WindowsSecurityContextOptions,
    IoK8sApiCoreV1WindowsSecurityContextOptionsFromJSON,
    IoK8sApiCoreV1WindowsSecurityContextOptionsFromJSONTyped,
    IoK8sApiCoreV1WindowsSecurityContextOptionsToJSON,
} from './';

/**
 * PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
 * @export
 * @interface IoK8sApiCoreV1PodSecurityContext
 */
export interface IoK8sApiCoreV1PodSecurityContext {
    /**
     * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:
     * 
     * 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----
     * 
     * If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
     * @type {number}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    fsGroup?: number;
    /**
     * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used. Note that this field cannot be set when spec.os.name is windows.
     * @type {string}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    fsGroupChangePolicy?: string;
    /**
     * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
     * @type {number}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    runAsGroup?: number;
    /**
     * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    runAsNonRoot?: boolean;
    /**
     * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
     * @type {number}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    runAsUser?: number;
    /**
     * 
     * @type {IoK8sApiCoreV1SELinuxOptions}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    seLinuxOptions?: IoK8sApiCoreV1SELinuxOptions;
    /**
     * 
     * @type {IoK8sApiCoreV1SeccompProfile}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    seccompProfile?: IoK8sApiCoreV1SeccompProfile;
    /**
     * A list of groups applied to the first process run in each container, in addition to the container's primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
     * @type {Array<number>}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    supplementalGroups?: Array<number>;
    /**
     * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
     * @type {Array<IoK8sApiCoreV1Sysctl>}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    sysctls?: Array<IoK8sApiCoreV1Sysctl>;
    /**
     * 
     * @type {IoK8sApiCoreV1WindowsSecurityContextOptions}
     * @memberof IoK8sApiCoreV1PodSecurityContext
     */
    windowsOptions?: IoK8sApiCoreV1WindowsSecurityContextOptions;
}

export function IoK8sApiCoreV1PodSecurityContextFromJSON(json: any): IoK8sApiCoreV1PodSecurityContext {
    return IoK8sApiCoreV1PodSecurityContextFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PodSecurityContextFromJSONTyped(json: any, _ignoreDiscriminator: boolean): IoK8sApiCoreV1PodSecurityContext {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fsGroup': !exists(json, 'fsGroup') ? undefined : json['fsGroup'],
        'fsGroupChangePolicy': !exists(json, 'fsGroupChangePolicy') ? undefined : json['fsGroupChangePolicy'],
        'runAsGroup': !exists(json, 'runAsGroup') ? undefined : json['runAsGroup'],
        'runAsNonRoot': !exists(json, 'runAsNonRoot') ? undefined : json['runAsNonRoot'],
        'runAsUser': !exists(json, 'runAsUser') ? undefined : json['runAsUser'],
        'seLinuxOptions': !exists(json, 'seLinuxOptions') ? undefined : IoK8sApiCoreV1SELinuxOptionsFromJSON(json['seLinuxOptions']),
        'seccompProfile': !exists(json, 'seccompProfile') ? undefined : IoK8sApiCoreV1SeccompProfileFromJSON(json['seccompProfile']),
        'supplementalGroups': !exists(json, 'supplementalGroups') ? undefined : json['supplementalGroups'],
        'sysctls': !exists(json, 'sysctls') ? undefined : ((json['sysctls'] as Array<any>).map(IoK8sApiCoreV1SysctlFromJSON)),
        'windowsOptions': !exists(json, 'windowsOptions') ? undefined : IoK8sApiCoreV1WindowsSecurityContextOptionsFromJSON(json['windowsOptions']),
    };
}

export function IoK8sApiCoreV1PodSecurityContextToJSON(value?: IoK8sApiCoreV1PodSecurityContext | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fsGroup': value.fsGroup,
        'fsGroupChangePolicy': value.fsGroupChangePolicy,
        'runAsGroup': value.runAsGroup,
        'runAsNonRoot': value.runAsNonRoot,
        'runAsUser': value.runAsUser,
        'seLinuxOptions': IoK8sApiCoreV1SELinuxOptionsToJSON(value.seLinuxOptions),
        'seccompProfile': IoK8sApiCoreV1SeccompProfileToJSON(value.seccompProfile),
        'supplementalGroups': value.supplementalGroups,
        'sysctls': value.sysctls === undefined ? undefined : ((value.sysctls as Array<any>).map(IoK8sApiCoreV1SysctlToJSON)),
        'windowsOptions': IoK8sApiCoreV1WindowsSecurityContextOptionsToJSON(value.windowsOptions),
    };
}

