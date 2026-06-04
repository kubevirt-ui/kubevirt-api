import type { V1GuestAgentCommandInfo } from './V1GuestAgentCommandInfo';
import type { V1VirtualMachineInstanceFileSystemInfo } from './V1VirtualMachineInstanceFileSystemInfo';
import type { V1VirtualMachineInstanceGuestOSInfo } from './V1VirtualMachineInstanceGuestOSInfo';
import type { V1VirtualMachineInstanceGuestOSUser } from './V1VirtualMachineInstanceGuestOSUser';

/** VirtualMachineInstanceGuestAgentInfo represents information from the installed guest agent */
export interface V1VirtualMachineInstanceGuestAgentInfo {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: string;
  /** FSFreezeStatus indicates whether a freeze operation was requested for the guest filesystem. It will be set to "frozen" if the request was made, or unset otherwise. This does not reflect the actual state of the guest filesystem. */
  fsFreezeStatus?: string;
  /**
   * FSInfo is a guest os filesystem information containing the disk mapping and disk mounts with usage
   * @default {}
   */
  fsInfo?: V1VirtualMachineInstanceFileSystemInfo;
  /** GAVersion is a version of currently installed guest agent */
  guestAgentVersion?: string;
  /** Hostname represents FQDN of a guest */
  hostname?: string;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: string;
  /**
   * OS contains the guest operating system information
   * @default {}
   */
  os?: V1VirtualMachineInstanceGuestOSInfo;
  /** Return command list the guest agent supports */
  supportedCommands?: V1GuestAgentCommandInfo[];
  /** Timezone is guest os current timezone */
  timezone?: string;
  /** UserList is a list of active guest OS users */
  userList?: V1VirtualMachineInstanceGuestOSUser[];
}
