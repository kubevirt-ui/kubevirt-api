import type { K8sIoApimachineryPkgApisMetaV1Duration } from './K8sIoApimachineryPkgApisMetaV1Duration';

/** FreezeUnfreezeTimeout represent the time unfreeze will be triggered if guest was not unfrozen by unfreeze command */
export interface V1FreezeUnfreezeTimeout {
  /** Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json. */
  unfreezeTimeout: K8sIoApimachineryPkgApisMetaV1Duration;
}
