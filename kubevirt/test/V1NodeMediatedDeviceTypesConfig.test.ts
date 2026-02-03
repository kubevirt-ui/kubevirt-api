import { V1NodeMediatedDeviceTypesConfig } from '../models/V1NodeMediatedDeviceTypesConfig';

export const testObject: V1NodeMediatedDeviceTypesConfig = {
  mediatedDeviceTypes: ['nvidia-222', 'nvidia-223'],
  nodeSelector: { 'gpu': 'true' },
};
