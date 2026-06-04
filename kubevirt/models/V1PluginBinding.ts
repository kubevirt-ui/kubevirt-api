/** PluginBinding represents a binding implemented in a plugin. */
export interface V1PluginBinding {
  /**
   * Name references to the binding name as denined in the kubevirt CR. version: 1alphav1
   * @default ""
   */
  name: string;
}
