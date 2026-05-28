export interface V1Realtime {
  /** Mask defines the vcpu mask expression that defines which vcpus are used for realtime. Format matches libvirt's expressions. Example: "0-3,^1","0,2,3","2-3" */
  mask?: string;
}
