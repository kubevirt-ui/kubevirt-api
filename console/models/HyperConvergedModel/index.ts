export { hyperConvergedBaseModel } from './base';
export * from './v1';
export * from './v1beta1';

import {
  HyperConvergedV1Model,
  HyperConvergedV1ModelGroupVersionKind,
  HyperConvergedV1ModelRef,
} from './v1';

export const HyperConvergedModel = HyperConvergedV1Model;

export const HyperConvergedModelGroupVersionKind = HyperConvergedV1ModelGroupVersionKind;
export const HyperConvergedModelRef = HyperConvergedV1ModelRef;
