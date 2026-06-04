export const V1VirtualMachineInstanceSpecDnsPolicyEnum = {
  ClusterFirst: 'ClusterFirst',
  ClusterFirstWithHostNet: 'ClusterFirstWithHostNet',
  Default: 'Default',
  None: 'None',
} as const;

export type V1VirtualMachineInstanceSpecDnsPolicyEnum =
  typeof V1VirtualMachineInstanceSpecDnsPolicyEnum[keyof typeof V1VirtualMachineInstanceSpecDnsPolicyEnum];
