export { virtualMachineTemplateBaseModel } from './base';
export * from './v1alpha1';
export * from './v1beta1';

import {
  VirtualMachineTemplateV1Beta1Model,
  VirtualMachineTemplateV1Beta1ModelGroupVersionKind,
  VirtualMachineTemplateV1Beta1ModelRef,
} from './v1beta1';

export const VirtualMachineTemplateModel = VirtualMachineTemplateV1Beta1Model;

export const VirtualMachineTemplateModelGroupVersionKind =
  VirtualMachineTemplateV1Beta1ModelGroupVersionKind;
export const VirtualMachineTemplateModelRef = VirtualMachineTemplateV1Beta1ModelRef;
