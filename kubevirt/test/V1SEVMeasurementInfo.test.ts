import { V1SEVMeasurementInfo } from '../models/V1SEVMeasurementInfo';

export const testObject: V1SEVMeasurementInfo = {
  apiMajor: 1,
  apiMinor: 0,
  apiVersion: 'subresources.kubevirt.io/v1',
  buildID: 100,
  kind: 'SEVMeasurementInfo',
  loaderSHA: 'sha256:abc123',
  measurement: 'base64encodedmeasurement',
  policy: 1,
};
