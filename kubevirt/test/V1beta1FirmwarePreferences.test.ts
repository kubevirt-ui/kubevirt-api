import { V1beta1FirmwarePreferences } from '../models/V1beta1FirmwarePreferences';

export const testObject: V1beta1FirmwarePreferences = {
  preferredEfi: {
    secureBoot: true,
  },
  preferredUseBios: false,
  preferredUseBiosSerial: false,
  preferredUseEfi: true,
  preferredUseSecureBoot: true,
};
