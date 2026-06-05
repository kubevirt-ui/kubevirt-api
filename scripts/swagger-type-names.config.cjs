/**
 * swagger-typescript-api custom config (passed via --custom-config).
 *
 * Must be CommonJS (module.exports) — ESM default exports are not applied reliably.
 */

function normalizeKubeTypeName(name) {
  return name
    .replaceAll('IoK8SKube', 'IoK8sKube')
    .replaceAll('IoK8S', 'IoK8s')
    .replaceAll('K8SIo', 'K8sIo')
    .replaceAll('V1Alpha', 'V1alpha')
    .replaceAll('V1Beta', 'V1beta');
}

/**
 * K8s OpenAPI uses type: string + format: byte for base64 payloads in JSON
 * (Secret.data, ConfigMap.binaryData, etc.). swagger-typescript-api defaults
 * those to Blob; map them to string to match API JSON and the prior generator.
 */
function kubeByteFormatsAsString(defaults) {
  const stringConstructs =
    typeof defaults.string === 'object' && defaults.string !== null
      ? defaults.string
      : { $default: defaults.string ?? 'string' };

  return {
    ...defaults,
    string: {
      ...stringConstructs,
      byte: 'string',
      binary: 'string',
    },
  };
}

module.exports = {
  hooks: {
    onFormatTypeName: (formattedName) => normalizeKubeTypeName(formattedName),
  },
  primitiveTypeConstructs: kubeByteFormatsAsString,
};
