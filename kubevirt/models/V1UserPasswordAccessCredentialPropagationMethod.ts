import type { V1QemuGuestAgentUserPasswordAccessCredentialPropagation } from './V1QemuGuestAgentUserPasswordAccessCredentialPropagation';

/** UserPasswordAccessCredentialPropagationMethod represents the method used to inject a user passwords into the vm guest. Only one of its members may be specified. */
export interface V1UserPasswordAccessCredentialPropagationMethod {
  /** QemuGuestAgentAccessCredentailPropagation means passwords are dynamically injected into the vm at runtime via the qemu guest agent. This feature requires the qemu guest agent to be running within the guest. */
  qemuGuestAgent?: V1QemuGuestAgentUserPasswordAccessCredentialPropagation;
}
