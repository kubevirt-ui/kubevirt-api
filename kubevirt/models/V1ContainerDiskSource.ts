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
 * Represents a docker image with an embedded disk.
 * @export
 * @interface V1ContainerDiskSource
 */
export interface V1ContainerDiskSource {
  /**
   * Image is the name of the image with the embedded disk.
   * @type {string}
   * @memberof V1ContainerDiskSource
   */
  image: string;
  /**
   * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
   *
   * Possible enum values:
   *  - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
   *  - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
   *  - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
   * @type {string}
   * @memberof V1ContainerDiskSource
   */
  imagePullPolicy?: V1ContainerDiskSourceImagePullPolicyEnum;
  /**
   * ImagePullSecret is the name of the Docker registry secret required to pull the image. The secret must already exist.
   * @type {string}
   * @memberof V1ContainerDiskSource
   */
  imagePullSecret?: string;
  /**
   * Path defines the path to disk file in the container
   * @type {string}
   * @memberof V1ContainerDiskSource
   */
  path?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum V1ContainerDiskSourceImagePullPolicyEnum {
  Always = 'Always',
  IfNotPresent = 'IfNotPresent',
  Never = 'Never',
}

export function V1ContainerDiskSourceFromJSON(json: any): V1ContainerDiskSource {
  return V1ContainerDiskSourceFromJSONTyped(json, false);
}

export function V1ContainerDiskSourceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1ContainerDiskSource {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    image: json['image'],
    imagePullPolicy: !exists(json, 'imagePullPolicy') ? undefined : json['imagePullPolicy'],
    imagePullSecret: !exists(json, 'imagePullSecret') ? undefined : json['imagePullSecret'],
    path: !exists(json, 'path') ? undefined : json['path'],
  };
}

export function V1ContainerDiskSourceToJSON(value?: V1ContainerDiskSource | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    image: value.image,
    imagePullPolicy: value.imagePullPolicy,
    imagePullSecret: value.imagePullSecret,
    path: value.path,
  };
}
