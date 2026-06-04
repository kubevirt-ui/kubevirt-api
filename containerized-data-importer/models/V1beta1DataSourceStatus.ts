import type { V1beta1DataSourceCondition } from './V1beta1DataSourceCondition';
import type { V1beta1DataSourceSource } from './V1beta1DataSourceSource';

/** DataSourceStatus provides the most recently observed status of the DataSource */
export interface V1beta1DataSourceStatus {
  conditions?: V1beta1DataSourceCondition[];
  /**
   * Source is the current source of the data referenced by the DataSource
   * @default {}
   */
  source?: V1beta1DataSourceSource;
}
