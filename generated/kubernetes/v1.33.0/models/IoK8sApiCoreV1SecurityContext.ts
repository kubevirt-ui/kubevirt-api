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
    IoK8sApiCoreV1AppArmorProfile,
    IoK8sApiCoreV1AppArmorProfileFromJSON,
    IoK8sApiCoreV1AppArmorProfileFromJSONTyped,
    IoK8sApiCoreV1AppArmorProfileToJSON,
    IoK8sApiCoreV1Capabilities,
    IoK8sApiCoreV1CapabilitiesFromJSON,
    IoK8sApiCoreV1CapabilitiesFromJSONTyped,
    IoK8sApiCoreV1CapabilitiesToJSON,
    IoK8sApiCoreV1SELinuxOptions,
    IoK8sApiCoreV1SELinuxOptionsFromJSON,
    IoK8sApiCoreV1SELinuxOptionsFromJSONTyped,
    IoK8sApiCoreV1SELinuxOptionsToJSON,
    IoK8sApiCoreV1SeccompProfile,
    IoK8sApiCoreV1SeccompProfileFromJSON,
    IoK8sApiCoreV1SeccompProfileFromJSONTyped,
    IoK8sApiCoreV1SeccompProfileToJSON,
    IoK8sApiCoreV1WindowsSecurityContextOptions,
    IoK8sApiCoreV1WindowsSecurityContextOptionsFromJSON,
    IoK8sApiCoreV1WindowsSecurityContextOptionsFromJSONTyped,
    IoK8sApiCoreV1WindowsSecurityContextOptionsToJSON,
} from './';

/**
 * SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
 * @export
 * @interface IoK8sApiCoreV1SecurityContext
 */
export interface IoK8sApiCoreV1SecurityContext {
    /**
     * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1SecurityContext
     */
    allowPrivilegeEscalation?: boolean;
    /**
     * 
     * @type {IoK8sApiCoreV1AppArmorProfile}
     * @memberof IoK8sApiCoreV1SecurityContext
     */
    appArmorProfile?: IoK8sApiCoreV1AppArmorProfile;
    /**
     * 
     * @type {IoK8sApiCoreV1Capabilities}
     * @memberof IoK8sApiCoreV1SecurityContext
     */
    capabilities?: IoK8sApiCoreV1Capabilities;
    /**
     * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1SecurityContext
     */
    privileged?: boolean;
    /**
     * procMount denotes the type of proc mount to use for the containers. The default value is Default which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
     * @type {string}
     * @memberof IoK8sApiCoreV1SecurityContext
     */
    procMount?: string;
    /**
     * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1SecurityContext
     */
    readOnlyRootFilesystem?: boolean;
    /**
     * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
     * @type {number}
     * @memberof IoK8sApiCoreV1SecurityContext
     */
    runAsGroup?: number;
    /**
     * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1SecurityContext
     */
    runAsNonRoot?: boolean;
    /**
     * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
     * @type {number}
     * @memberof IoK8sApiCoreV1SecurityContext
     */
    runAsUser?: number;
    /**
     * 
     * @type {IoK8sApiCoreV1SELinuxOptions}
     * @memberof IoK8sApiCoreV1SecurityContext
     */
    seLinuxOptions?: IoK8sApiCoreV1SELinuxOptions;
    /**
     * 
     * @type {IoK8sApiCoreV1SeccompProfile}
     * @memberof IoK8sApiCoreV1SecurityContext
     */
    seccompProfile?: IoK8sApiCoreV1SeccompProfile;
    /**
     * 
     * @type {IoK8sApiCoreV1WindowsSecurityContextOptions}
     * @memberof IoK8sApiCoreV1SecurityContext
     */
    windowsOptions?: IoK8sApiCoreV1WindowsSecurityContextOptions;
}

export function IoK8sApiCoreV1SecurityContextFromJSON(json: any): IoK8sApiCoreV1SecurityContext {
    return IoK8sApiCoreV1SecurityContextFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1SecurityContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1SecurityContext {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowPrivilegeEscalation': !exists(json, 'allowPrivilegeEscalation') ? undefined : json['allowPrivilegeEscalation'],
        'appArmorProfile': !exists(json, 'appArmorProfile') ? undefined : IoK8sApiCoreV1AppArmorProfileFromJSON(json['appArmorProfile']),
        'capabilities': !exists(json, 'capabilities') ? undefined : IoK8sApiCoreV1CapabilitiesFromJSON(json['capabilities']),
        'privileged': !exists(json, 'privileged') ? undefined : json['privileged'],
        'procMount': !exists(json, 'procMount') ? undefined : json['procMount'],
        'readOnlyRootFilesystem': !exists(json, 'readOnlyRootFilesystem') ? undefined : json['readOnlyRootFilesystem'],
        'runAsGroup': !exists(json, 'runAsGroup') ? undefined : json['runAsGroup'],
        'runAsNonRoot': !exists(json, 'runAsNonRoot') ? undefined : json['runAsNonRoot'],
        'runAsUser': !exists(json, 'runAsUser') ? undefined : json['runAsUser'],
        'seLinuxOptions': !exists(json, 'seLinuxOptions') ? undefined : IoK8sApiCoreV1SELinuxOptionsFromJSON(json['seLinuxOptions']),
        'seccompProfile': !exists(json, 'seccompProfile') ? undefined : IoK8sApiCoreV1SeccompProfileFromJSON(json['seccompProfile']),
        'windowsOptions': !exists(json, 'windowsOptions') ? undefined : IoK8sApiCoreV1WindowsSecurityContextOptionsFromJSON(json['windowsOptions']),
    };
}

export function IoK8sApiCoreV1SecurityContextToJSON(value?: IoK8sApiCoreV1SecurityContext | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowPrivilegeEscalation': value.allowPrivilegeEscalation,
        'appArmorProfile': IoK8sApiCoreV1AppArmorProfileToJSON(value.appArmorProfile),
        'capabilities': IoK8sApiCoreV1CapabilitiesToJSON(value.capabilities),
        'privileged': value.privileged,
        'procMount': value.procMount,
        'readOnlyRootFilesystem': value.readOnlyRootFilesystem,
        'runAsGroup': value.runAsGroup,
        'runAsNonRoot': value.runAsNonRoot,
        'runAsUser': value.runAsUser,
        'seLinuxOptions': IoK8sApiCoreV1SELinuxOptionsToJSON(value.seLinuxOptions),
        'seccompProfile': IoK8sApiCoreV1SeccompProfileToJSON(value.seccompProfile),
        'windowsOptions': IoK8sApiCoreV1WindowsSecurityContextOptionsToJSON(value.windowsOptions),
    };
}

