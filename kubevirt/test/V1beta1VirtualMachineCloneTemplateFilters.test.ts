import { V1beta1VirtualMachineCloneTemplateFilters } from '../models/V1beta1VirtualMachineCloneTemplateFilters';

export const testObject: V1beta1VirtualMachineCloneTemplateFilters = {
  annotationFilters: ['!kubevirt.io/*', '!app.kubernetes.io/*'],
  labelFilters: ['!app', '!version'],
};
