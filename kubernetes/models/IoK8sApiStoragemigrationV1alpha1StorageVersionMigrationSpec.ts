import type { IoK8sApiStoragemigrationV1alpha1GroupVersionResource } from './IoK8sApiStoragemigrationV1alpha1GroupVersionResource';

export interface IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpec {
  /** The token used in the list options to get the next chunk of objects to migrate. When the .status.conditions indicates the migration is "Running", users can use this token to check the progress of the migration. */
  continueToken?: string;
  /** The resource that is being migrated. The migrator sends requests to the endpoint serving the resource. Immutable. */
  resource: IoK8sApiStoragemigrationV1alpha1GroupVersionResource;
}
