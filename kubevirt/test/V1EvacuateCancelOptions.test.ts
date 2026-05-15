import { V1EvacuateCancelOptions } from '../models/V1EvacuateCancelOptions';

export const testObject: V1EvacuateCancelOptions = {
  apiVersion: 'kubevirt.io/v1',
  dryRun: ['All'],
  evacuationNodeName: 'worker-node-1',
  kind: 'EvacuateCancelOptions',
};
