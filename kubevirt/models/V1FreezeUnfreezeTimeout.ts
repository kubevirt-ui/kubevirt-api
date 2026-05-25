import type { K8sIoApimachineryPkgApisMetaV1Duration } from './K8sIoApimachineryPkgApisMetaV1Duration';

export interface V1FreezeUnfreezeTimeout {
  /** Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json. */
  unfreezeTimeout: K8sIoApimachineryPkgApisMetaV1Duration;
}
