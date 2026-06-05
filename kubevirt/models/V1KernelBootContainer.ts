import type { V1KernelBootContainerImagePullPolicyEnum } from './V1KernelBootContainerImagePullPolicyEnum';

/** If set, the VM will be booted from the defined kernel / initrd. */
export interface V1KernelBootContainer {
  /**
   * Image that contains initrd / kernel files.
   * @default ""
   */
  image: string;
  /**
   * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
   *
   * Possible enum values:
   *  - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
   *  - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
   *  - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
   */
  imagePullPolicy?: V1KernelBootContainerImagePullPolicyEnum;
  /** ImagePullSecret is the name of the Docker registry secret required to pull the image. The secret must already exist. */
  imagePullSecret?: string;
  /** the fully-qualified path to the ramdisk image in the host OS */
  initrdPath?: string;
  /** The fully-qualified path to the kernel image in the host OS */
  kernelPath?: string;
}
