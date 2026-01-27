import { K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement } from '../models/K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement';

export const testObject: K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement = {
  key: 'environment',
  operator: 'In',
  values: ['production', 'staging'],
};
