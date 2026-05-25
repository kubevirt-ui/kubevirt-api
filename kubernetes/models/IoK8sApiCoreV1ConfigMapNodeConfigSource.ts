export interface IoK8sApiCoreV1ConfigMapNodeConfigSource {
  /** KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases. */
  kubeletConfigKey: string;
  /** Name is the metadata.name of the referenced ConfigMap. This field is required in all cases. */
  name: string;
  /** Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases. */
  namespace: string;
  /** ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status. */
  resourceVersion?: string;
  /** UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status. */
  uid?: string;
}
