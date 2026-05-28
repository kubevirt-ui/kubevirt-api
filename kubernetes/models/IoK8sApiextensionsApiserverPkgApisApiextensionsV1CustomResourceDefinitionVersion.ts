import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableField } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableField';

export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion {
  /** additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used. */
  additionalPrinterColumns?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition[];
  /** deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false. */
  deprecated?: boolean;
  /** deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists. */
  deprecationWarning?: string;
  /** name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true. */
  name: string;
  /** schema describes the schema used for validation, pruning, and defaulting of this version of the custom resource. */
  schema?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation;
  /** selectableFields specifies paths to fields that may be used as field selectors. A maximum of 8 selectable fields are allowed. See https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors */
  selectableFields?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableField[];
  /** served is a flag enabling/disabling this version from being served via REST APIs */
  served: boolean;
  /** storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true. */
  storage: boolean;
  /** subresources specify what subresources this version of the defined custom resource have. */
  subresources?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources;
}
