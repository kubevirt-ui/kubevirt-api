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

/**
 * VirtualMachineInstanceFileSystem represents guest os disk
 * @export
 * @interface V1VirtualMachineInstanceFileSystem
 */
export interface V1VirtualMachineInstanceFileSystem {
  /**
   *
   * @type {string}
   * @memberof V1VirtualMachineInstanceFileSystem
   */
  diskName: string;
  /**
   *
   * @type {string}
   * @memberof V1VirtualMachineInstanceFileSystem
   */
  fileSystemType: string;
  /**
   *
   * @type {string}
   * @memberof V1VirtualMachineInstanceFileSystem
   */
  mountPoint: string;
  /**
   *
   * @type {number}
   * @memberof V1VirtualMachineInstanceFileSystem
   */
  totalBytes: number;
  /**
   *
   * @type {number}
   * @memberof V1VirtualMachineInstanceFileSystem
   */
  usedBytes: number;
}

export function V1VirtualMachineInstanceFileSystemFromJSON(
  json: any,
): V1VirtualMachineInstanceFileSystem {
  return V1VirtualMachineInstanceFileSystemFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceFileSystemFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1VirtualMachineInstanceFileSystem {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    diskName: json['diskName'],
    fileSystemType: json['fileSystemType'],
    mountPoint: json['mountPoint'],
    totalBytes: json['totalBytes'],
    usedBytes: json['usedBytes'],
  };
}

export function V1VirtualMachineInstanceFileSystemToJSON(
  value?: V1VirtualMachineInstanceFileSystem | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    diskName: value.diskName,
    fileSystemType: value.fileSystemType,
    mountPoint: value.mountPoint,
    totalBytes: value.totalBytes,
    usedBytes: value.usedBytes,
  };
}
