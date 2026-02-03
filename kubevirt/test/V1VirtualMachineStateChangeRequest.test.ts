import { V1VirtualMachineStateChangeRequest } from '../models/V1VirtualMachineStateChangeRequest';

export const testObject: V1VirtualMachineStateChangeRequest = {
  action: 'Start',
  data: { gracePeriodSeconds: '30' },
  uid: 'abcd1234-5678-90ef-ghij-klmnopqrstuv',
};
