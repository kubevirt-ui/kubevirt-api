export interface V1beta1DataVolumeSourceVDDK {
  /** BackingFile is the path to the virtual hard disk to migrate from vCenter/ESXi */
  backingFile?: string;
  /** ExtraArgs is a reference to a ConfigMap containing extra arguments to pass directly to the VDDK library */
  extraArgs?: string;
  /** InitImageURL is an optional URL to an image containing an extracted VDDK library, overrides v2v-vmware config map */
  initImageURL?: string;
  /** SecretRef provides a reference to a secret containing the username and password needed to access the vCenter or ESXi host */
  secretRef?: string;
  /** Thumbprint is the certificate thumbprint of the vCenter or ESXi host */
  thumbprint?: string;
  /** URL is the URL of the vCenter or ESXi host with the VM to migrate */
  url?: string;
  /** UUID is the UUID of the virtual machine that the backing file is attached to in vCenter/ESXi */
  uuid?: string;
}
