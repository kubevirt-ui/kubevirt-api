import { V1HotplugVolumeSource } from '../models/V1HotplugVolumeSource';

export const testObject: V1HotplugVolumeSource = {
  dataVolume: { name: 'my-datavolume', hotpluggable: true },
  persistentVolumeClaim: { claimName: 'my-pvc', hotpluggable: true },
};
