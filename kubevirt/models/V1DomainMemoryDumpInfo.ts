import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';

/** DomainMemoryDumpInfo represents the memory dump information */
export interface V1DomainMemoryDumpInfo {
  /** ClaimName is the name of the pvc the memory was dumped to */
  claimName?: string;
  /** EndTimestamp is the time when the memory dump completed */
  endTimestamp?: K8sIoApimachineryPkgApisMetaV1Time;
  /** StartTimestamp is the time when the memory dump started */
  startTimestamp?: K8sIoApimachineryPkgApisMetaV1Time;
  /** TargetFileName is the name of the memory dump output */
  targetFileName?: string;
}
