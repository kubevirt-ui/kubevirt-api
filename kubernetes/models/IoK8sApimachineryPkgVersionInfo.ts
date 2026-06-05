/** Info contains versioning information. how we'll want to distribute that information. */
export interface IoK8sApimachineryPkgVersionInfo {
  buildDate: string;
  compiler: string;
  /** EmulationMajor is the major version of the emulation version */
  emulationMajor?: string;
  /** EmulationMinor is the minor version of the emulation version */
  emulationMinor?: string;
  gitCommit: string;
  gitTreeState: string;
  gitVersion: string;
  goVersion: string;
  /** Major is the major version of the binary version */
  major: string;
  /** MinCompatibilityMajor is the major version of the minimum compatibility version */
  minCompatibilityMajor?: string;
  /** MinCompatibilityMinor is the minor version of the minimum compatibility version */
  minCompatibilityMinor?: string;
  /** Minor is the minor version of the binary version */
  minor: string;
  platform: string;
}
