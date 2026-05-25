import type { K8sIoApimachineryPkgApisMetaV1Time } from './K8sIoApimachineryPkgApisMetaV1Time';
import type { V1Condition } from './V1Condition';
import type { V1VirtualMachineExportLinks } from './V1VirtualMachineExportLinks';

export type V1VirtualMachineExportStatus = {
  conditions?: V1Condition[];
  /** VirtualMachineExportLinks contains the links that point the exported VM resources */
  links?: V1VirtualMachineExportLinks;
  phase?: string;
  /** ServiceName is the name of the service created associated with the Virtual Machine export. It will be used to create the internal URLs for downloading the images */
  serviceName?: string;
  /** TokenSecretRef is the name of the secret that contains the token used by the export server pod */
  tokenSecretRef?: string;
  /** The time at which the VM Export will be completely removed according to specified TTL Formula is CreationTimestamp + TTL */
  ttlExpirationTime?: K8sIoApimachineryPkgApisMetaV1Time;
  /** VirtualMachineName shows the name of the source virtual machine if the source is either a VirtualMachine or a VirtualMachineSnapshot. This is mainly to easily identify the source VirtualMachine in case of a VirtualMachineSnapshot */
  virtualMachineName?: string;
} | null;
