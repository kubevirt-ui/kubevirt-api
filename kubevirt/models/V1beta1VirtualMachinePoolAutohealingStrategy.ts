import type { K8sIoApimachineryPkgApisMetaV1Duration } from './K8sIoApimachineryPkgApisMetaV1Duration';

export interface V1beta1VirtualMachinePoolAutohealingStrategy {
  /** MinFailingToStartDuration is the minimum time a VM must be in a failing status (applies to status conditions like CrashLoopBackOff, Unschedulable) before being replaced. It measures the duration since the VM's Ready condition transitioned to False. Defaults to 5 minutes */
  minFailingToStartDuration?: K8sIoApimachineryPkgApisMetaV1Duration;
  /**
   * StartUpFailureThreshold is the number of consecutive VMI start failures (it tracks the value of Status.StartFailure.ConsecutiveFailCount field) before replacing the VM. Defaults to 3
   * @format int64
   */
  startUpFailureThreshold?: number;
}
