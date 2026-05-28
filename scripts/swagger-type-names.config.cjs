/**
 * swagger-typescript-api uses startCase() on schema names, which mis-cases K8s
 * API paths (IoK8S vs IoK8s, V1Beta1 vs V1beta1). This hook fixes names at
 * generation time so data-contracts.ts is already correct before split.
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

module.exports = {
  hooks: {
    onFormatTypeName: (formattedName) => normalizeKubeTypeName(formattedName),
  },
};
