import type { V1beta1DataSourceSource } from './V1beta1DataSourceSource';

/** DataSourceSpec defines specification for DataSource */
export interface V1beta1DataSourceSpec {
  /**
   * Source is the source of the data referenced by the DataSource
   * @default {}
   */
  source: V1beta1DataSourceSource;
}
