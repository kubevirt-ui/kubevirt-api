import type { V1MultusNetwork } from './V1MultusNetwork';
import type { V1PodNetwork } from './V1PodNetwork';

export interface V1Network {
  /** Represents the multus cni network. */
  multus?: V1MultusNetwork;
  /**
   * Network name. Must be a DNS_LABEL and unique within the vm. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @default ""
   */
  name: string;
  /** Represents the stock pod network interface. */
  pod?: V1PodNetwork;
}
