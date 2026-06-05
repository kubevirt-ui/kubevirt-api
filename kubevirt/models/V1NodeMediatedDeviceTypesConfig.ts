/** NodeMediatedDeviceTypesConfig holds information about MDEV types to be defined in a specific node that matches the NodeSelector field. */
export interface V1NodeMediatedDeviceTypesConfig {
  mediatedDeviceTypes?: string[];
  /** Deprecated. Use mediatedDeviceTypes instead. */
  mediatedDevicesTypes?: string[];
  /** NodeSelector is a selector which must be true for the vmi to fit on a node. Selector which must match a node's labels for the vmi to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/ */
  nodeSelector: Record<string, string>;
}
