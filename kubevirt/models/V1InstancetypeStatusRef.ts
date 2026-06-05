import type { V1ControllerRevisionRef } from './V1ControllerRevisionRef';

export interface V1InstancetypeStatusRef {
  /** ControllerRef specifies the ControllerRevision storing a copy of the object captured when it is first seen by the VirtualMachine controller */
  controllerRevisionRef?: V1ControllerRevisionRef;
  /** InferFromVolume lists the name of a volume that should be used to infer or discover the resource */
  inferFromVolume?: string;
  /** InferFromVolumeFailurePolicy controls what should happen on failure when inferring the resource */
  inferFromVolumeFailurePolicy?: string;
  /** Kind specifies the kind of resource */
  kind?: string;
  /** Name is the name of resource */
  name?: string;
}
