import type { IoK8sApimachineryPkgApisMetaV1Time } from './IoK8sApimachineryPkgApisMetaV1Time';

/** The device this taint is attached to has the "effect" on any claim which does not tolerate the taint and, through the claim, to pods using the claim. */
export interface IoK8sApiResourceV1beta2DeviceTaint {
  /** The effect of the taint on claims that do not tolerate the taint and through such claims on the pods using them. Valid effects are NoSchedule and NoExecute. PreferNoSchedule as used for nodes is not valid here. */
  effect: string;
  /** The taint key to be applied to a device. Must be a label name. */
  key: string;
  /** TimeAdded represents the time at which the taint was added. Added automatically during create or update if not set. */
  timeAdded?: IoK8sApimachineryPkgApisMetaV1Time;
  /** The taint value corresponding to the taint key. Must be a label value. */
  value?: string;
}
