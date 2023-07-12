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
import {
  V1beta1DataVolumeSourceHTTP,
  V1beta1DataVolumeSourceHTTPFromJSON,
  V1beta1DataVolumeSourceHTTPToJSON,
  V1beta1DataVolumeSourceImageIO,
  V1beta1DataVolumeSourceImageIOFromJSON,
  V1beta1DataVolumeSourceImageIOToJSON,
  V1beta1DataVolumeSourcePVC,
  V1beta1DataVolumeSourcePVCFromJSON,
  V1beta1DataVolumeSourcePVCToJSON,
  V1beta1DataVolumeSourceRegistry,
  V1beta1DataVolumeSourceRegistryFromJSON,
  V1beta1DataVolumeSourceRegistryToJSON,
  V1beta1DataVolumeSourceS3,
  V1beta1DataVolumeSourceS3FromJSON,
  V1beta1DataVolumeSourceS3ToJSON,
  V1beta1DataVolumeSourceVDDK,
  V1beta1DataVolumeSourceVDDKFromJSON,
  V1beta1DataVolumeSourceVDDKToJSON,
} from './';

/**
 * DataVolumeSource represents the source for our Data Volume, this can be HTTP, Imageio, S3, Registry or an existing PVC
 * @export
 * @interface V1beta1DataVolumeSource
 */
export interface V1beta1DataVolumeSource {
  /**
   * DataVolumeBlankImage provides the parameters to create a new raw blank image for the PVC
   * @type {object}
   * @memberof V1beta1DataVolumeSource
   */
  blank?: object;
  /**
   *
   * @type {V1beta1DataVolumeSourceHTTP}
   * @memberof V1beta1DataVolumeSource
   */
  http?: V1beta1DataVolumeSourceHTTP;
  /**
   *
   * @type {V1beta1DataVolumeSourceImageIO}
   * @memberof V1beta1DataVolumeSource
   */
  imageio?: V1beta1DataVolumeSourceImageIO;
  /**
   *
   * @type {V1beta1DataVolumeSourcePVC}
   * @memberof V1beta1DataVolumeSource
   */
  pvc?: V1beta1DataVolumeSourcePVC;
  /**
   *
   * @type {V1beta1DataVolumeSourceRegistry}
   * @memberof V1beta1DataVolumeSource
   */
  registry?: V1beta1DataVolumeSourceRegistry;
  /**
   *
   * @type {V1beta1DataVolumeSourceS3}
   * @memberof V1beta1DataVolumeSource
   */
  s3?: V1beta1DataVolumeSourceS3;
  /**
   * DataVolumeSourceUpload provides the parameters to create a Data Volume by uploading the source
   * @type {object}
   * @memberof V1beta1DataVolumeSource
   */
  upload?: object;
  /**
   *
   * @type {V1beta1DataVolumeSourceVDDK}
   * @memberof V1beta1DataVolumeSource
   */
  vddk?: V1beta1DataVolumeSourceVDDK;
}

export function V1beta1DataVolumeSourceFromJSON(json: any): V1beta1DataVolumeSource {
  return V1beta1DataVolumeSourceFromJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1beta1DataVolumeSource {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    blank: !exists(json, 'blank') ? undefined : json['blank'],
    http: !exists(json, 'http') ? undefined : V1beta1DataVolumeSourceHTTPFromJSON(json['http']),
    imageio: !exists(json, 'imageio')
      ? undefined
      : V1beta1DataVolumeSourceImageIOFromJSON(json['imageio']),
    pvc: !exists(json, 'pvc') ? undefined : V1beta1DataVolumeSourcePVCFromJSON(json['pvc']),
    registry: !exists(json, 'registry')
      ? undefined
      : V1beta1DataVolumeSourceRegistryFromJSON(json['registry']),
    s3: !exists(json, 's3') ? undefined : V1beta1DataVolumeSourceS3FromJSON(json['s3']),
    upload: !exists(json, 'upload') ? undefined : json['upload'],
    vddk: !exists(json, 'vddk') ? undefined : V1beta1DataVolumeSourceVDDKFromJSON(json['vddk']),
  };
}

export function V1beta1DataVolumeSourceToJSON(value?: V1beta1DataVolumeSource | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    blank: value.blank,
    http: V1beta1DataVolumeSourceHTTPToJSON(value.http),
    imageio: V1beta1DataVolumeSourceImageIOToJSON(value.imageio),
    pvc: V1beta1DataVolumeSourcePVCToJSON(value.pvc),
    registry: V1beta1DataVolumeSourceRegistryToJSON(value.registry),
    s3: V1beta1DataVolumeSourceS3ToJSON(value.s3),
    upload: value.upload,
    vddk: V1beta1DataVolumeSourceVDDKToJSON(value.vddk),
  };
}
