import type { V1FeatureSpinlocks } from './V1FeatureSpinlocks';
import type { V1FeatureState } from './V1FeatureState';
import type { V1FeatureVendorID } from './V1FeatureVendorID';
import type { V1SyNICTimer } from './V1SyNICTimer';
import type { V1TLBFlush } from './V1TLBFlush';

export interface V1FeatureHyperv {
  /** EVMCS Speeds up L2 vmexits, but disables other virtualization features. Requires vapic. Defaults to the machine type setting. */
  evmcs?: V1FeatureState;
  /** Frequencies improves the TSC clock source handling for Hyper-V on KVM. Defaults to the machine type setting. */
  frequencies?: V1FeatureState;
  /** IPI improves performances in overcommited environments. Requires vpindex. Defaults to the machine type setting. */
  ipi?: V1FeatureState;
  /** Reenlightenment enables the notifications on TSC frequency changes. Defaults to the machine type setting. */
  reenlightenment?: V1FeatureState;
  /** Relaxed instructs the guest OS to disable watchdog timeouts. Defaults to the machine type setting. */
  relaxed?: V1FeatureState;
  /** Reset enables Hyperv reboot/reset for the vmi. Requires synic. Defaults to the machine type setting. */
  reset?: V1FeatureState;
  /** Runtime improves the time accounting to improve scheduling in the guest. Defaults to the machine type setting. */
  runtime?: V1FeatureState;
  /** Spinlocks allows to configure the spinlock retry attempts. */
  spinlocks?: V1FeatureSpinlocks;
  /** SyNIC enables the Synthetic Interrupt Controller. Defaults to the machine type setting. */
  synic?: V1FeatureState;
  /** SyNICTimer enables Synthetic Interrupt Controller Timers, reducing CPU load. Defaults to the machine type setting. */
  synictimer?: V1SyNICTimer;
  /** TLBFlush improves performances in overcommited environments. Requires vpindex. Defaults to the machine type setting. */
  tlbflush?: V1TLBFlush;
  /** VAPIC improves the paravirtualized handling of interrupts. Defaults to the machine type setting. */
  vapic?: V1FeatureState;
  /** VendorID allows setting the hypervisor vendor id. Defaults to the machine type setting. */
  vendorid?: V1FeatureVendorID;
  /** VPIndex enables the Virtual Processor Index to help windows identifying virtual processors. Defaults to the machine type setting. */
  vpindex?: V1FeatureState;
}
