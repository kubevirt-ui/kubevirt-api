export interface IoK8sApiNetworkingV1IPBlock {
  /** cidr is a string representing the IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64" */
  cidr: string;
  /** except is a slice of CIDRs that should not be included within an IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64" Except values will be rejected if they are outside the cidr range */
  except?: string[];
}
