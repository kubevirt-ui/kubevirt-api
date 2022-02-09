import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';

export type TemplateParameter = {
  name: string;
  value?: string;
  displayName?: string;
  description?: string;
  generate?: string;
  required?: boolean;
};

export type V1Template = {
  message?: string;
  objects: any[];
  parameters: TemplateParameter[];
  labels?: any[];
} & K8sResourceCommon;
