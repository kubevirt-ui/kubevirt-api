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

import { exists } from '../runtime';
/**
 *
 * @export
 * @interface V1VirtualMachineInstanceMigrationSourceState
 */
export interface V1VirtualMachineInstanceMigrationSourceState {
  /**
   * The name of the domain on the source libvirt domain
   * @type {string}
   * @memberof V1VirtualMachineInstanceMigrationSourceState
   */
  domainName?: string;
  /**
   * Namespace used in the name of the source libvirt domain. Can be used to find and modify paths in the domain
   * @type {string}
   * @memberof V1VirtualMachineInstanceMigrationSourceState
   */
  domainNamespace?: string;
  /**
   * The Source VirtualMachineInstanceMigration object associated with this migration
   * @type {string}
   * @memberof V1VirtualMachineInstanceMigrationSourceState
   */
  migrationUID?: string;
  /**
   * The source node that the VMI originated on
   * @type {string}
   * @memberof V1VirtualMachineInstanceMigrationSourceState
   */
  node?: string;
  /**
   * Node selectors needed by the target to start the receiving pod.
   * @type {{ [key: string]: string; }}
   * @memberof V1VirtualMachineInstanceMigrationSourceState
   */
  nodeSelectors?: { [key: string]: string };
  /**
   * If the VMI being migrated uses persistent features (backend-storage), its source PVC name is saved here
   * @type {string}
   * @memberof V1VirtualMachineInstanceMigrationSourceState
   */
  persistentStatePVCName?: string;
  /**
   * The source pod that the VMI is originated on
   * @type {string}
   * @memberof V1VirtualMachineInstanceMigrationSourceState
   */
  pod?: string;
  /**
   * SELinuxContext is the actual SELinux context of the pod
   * @type {string}
   * @memberof V1VirtualMachineInstanceMigrationSourceState
   */
  selinuxContext?: string;
  /**
   * The ip address/fqdn:port combination to use to synchronize the VMI with the target.
   * @type {string}
   * @memberof V1VirtualMachineInstanceMigrationSourceState
   */
  syncAddress?: string;
  /**
   * VirtualMachineInstanceUID is the UID of the target virtual machine instance
   * @type {string}
   * @memberof V1VirtualMachineInstanceMigrationSourceState
   */
  virtualMachineInstanceUID?: string;
}

export function V1VirtualMachineInstanceMigrationSourceStateFromJSON(
  json: any,
): V1VirtualMachineInstanceMigrationSourceState {
  return V1VirtualMachineInstanceMigrationSourceStateFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceMigrationSourceStateFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1VirtualMachineInstanceMigrationSourceState {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    domainName: !exists(json, 'domainName') ? undefined : json['domainName'],
    domainNamespace: !exists(json, 'domainNamespace') ? undefined : json['domainNamespace'],
    migrationUID: !exists(json, 'migrationUID') ? undefined : json['migrationUID'],
    node: !exists(json, 'node') ? undefined : json['node'],
    nodeSelectors: !exists(json, 'nodeSelectors') ? undefined : json['nodeSelectors'],
    persistentStatePVCName: !exists(json, 'persistentStatePVCName')
      ? undefined
      : json['persistentStatePVCName'],
    pod: !exists(json, 'pod') ? undefined : json['pod'],
    selinuxContext: !exists(json, 'selinuxContext') ? undefined : json['selinuxContext'],
    syncAddress: !exists(json, 'syncAddress') ? undefined : json['syncAddress'],
    virtualMachineInstanceUID: !exists(json, 'virtualMachineInstanceUID')
      ? undefined
      : json['virtualMachineInstanceUID'],
  };
}

export function V1VirtualMachineInstanceMigrationSourceStateToJSON(
  value?: V1VirtualMachineInstanceMigrationSourceState | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    domainName: value.domainName,
    domainNamespace: value.domainNamespace,
    migrationUID: value.migrationUID,
    node: value.node,
    nodeSelectors: value.nodeSelectors,
    persistentStatePVCName: value.persistentStatePVCName,
    pod: value.pod,
    selinuxContext: value.selinuxContext,
    syncAddress: value.syncAddress,
    virtualMachineInstanceUID: value.virtualMachineInstanceUID,
  };
}
