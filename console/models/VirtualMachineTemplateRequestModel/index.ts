export { virtualMachineTemplateRequestBaseModel } from './base';
export * from './v1alpha1';
export * from './v1beta1';

import {
  VirtualMachineTemplateRequestV1Beta1Model,
  VirtualMachineTemplateRequestV1Beta1ModelGroupVersionKind,
  VirtualMachineTemplateRequestV1Beta1ModelRef,
} from './v1beta1';

export const VirtualMachineTemplateRequestModel = VirtualMachineTemplateRequestV1Beta1Model;

export const VirtualMachineTemplateRequestModelGroupVersionKind =
  VirtualMachineTemplateRequestV1Beta1ModelGroupVersionKind;
export const VirtualMachineTemplateRequestModelRef = VirtualMachineTemplateRequestV1Beta1ModelRef;
