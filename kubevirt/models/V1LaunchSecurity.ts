import type { V1SEV } from './V1SEV';
import type { V1SEVSNP } from './V1SEVSNP';
import type { V1TDX } from './V1TDX';

export interface V1LaunchSecurity {
  /** AMD Secure Encrypted Virtualization (SEV). */
  sev?: V1SEV;
  /** AMD SEV-SNP flags defined by the SEV-SNP specifications. */
  snp?: V1SEVSNP;
  /** Intel Trust Domain Extensions (TDX). */
  tdx?: V1TDX;
}
