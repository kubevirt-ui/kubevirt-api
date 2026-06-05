import type { V1beta1VirtualMachine } from './V1beta1VirtualMachine';

/** SourceSpec contains the appropriate spec for the resource being snapshotted */
export interface V1beta1SourceSpec {
  virtualMachine?: V1beta1VirtualMachine;
}
