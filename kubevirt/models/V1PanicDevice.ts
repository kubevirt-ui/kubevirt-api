export interface V1PanicDevice {
  /** Model specifies what type of panic device is provided. The panic model used when this attribute is missing depends on the hypervisor and guest arch. One of: isa, hyperv, pvpanic. */
  model?: string;
}
