import type { IoK8sApiStoragemigrationV1alpha1MigrationCondition } from './IoK8sApiStoragemigrationV1alpha1MigrationCondition';

export interface IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationStatus {
  /** The latest available observations of the migration's current state. */
  conditions?: IoK8sApiStoragemigrationV1alpha1MigrationCondition[];
  /** ResourceVersion to compare with the GC cache for performing the migration. This is the current resource version of given group, version and resource when kube-controller-manager first observes this StorageVersionMigration resource. */
  resourceVersion?: string;
}
