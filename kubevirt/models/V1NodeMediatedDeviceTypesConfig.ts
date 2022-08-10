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
 * NodeMediatedDeviceTypesConfig holds information about MDEV types to be defined in a specifc node that matches the NodeSelector field.
 * @export
 * @interface V1NodeMediatedDeviceTypesConfig
 */
export interface V1NodeMediatedDeviceTypesConfig {
  /**
   *
   * @type {Array<string>}
   * @memberof V1NodeMediatedDeviceTypesConfig
   */
  mediatedDevicesTypes: Array<string>;
  /**
   * NodeSelector is a selector which must be true for the vmi to fit on a node. Selector which must match a node's labels for the vmi to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
   * @type {{ [key: string]: string; }}
   * @memberof V1NodeMediatedDeviceTypesConfig
   */
  nodeSelector: { [key: string]: string };
}

export function V1NodeMediatedDeviceTypesConfigFromJSON(
  json: any,
): V1NodeMediatedDeviceTypesConfig {
  return V1NodeMediatedDeviceTypesConfigFromJSONTyped(json, false);
}

export function V1NodeMediatedDeviceTypesConfigFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1NodeMediatedDeviceTypesConfig {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    mediatedDevicesTypes: json['mediatedDevicesTypes'],
    nodeSelector: json['nodeSelector'],
  };
}

export function V1NodeMediatedDeviceTypesConfigToJSON(
  value?: V1NodeMediatedDeviceTypesConfig | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    mediatedDevicesTypes: value.mediatedDevicesTypes,
    nodeSelector: value.nodeSelector,
  };
}
