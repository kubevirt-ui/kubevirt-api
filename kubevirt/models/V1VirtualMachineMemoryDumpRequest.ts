import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';

export interface V1VirtualMachineMemoryDumpRequest {
  /**
   * ClaimName is the name of the pvc that will contain the memory dump
   * @default ""
   */
  claimName: string;
  /** EndTimestamp represents the time the memory dump was completed */
  endTimestamp?: K8sIoApimachineryPkgApisMetaV1Time;
  /** FileName represents the name of the output file */
  fileName?: string;
  /** Message is a detailed message about failure of the memory dump */
  message?: string;
  /**
   * Phase represents the memory dump phase
   * @default ""
   */
  phase: string;
  /** Remove represents request of dissociating the memory dump pvc */
  remove?: boolean;
  /** StartTimestamp represents the time the memory dump started */
  startTimestamp?: K8sIoApimachineryPkgApisMetaV1Time;
}
