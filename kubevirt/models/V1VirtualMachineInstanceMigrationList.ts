import type { K8sIoApimachineryPkgApisMetaV1ListMeta } from './K8sIoApimachineryPkgApisMetaV1ListMeta';
import type { V1VirtualMachineInstanceMigration } from './V1VirtualMachineInstanceMigration';

/** VirtualMachineInstanceMigrationList is a list of VirtualMachineMigrations */
export interface V1VirtualMachineInstanceMigrationList {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  items: V1VirtualMachineInstanceMigration[];
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /**
   * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
   * @default {}
   */
  metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}
