import { K8sIoApiCoreV1ExecAction } from '../models/K8sIoApiCoreV1ExecAction';

export const testObject: K8sIoApiCoreV1ExecAction = {
  command: ['/bin/sh', '-c', 'echo hello'],
};
