export const IEE_802_1_VLANS = 'ieee-802-1-vlans';
export const CHASSIS_ID = 'chassis-id';
export const CHASSIS_ID_TYPE = 'chassis-id-type';
export const PORT_ID = 'port-id';
export const PORT_ID_TYPE = 'port-id-type';
export const SYSTEM_NAME = 'system-name';
export const SYSTEM_DESCRIPTION = 'system-description';
export const SYSTEM_CAPABILITIES = 'system-capabilities';
export const MANAGEMENT_ADDRESSES = 'management-addresses';
export const ADDRESS_SUBTYPE = 'address-subtype';
export const INTERFACE_NUMBER = 'interface-number';
export const INTERFACE_NUMBER_SUBTYPE = 'interface-number-subtype';

export type NodeNetworkConfigurationInterfaceLLDPNeighbor = {
  type?: number;
  subtype?: number;
  oui?: string;
  [CHASSIS_ID]?: string;
  [CHASSIS_ID_TYPE]?: number;
  _description?: string;
  [PORT_ID]?: string;
  [PORT_ID_TYPE]?: number;
  [SYSTEM_NAME]?: string;
  [SYSTEM_DESCRIPTION]?: string;
  [SYSTEM_CAPABILITIES]?: string[];
  [MANAGEMENT_ADDRESSES]?: {
    address?: string;
    [ADDRESS_SUBTYPE]?: string;
    [INTERFACE_NUMBER]?: number;
    [INTERFACE_NUMBER_SUBTYPE]?: number;
  }[];

  [IEE_802_1_VLANS]?: {
    vid?: number;
    name?: string;
  }[];
}[];

export interface NodeNetworkConfigurationInterfaceLLDP {
  enabled: boolean;
  neighbors: NodeNetworkConfigurationInterfaceLLDPNeighbor[];
}
