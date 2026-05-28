import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames';

export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus {
  /** acceptedNames are the names that are actually being used to serve discovery. They may be different than the names in spec. */
  acceptedNames?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames;
  /** conditions indicate state for particular aspects of a CustomResourceDefinition */
  conditions?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition[];
  /** storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list. */
  storedVersions?: string[];
}
