import type { V1beta1DataSourceRefSourceDataSource } from './V1beta1DataSourceRefSourceDataSource';
import type { V1beta1DataVolumeSourcePVC } from './V1beta1DataVolumeSourcePVC';
import type { V1beta1DataVolumeSourceSnapshot } from './V1beta1DataVolumeSourceSnapshot';

export interface V1beta1DataSourceSource {
  /** DataSourceRefSourceDataSource serves as a reference to another DataSource Can be resolved into a DataVolumeSourcePVC or a DataVolumeSourceSnapshot The maximum depth of a reference chain may not exceed 1. */
  dataSource?: V1beta1DataSourceRefSourceDataSource;
  /** DataVolumeSourcePVC provides the parameters to create a Data Volume from an existing PVC */
  pvc?: V1beta1DataVolumeSourcePVC;
  /** DataVolumeSourceSnapshot provides the parameters to create a Data Volume from an existing VolumeSnapshot */
  snapshot?: V1beta1DataVolumeSourceSnapshot;
}
