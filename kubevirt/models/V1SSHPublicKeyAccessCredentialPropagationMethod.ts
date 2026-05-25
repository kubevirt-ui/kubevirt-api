import type { V1ConfigDriveSSHPublicKeyAccessCredentialPropagation } from './V1ConfigDriveSSHPublicKeyAccessCredentialPropagation';
import type { V1NoCloudSSHPublicKeyAccessCredentialPropagation } from './V1NoCloudSSHPublicKeyAccessCredentialPropagation';
import type { V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation } from './V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation';

export interface V1SSHPublicKeyAccessCredentialPropagationMethod {
  /** ConfigDrivePropagation means that the ssh public keys are injected into the VM using metadata using the configDrive cloud-init provider */
  configDrive?: V1ConfigDriveSSHPublicKeyAccessCredentialPropagation;
  /** NoCloudPropagation means that the ssh public keys are injected into the VM using metadata using the noCloud cloud-init provider */
  noCloud?: V1NoCloudSSHPublicKeyAccessCredentialPropagation;
  /** QemuGuestAgentAccessCredentailPropagation means ssh public keys are dynamically injected into the vm at runtime via the qemu guest agent. This feature requires the qemu guest agent to be running within the guest. */
  qemuGuestAgent?: V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation;
}
