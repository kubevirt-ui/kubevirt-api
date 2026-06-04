import type { V1LabelSelector } from './V1LabelSelector';
import type { V1TypedLocalObjectReference } from './V1TypedLocalObjectReference';
import type { V1TypedObjectReference } from './V1TypedObjectReference';
import type { V1VolumeResourceRequirements } from './V1VolumeResourceRequirements';
import type { V1beta1StorageSpecAccessModesEnum } from './V1beta1StorageSpecAccessModesEnum';
import type { V1beta1StorageSpecVolumeModeEnum } from './V1beta1StorageSpecVolumeModeEnum';

/** StorageSpec defines the Storage type specification */
export interface V1beta1StorageSpec {
  /** AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 */
  accessModes?: V1beta1StorageSpecAccessModesEnum[];
  /** This field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) * An existing custom resource that implements data population (Alpha) In order to use custom resource types that implement data population, the AnyVolumeDataSource feature gate must be enabled. If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field. */
  dataSource?: V1TypedLocalObjectReference;
  /** Specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: * While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. */
  dataSourceRef?: V1TypedObjectReference;
  /**
   * Resources represents the minimum resources the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
   * @default {}
   */
  resources?: V1VolumeResourceRequirements;
  /** A label query over volumes to consider for binding. */
  selector?: V1LabelSelector;
  /** Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1 */
  storageClassName?: string;
  /**
   * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
   *
   * Possible enum values:
   *  - `"Block"` means the volume will not be formatted with a filesystem and will remain a raw block device.
   *  - `"Filesystem"` means the volume will be or is formatted with a filesystem.
   *  - `"FromStorageProfile"` means the volume mode will be auto selected by CDI according to a matching StorageProfile
   */
  volumeMode?: V1beta1StorageSpecVolumeModeEnum;
  /** VolumeName is the binding reference to the PersistentVolume backing this claim. */
  volumeName?: string;
}
