import type { IoK8sApiResourceV1beta1BasicDevice } from './IoK8sApiResourceV1beta1BasicDevice';

export interface IoK8sApiResourceV1beta1Device {
  /** Basic defines one device instance. */
  basic?: IoK8sApiResourceV1beta1BasicDevice;
  /** Name is unique identifier among all devices managed by the driver in the pool. It must be a DNS label. */
  name: string;
}
