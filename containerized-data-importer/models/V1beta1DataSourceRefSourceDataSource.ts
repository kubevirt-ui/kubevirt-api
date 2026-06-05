/** DataSourceRefSourceDataSource serves as a reference to another DataSource Can be resolved into a DataVolumeSourcePVC or a DataVolumeSourceSnapshot The maximum depth of a reference chain may not exceed 1. */
export interface V1beta1DataSourceRefSourceDataSource {
  /**
   * The name of the source DataSource
   * @default ""
   */
  name: string;
  /**
   * The namespace of the source DataSource
   * @default ""
   */
  namespace: string;
}
