import type { IoK8sApiResourceV1alpha3NetworkDeviceData } from './IoK8sApiResourceV1alpha3NetworkDeviceData';
import type { IoK8sApimachineryPkgApisMetaV1Condition } from './IoK8sApimachineryPkgApisMetaV1Condition';
import type { IoK8sApimachineryPkgRuntimeRawExtension } from './IoK8sApimachineryPkgRuntimeRawExtension';

export interface IoK8sApiResourceV1alpha3AllocatedDeviceStatus {
  /**
   * Conditions contains the latest observation of the device's state. If the device has been configured according to the class and claim config references, the `Ready` condition should be True.
   *
   * Must not contain more than 8 entries.
   */
  conditions?: IoK8sApimachineryPkgApisMetaV1Condition[];
  /**
   * Data contains arbitrary driver-specific data.
   *
   * The length of the raw data must be smaller or equal to 10 Ki.
   */
  data?: IoK8sApimachineryPkgRuntimeRawExtension;
  /** Device references one device instance via its name in the driver's resource pool. It must be a DNS label. */
  device: string;
  /**
   * Driver specifies the name of the DRA driver whose kubelet plugin should be invoked to process the allocation once the claim is needed on a node.
   *
   * Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver.
   */
  driver: string;
  /** NetworkData contains network-related information specific to the device. */
  networkData?: IoK8sApiResourceV1alpha3NetworkDeviceData;
  /**
   * This name together with the driver name and the device name field identify which device was allocated (`<driver name>/<pool name>/<device name>`).
   *
   * Must not be longer than 253 characters and may contain one or more DNS sub-domains separated by slashes.
   */
  pool: string;
}
