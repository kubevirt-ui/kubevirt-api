import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { K8sIoApiCoreV1Affinity } from '../models/K8sIoApiCoreV1Affinity';
import { K8sIoApiCoreV1DownwardAPIVolumeFile } from '../models/K8sIoApiCoreV1DownwardAPIVolumeFile';
import { K8sIoApiCoreV1ExecAction } from '../models/K8sIoApiCoreV1ExecAction';
import { K8sIoApiCoreV1HTTPGetAction } from '../models/K8sIoApiCoreV1HTTPGetAction';
import { K8sIoApiCoreV1HTTPHeader } from '../models/K8sIoApiCoreV1HTTPHeader';
import { K8sIoApiCoreV1LocalObjectReference } from '../models/K8sIoApiCoreV1LocalObjectReference';
import { K8sIoApiCoreV1NodeAffinity } from '../models/K8sIoApiCoreV1NodeAffinity';
import { K8sIoApiCoreV1NodeSelector } from '../models/K8sIoApiCoreV1NodeSelector';
import { K8sIoApiCoreV1NodeSelectorRequirement } from '../models/K8sIoApiCoreV1NodeSelectorRequirement';
import { K8sIoApiCoreV1NodeSelectorTerm } from '../models/K8sIoApiCoreV1NodeSelectorTerm';
import { K8sIoApiCoreV1ObjectFieldSelector } from '../models/K8sIoApiCoreV1ObjectFieldSelector';
import { K8sIoApiCoreV1PersistentVolumeClaimSpec } from '../models/K8sIoApiCoreV1PersistentVolumeClaimSpec';
import { K8sIoApiCoreV1PersistentVolumeClaimVolumeSource } from '../models/K8sIoApiCoreV1PersistentVolumeClaimVolumeSource';
import { K8sIoApiCoreV1PodAffinity } from '../models/K8sIoApiCoreV1PodAffinity';
import { K8sIoApiCoreV1PodAffinityTerm } from '../models/K8sIoApiCoreV1PodAffinityTerm';
import { K8sIoApiCoreV1PodAntiAffinity } from '../models/K8sIoApiCoreV1PodAntiAffinity';
import { K8sIoApiCoreV1PodDNSConfig } from '../models/K8sIoApiCoreV1PodDNSConfig';
import { K8sIoApiCoreV1PodDNSConfigOption } from '../models/K8sIoApiCoreV1PodDNSConfigOption';
import { K8sIoApiCoreV1PreferredSchedulingTerm } from '../models/K8sIoApiCoreV1PreferredSchedulingTerm';
import { K8sIoApiCoreV1ResourceFieldSelector } from '../models/K8sIoApiCoreV1ResourceFieldSelector';
import { K8sIoApiCoreV1ResourceRequirements } from '../models/K8sIoApiCoreV1ResourceRequirements';
import { K8sIoApiCoreV1TCPSocketAction } from '../models/K8sIoApiCoreV1TCPSocketAction';
import { K8sIoApiCoreV1Toleration } from '../models/K8sIoApiCoreV1Toleration';
import { K8sIoApiCoreV1TypedLocalObjectReference } from '../models/K8sIoApiCoreV1TypedLocalObjectReference';
import { K8sIoApiCoreV1WeightedPodAffinityTerm } from '../models/K8sIoApiCoreV1WeightedPodAffinityTerm';
import { K8sIoApimachineryPkgApisMetaV1APIGroup } from '../models/K8sIoApimachineryPkgApisMetaV1APIGroup';
import { K8sIoApimachineryPkgApisMetaV1APIGroupList } from '../models/K8sIoApimachineryPkgApisMetaV1APIGroupList';
import { K8sIoApimachineryPkgApisMetaV1APIResource } from '../models/K8sIoApimachineryPkgApisMetaV1APIResource';
import { K8sIoApimachineryPkgApisMetaV1APIResourceList } from '../models/K8sIoApimachineryPkgApisMetaV1APIResourceList';
import { K8sIoApimachineryPkgApisMetaV1DeleteOptions } from '../models/K8sIoApimachineryPkgApisMetaV1DeleteOptions';
import { K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery } from '../models/K8sIoApimachineryPkgApisMetaV1GroupVersionForDiscovery';
import { K8sIoApimachineryPkgApisMetaV1LabelSelector } from '../models/K8sIoApimachineryPkgApisMetaV1LabelSelector';
import { K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement } from '../models/K8sIoApimachineryPkgApisMetaV1LabelSelectorRequirement';
import { K8sIoApimachineryPkgApisMetaV1ListMeta } from '../models/K8sIoApimachineryPkgApisMetaV1ListMeta';
import { K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry } from '../models/K8sIoApimachineryPkgApisMetaV1ManagedFieldsEntry';
import { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from '../models/K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import { K8sIoApimachineryPkgApisMetaV1OwnerReference } from '../models/K8sIoApimachineryPkgApisMetaV1OwnerReference';
import { K8sIoApimachineryPkgApisMetaV1Preconditions } from '../models/K8sIoApimachineryPkgApisMetaV1Preconditions';
import { K8sIoApimachineryPkgApisMetaV1RootPaths } from '../models/K8sIoApimachineryPkgApisMetaV1RootPaths';
import { K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDR } from '../models/K8sIoApimachineryPkgApisMetaV1ServerAddressByClientCIDR';
import { K8sIoApimachineryPkgApisMetaV1Status } from '../models/K8sIoApimachineryPkgApisMetaV1Status';
import { K8sIoApimachineryPkgApisMetaV1StatusCause } from '../models/K8sIoApimachineryPkgApisMetaV1StatusCause';
import { K8sIoApimachineryPkgApisMetaV1StatusDetails } from '../models/K8sIoApimachineryPkgApisMetaV1StatusDetails';
import { K8sIoApimachineryPkgApisMetaV1WatchEvent } from '../models/K8sIoApimachineryPkgApisMetaV1WatchEvent';
import { V1AccessCredential } from '../models/V1AccessCredential';
import { V1AccessCredentialSecretSource } from '../models/V1AccessCredentialSecretSource';
import { V1AddVolumeOptions } from '../models/V1AddVolumeOptions';
import { V1BIOS } from '../models/V1BIOS';
import { V1BlockSize } from '../models/V1BlockSize';
import { V1Bootloader } from '../models/V1Bootloader';
import { V1CDRomTarget } from '../models/V1CDRomTarget';
import { V1CPU } from '../models/V1CPU';
import { V1CPUFeature } from '../models/V1CPUFeature';
import { V1CertConfig } from '../models/V1CertConfig';
import { V1Chassis } from '../models/V1Chassis';
import { V1Clock } from '../models/V1Clock';
import { V1ClockOffsetUTC } from '../models/V1ClockOffsetUTC';
import { V1CloudInitConfigDriveSource } from '../models/V1CloudInitConfigDriveSource';
import { V1CloudInitNoCloudSource } from '../models/V1CloudInitNoCloudSource';
import { V1ComponentConfig } from '../models/V1ComponentConfig';
import { V1ConfigMapVolumeSource } from '../models/V1ConfigMapVolumeSource';
import { V1ContainerDiskSource } from '../models/V1ContainerDiskSource';
import { V1CustomBlockSize } from '../models/V1CustomBlockSize';
import { V1CustomizeComponents } from '../models/V1CustomizeComponents';
import { V1CustomizeComponentsPatch } from '../models/V1CustomizeComponentsPatch';
import { V1DHCPOptions } from '../models/V1DHCPOptions';
import { V1DHCPPrivateOptions } from '../models/V1DHCPPrivateOptions';
import { V1DataVolumeSource } from '../models/V1DataVolumeSource';
import { V1DataVolumeTemplateSpec } from '../models/V1DataVolumeTemplateSpec';
import { V1DeveloperConfiguration } from '../models/V1DeveloperConfiguration';
import { V1Devices } from '../models/V1Devices';
import { V1Disk } from '../models/V1Disk';
import { V1DiskTarget } from '../models/V1DiskTarget';
import { V1DiskVerification } from '../models/V1DiskVerification';
import { V1DomainSpec } from '../models/V1DomainSpec';
import { V1DownwardAPIVolumeSource } from '../models/V1DownwardAPIVolumeSource';
import { V1EFI } from '../models/V1EFI';
import { V1EmptyDiskSource } from '../models/V1EmptyDiskSource';
import { V1EphemeralVolumeSource } from '../models/V1EphemeralVolumeSource';
import { V1FeatureAPIC } from '../models/V1FeatureAPIC';
import { V1FeatureHyperv } from '../models/V1FeatureHyperv';
import { V1FeatureKVM } from '../models/V1FeatureKVM';
import { V1FeatureSpinlocks } from '../models/V1FeatureSpinlocks';
import { V1FeatureState } from '../models/V1FeatureState';
import { V1FeatureVendorID } from '../models/V1FeatureVendorID';
import { V1Features } from '../models/V1Features';
import { V1Filesystem } from '../models/V1Filesystem';
import { V1Firmware } from '../models/V1Firmware';
import { V1Flags } from '../models/V1Flags';
import { V1FlavorMatcher } from '../models/V1FlavorMatcher';
import { V1FloppyTarget } from '../models/V1FloppyTarget';
import { V1FreezeUnfreezeTimeout } from '../models/V1FreezeUnfreezeTimeout';
import { V1GPU } from '../models/V1GPU';
import { V1GenerationStatus } from '../models/V1GenerationStatus';
import { V1GuestAgentCommandInfo } from '../models/V1GuestAgentCommandInfo';
import { V1HPETTimer } from '../models/V1HPETTimer';
import { V1HostDevice } from '../models/V1HostDevice';
import { V1HostDisk } from '../models/V1HostDisk';
import { V1HotplugVolumeSource } from '../models/V1HotplugVolumeSource';
import { V1HotplugVolumeStatus } from '../models/V1HotplugVolumeStatus';
import { V1Hugepages } from '../models/V1Hugepages';
import { V1HypervTimer } from '../models/V1HypervTimer';
import { V1I6300ESBWatchdog } from '../models/V1I6300ESBWatchdog';
import { V1Input } from '../models/V1Input';
import { V1Interface } from '../models/V1Interface';
import { V1KVMTimer } from '../models/V1KVMTimer';
import { V1KernelBoot } from '../models/V1KernelBoot';
import { V1KernelBootContainer } from '../models/V1KernelBootContainer';
import { V1KubeVirt } from '../models/V1KubeVirt';
import { V1KubeVirtCertificateRotateStrategy } from '../models/V1KubeVirtCertificateRotateStrategy';
import { V1KubeVirtCondition } from '../models/V1KubeVirtCondition';
import { V1KubeVirtConfiguration } from '../models/V1KubeVirtConfiguration';
import { V1KubeVirtList } from '../models/V1KubeVirtList';
import { V1KubeVirtSelfSignConfiguration } from '../models/V1KubeVirtSelfSignConfiguration';
import { V1KubeVirtSpec } from '../models/V1KubeVirtSpec';
import { V1KubeVirtStatus } from '../models/V1KubeVirtStatus';
import { V1KubeVirtWorkloadUpdateStrategy } from '../models/V1KubeVirtWorkloadUpdateStrategy';
import { V1LogVerbosity } from '../models/V1LogVerbosity';
import { V1LunTarget } from '../models/V1LunTarget';
import { V1Machine } from '../models/V1Machine';
import { V1MediatedDevicesConfiguration } from '../models/V1MediatedDevicesConfiguration';
import { V1MediatedHostDevice } from '../models/V1MediatedHostDevice';
import { V1Memory } from '../models/V1Memory';
import { V1MigrationConfiguration } from '../models/V1MigrationConfiguration';
import { V1MultusNetwork } from '../models/V1MultusNetwork';
import { V1NUMA } from '../models/V1NUMA';
import { V1Network } from '../models/V1Network';
import { V1NetworkConfiguration } from '../models/V1NetworkConfiguration';
import { V1NodePlacement } from '../models/V1NodePlacement';
import { V1PITTimer } from '../models/V1PITTimer';
import { V1PauseOptions } from '../models/V1PauseOptions';
import { V1PciHostDevice } from '../models/V1PciHostDevice';
import { V1PermittedHostDevices } from '../models/V1PermittedHostDevices';
import { V1PersistentVolumeClaimInfo } from '../models/V1PersistentVolumeClaimInfo';
import { V1PersistentVolumeClaimVolumeSource } from '../models/V1PersistentVolumeClaimVolumeSource';
import { V1PodNetwork } from '../models/V1PodNetwork';
import { V1Port } from '../models/V1Port';
import { V1Probe } from '../models/V1Probe';
import { V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation } from '../models/V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation';
import { V1RESTClientConfiguration } from '../models/V1RESTClientConfiguration';
import { V1RTCTimer } from '../models/V1RTCTimer';
import { V1RateLimiter } from '../models/V1RateLimiter';
import { V1Realtime } from '../models/V1Realtime';
import { V1ReloadableComponentConfiguration } from '../models/V1ReloadableComponentConfiguration';
import { V1RemoveVolumeOptions } from '../models/V1RemoveVolumeOptions';
import { V1ResourceRequirements } from '../models/V1ResourceRequirements';
import { V1RestartOptions } from '../models/V1RestartOptions';
import { V1SMBiosConfiguration } from '../models/V1SMBiosConfiguration';
import { V1SSHPublicKeyAccessCredential } from '../models/V1SSHPublicKeyAccessCredential';
import { V1SSHPublicKeyAccessCredentialPropagationMethod } from '../models/V1SSHPublicKeyAccessCredentialPropagationMethod';
import { V1SSHPublicKeyAccessCredentialSource } from '../models/V1SSHPublicKeyAccessCredentialSource';
import { V1SecretVolumeSource } from '../models/V1SecretVolumeSource';
import { V1ServiceAccountVolumeSource } from '../models/V1ServiceAccountVolumeSource';
import { V1SoundDevice } from '../models/V1SoundDevice';
import { V1StartOptions } from '../models/V1StartOptions';
import { V1StopOptions } from '../models/V1StopOptions';
import { V1SyNICTimer } from '../models/V1SyNICTimer';
import { V1SysprepSource } from '../models/V1SysprepSource';
import { V1Timer } from '../models/V1Timer';
import { V1TokenBucketRateLimiter } from '../models/V1TokenBucketRateLimiter';
import { V1TopologyHints } from '../models/V1TopologyHints';
import { V1UnpauseOptions } from '../models/V1UnpauseOptions';
import { V1UserPasswordAccessCredential } from '../models/V1UserPasswordAccessCredential';
import { V1UserPasswordAccessCredentialPropagationMethod } from '../models/V1UserPasswordAccessCredentialPropagationMethod';
import { V1UserPasswordAccessCredentialSource } from '../models/V1UserPasswordAccessCredentialSource';
import { V1VGPUDisplayOptions } from '../models/V1VGPUDisplayOptions';
import { V1VGPUOptions } from '../models/V1VGPUOptions';
import { V1VirtualMachine } from '../models/V1VirtualMachine';
import { V1VirtualMachineCondition } from '../models/V1VirtualMachineCondition';
import { V1VirtualMachineInstance } from '../models/V1VirtualMachineInstance';
import { V1VirtualMachineInstanceCondition } from '../models/V1VirtualMachineInstanceCondition';
import { V1VirtualMachineInstanceFileSystem } from '../models/V1VirtualMachineInstanceFileSystem';
import { V1VirtualMachineInstanceFileSystemInfo } from '../models/V1VirtualMachineInstanceFileSystemInfo';
import { V1VirtualMachineInstanceFileSystemList } from '../models/V1VirtualMachineInstanceFileSystemList';
import { V1VirtualMachineInstanceGuestAgentInfo } from '../models/V1VirtualMachineInstanceGuestAgentInfo';
import { V1VirtualMachineInstanceGuestOSInfo } from '../models/V1VirtualMachineInstanceGuestOSInfo';
import { V1VirtualMachineInstanceGuestOSUser } from '../models/V1VirtualMachineInstanceGuestOSUser';
import { V1VirtualMachineInstanceGuestOSUserList } from '../models/V1VirtualMachineInstanceGuestOSUserList';
import { V1VirtualMachineInstanceList } from '../models/V1VirtualMachineInstanceList';
import { V1VirtualMachineInstanceMigration } from '../models/V1VirtualMachineInstanceMigration';
import { V1VirtualMachineInstanceMigrationCondition } from '../models/V1VirtualMachineInstanceMigrationCondition';
import { V1VirtualMachineInstanceMigrationList } from '../models/V1VirtualMachineInstanceMigrationList';
import { V1VirtualMachineInstanceMigrationSpec } from '../models/V1VirtualMachineInstanceMigrationSpec';
import { V1VirtualMachineInstanceMigrationState } from '../models/V1VirtualMachineInstanceMigrationState';
import { V1VirtualMachineInstanceMigrationStatus } from '../models/V1VirtualMachineInstanceMigrationStatus';
import { V1VirtualMachineInstanceNetworkInterface } from '../models/V1VirtualMachineInstanceNetworkInterface';
import { V1VirtualMachineInstancePhaseTransitionTimestamp } from '../models/V1VirtualMachineInstancePhaseTransitionTimestamp';
import { V1VirtualMachineInstancePreset } from '../models/V1VirtualMachineInstancePreset';
import { V1VirtualMachineInstancePresetList } from '../models/V1VirtualMachineInstancePresetList';
import { V1VirtualMachineInstancePresetSpec } from '../models/V1VirtualMachineInstancePresetSpec';
import { V1VirtualMachineInstanceReplicaSet } from '../models/V1VirtualMachineInstanceReplicaSet';
import { V1VirtualMachineInstanceReplicaSetCondition } from '../models/V1VirtualMachineInstanceReplicaSetCondition';
import { V1VirtualMachineInstanceReplicaSetList } from '../models/V1VirtualMachineInstanceReplicaSetList';
import { V1VirtualMachineInstanceReplicaSetSpec } from '../models/V1VirtualMachineInstanceReplicaSetSpec';
import { V1VirtualMachineInstanceReplicaSetStatus } from '../models/V1VirtualMachineInstanceReplicaSetStatus';
import { V1VirtualMachineInstanceSpec } from '../models/V1VirtualMachineInstanceSpec';
import { V1VirtualMachineInstanceStatus } from '../models/V1VirtualMachineInstanceStatus';
import { V1VirtualMachineInstanceTemplateSpec } from '../models/V1VirtualMachineInstanceTemplateSpec';
import { V1VirtualMachineList } from '../models/V1VirtualMachineList';
import { V1VirtualMachineSpec } from '../models/V1VirtualMachineSpec';
import { V1VirtualMachineStartFailure } from '../models/V1VirtualMachineStartFailure';
import { V1VirtualMachineStateChangeRequest } from '../models/V1VirtualMachineStateChangeRequest';
import { V1VirtualMachineStatus } from '../models/V1VirtualMachineStatus';
import { V1VirtualMachineVolumeRequest } from '../models/V1VirtualMachineVolumeRequest';
import { V1Volume } from '../models/V1Volume';
import { V1VolumeSnapshotStatus } from '../models/V1VolumeSnapshotStatus';
import { V1VolumeStatus } from '../models/V1VolumeStatus';
import { V1Watchdog } from '../models/V1Watchdog';
import { V1alpha1Condition } from '../models/V1alpha1Condition';
import { V1alpha1Error } from '../models/V1alpha1Error';
import { V1alpha1PersistentVolumeClaim } from '../models/V1alpha1PersistentVolumeClaim';
import { V1alpha1SourceSpec } from '../models/V1alpha1SourceSpec';
import { V1alpha1VirtualMachineClusterFlavor } from '../models/V1alpha1VirtualMachineClusterFlavor';
import { V1alpha1VirtualMachineClusterFlavorList } from '../models/V1alpha1VirtualMachineClusterFlavorList';
import { V1alpha1VirtualMachineFlavor } from '../models/V1alpha1VirtualMachineFlavor';
import { V1alpha1VirtualMachineFlavorList } from '../models/V1alpha1VirtualMachineFlavorList';
import { V1alpha1VirtualMachineFlavorProfile } from '../models/V1alpha1VirtualMachineFlavorProfile';
import { V1alpha1VirtualMachineRestore } from '../models/V1alpha1VirtualMachineRestore';
import { V1alpha1VirtualMachineRestoreList } from '../models/V1alpha1VirtualMachineRestoreList';
import { V1alpha1VirtualMachineRestoreSpec } from '../models/V1alpha1VirtualMachineRestoreSpec';
import { V1alpha1VirtualMachineRestoreStatus } from '../models/V1alpha1VirtualMachineRestoreStatus';
import { V1alpha1VirtualMachineSnapshot } from '../models/V1alpha1VirtualMachineSnapshot';
import { V1alpha1VirtualMachineSnapshotContent } from '../models/V1alpha1VirtualMachineSnapshotContent';
import { V1alpha1VirtualMachineSnapshotContentList } from '../models/V1alpha1VirtualMachineSnapshotContentList';
import { V1alpha1VirtualMachineSnapshotContentSpec } from '../models/V1alpha1VirtualMachineSnapshotContentSpec';
import { V1alpha1VirtualMachineSnapshotContentStatus } from '../models/V1alpha1VirtualMachineSnapshotContentStatus';
import { V1alpha1VirtualMachineSnapshotList } from '../models/V1alpha1VirtualMachineSnapshotList';
import { V1alpha1VirtualMachineSnapshotSpec } from '../models/V1alpha1VirtualMachineSnapshotSpec';
import { V1alpha1VirtualMachineSnapshotStatus } from '../models/V1alpha1VirtualMachineSnapshotStatus';
import { V1alpha1VolumeBackup } from '../models/V1alpha1VolumeBackup';
import { V1alpha1VolumeRestore } from '../models/V1alpha1VolumeRestore';
import { V1alpha1VolumeSnapshotStatus } from '../models/V1alpha1VolumeSnapshotStatus';
import { V1beta1DataVolumeCheckpoint } from '../models/V1beta1DataVolumeCheckpoint';
import { V1beta1DataVolumeSource } from '../models/V1beta1DataVolumeSource';
import { V1beta1DataVolumeSourceHTTP } from '../models/V1beta1DataVolumeSourceHTTP';
import { V1beta1DataVolumeSourceImageIO } from '../models/V1beta1DataVolumeSourceImageIO';
import { V1beta1DataVolumeSourcePVC } from '../models/V1beta1DataVolumeSourcePVC';
import { V1beta1DataVolumeSourceRef } from '../models/V1beta1DataVolumeSourceRef';
import { V1beta1DataVolumeSourceRegistry } from '../models/V1beta1DataVolumeSourceRegistry';
import { V1beta1DataVolumeSourceS3 } from '../models/V1beta1DataVolumeSourceS3';
import { V1beta1DataVolumeSourceVDDK } from '../models/V1beta1DataVolumeSourceVDDK';
import { V1beta1DataVolumeSpec } from '../models/V1beta1DataVolumeSpec';
import { V1beta1StorageSpec } from '../models/V1beta1StorageSpec';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiCreateNamespacedKubeVirtRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApicreateNamespacedKubeVirt
     */
    namespace: string
    /**
     * 
     * @type V1KubeVirt
     * @memberof DefaultApicreateNamespacedKubeVirt
     */
    body: V1KubeVirt
}

export interface DefaultApiCreateNamespacedVirtualMachineRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachine
     */
    namespace: string
    /**
     * 
     * @type V1VirtualMachine
     * @memberof DefaultApicreateNamespacedVirtualMachine
     */
    body: V1VirtualMachine
}

export interface DefaultApiCreateNamespacedVirtualMachineFlavorRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineFlavor
     */
    namespace: string
    /**
     * 
     * @type V1alpha1VirtualMachineFlavor
     * @memberof DefaultApicreateNamespacedVirtualMachineFlavor
     */
    body: V1alpha1VirtualMachineFlavor
}

export interface DefaultApiCreateNamespacedVirtualMachineInstanceRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineInstance
     */
    namespace: string
    /**
     * 
     * @type V1VirtualMachineInstance
     * @memberof DefaultApicreateNamespacedVirtualMachineInstance
     */
    body: V1VirtualMachineInstance
}

export interface DefaultApiCreateNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineInstanceMigration
     */
    namespace: string
    /**
     * 
     * @type V1VirtualMachineInstanceMigration
     * @memberof DefaultApicreateNamespacedVirtualMachineInstanceMigration
     */
    body: V1VirtualMachineInstanceMigration
}

export interface DefaultApiCreateNamespacedVirtualMachineInstancePresetRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineInstancePreset
     */
    namespace: string
    /**
     * 
     * @type V1VirtualMachineInstancePreset
     * @memberof DefaultApicreateNamespacedVirtualMachineInstancePreset
     */
    body: V1VirtualMachineInstancePreset
}

export interface DefaultApiCreateNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineInstanceReplicaSet
     */
    namespace: string
    /**
     * 
     * @type V1VirtualMachineInstanceReplicaSet
     * @memberof DefaultApicreateNamespacedVirtualMachineInstanceReplicaSet
     */
    body: V1VirtualMachineInstanceReplicaSet
}

export interface DefaultApiCreateNamespacedVirtualMachineRestoreRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineRestore
     */
    namespace: string
    /**
     * 
     * @type V1alpha1VirtualMachineRestore
     * @memberof DefaultApicreateNamespacedVirtualMachineRestore
     */
    body: V1alpha1VirtualMachineRestore
}

export interface DefaultApiCreateNamespacedVirtualMachineSnapshotRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineSnapshot
     */
    namespace: string
    /**
     * 
     * @type V1alpha1VirtualMachineSnapshot
     * @memberof DefaultApicreateNamespacedVirtualMachineSnapshot
     */
    body: V1alpha1VirtualMachineSnapshot
}

export interface DefaultApiCreateNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApicreateNamespacedVirtualMachineSnapshotContent
     */
    namespace: string
    /**
     * 
     * @type V1alpha1VirtualMachineSnapshotContent
     * @memberof DefaultApicreateNamespacedVirtualMachineSnapshotContent
     */
    body: V1alpha1VirtualMachineSnapshotContent
}

export interface DefaultApiCreateVirtualMachineClusterFlavorRequest {
    /**
     * 
     * @type V1alpha1VirtualMachineClusterFlavor
     * @memberof DefaultApicreateVirtualMachineClusterFlavor
     */
    body: V1alpha1VirtualMachineClusterFlavor
}

export interface DefaultApiDeleteCollectionNamespacedKubeVirtRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedKubeVirt
     */
    watch?: boolean
}

export interface DefaultApiDeleteCollectionNamespacedVirtualMachineRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachine
     */
    watch?: boolean
}

export interface DefaultApiDeleteCollectionNamespacedVirtualMachineFlavorRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineFlavor
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineFlavor
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineFlavor
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineFlavor
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineFlavor
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineFlavor
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineFlavor
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineFlavor
     */
    watch?: boolean
}

export interface DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstance
     */
    watch?: boolean
}

export interface DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceMigration
     */
    watch?: boolean
}

export interface DefaultApiDeleteCollectionNamespacedVirtualMachineInstancePresetRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstancePreset
     */
    watch?: boolean
}

export interface DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineInstanceReplicaSet
     */
    watch?: boolean
}

export interface DefaultApiDeleteCollectionNamespacedVirtualMachineRestoreRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineRestore
     */
    watch?: boolean
}

export interface DefaultApiDeleteCollectionNamespacedVirtualMachineSnapshotRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshot
     */
    watch?: boolean
}

export interface DefaultApiDeleteCollectionNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApideleteCollectionNamespacedVirtualMachineSnapshotContent
     */
    watch?: boolean
}

export interface DefaultApiDeleteCollectionVirtualMachineClusterFlavorRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClusterFlavor
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClusterFlavor
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApideleteCollectionVirtualMachineClusterFlavor
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClusterFlavor
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApideleteCollectionVirtualMachineClusterFlavor
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApideleteCollectionVirtualMachineClusterFlavor
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApideleteCollectionVirtualMachineClusterFlavor
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApideleteCollectionVirtualMachineClusterFlavor
     */
    watch?: boolean
}

export interface DefaultApiDeleteNamespacedKubeVirtRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApideleteNamespacedKubeVirt
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApideleteNamespacedKubeVirt
     */
    namespace: string
    /**
     * 
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedKubeVirt
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @type number
     * @memberof DefaultApideleteNamespacedKubeVirt
     */
    gracePeriodSeconds?: number
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @type boolean
     * @memberof DefaultApideleteNamespacedKubeVirt
     */
    orphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @type string
     * @memberof DefaultApideleteNamespacedKubeVirt
     */
    propagationPolicy?: string
}

export interface DefaultApiDeleteNamespacedVirtualMachineRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachine
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachine
     */
    namespace: string
    /**
     * 
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachine
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachine
     */
    gracePeriodSeconds?: number
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachine
     */
    orphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachine
     */
    propagationPolicy?: string
}

export interface DefaultApiDeleteNamespacedVirtualMachineFlavorRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineFlavor
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineFlavor
     */
    namespace: string
    /**
     * 
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineFlavor
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineFlavor
     */
    gracePeriodSeconds?: number
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineFlavor
     */
    orphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineFlavor
     */
    propagationPolicy?: string
}

export interface DefaultApiDeleteNamespacedVirtualMachineInstanceRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstance
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstance
     */
    namespace: string
    /**
     * 
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineInstance
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineInstance
     */
    gracePeriodSeconds?: number
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineInstance
     */
    orphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstance
     */
    propagationPolicy?: string
}

export interface DefaultApiDeleteNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceMigration
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceMigration
     */
    namespace: string
    /**
     * 
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceMigration
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceMigration
     */
    gracePeriodSeconds?: number
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceMigration
     */
    orphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceMigration
     */
    propagationPolicy?: string
}

export interface DefaultApiDeleteNamespacedVirtualMachineInstancePresetRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancePreset
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancePreset
     */
    namespace: string
    /**
     * 
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancePreset
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancePreset
     */
    gracePeriodSeconds?: number
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancePreset
     */
    orphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstancePreset
     */
    propagationPolicy?: string
}

export interface DefaultApiDeleteNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceReplicaSet
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceReplicaSet
     */
    namespace: string
    /**
     * 
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceReplicaSet
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceReplicaSet
     */
    gracePeriodSeconds?: number
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceReplicaSet
     */
    orphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineInstanceReplicaSet
     */
    propagationPolicy?: string
}

export interface DefaultApiDeleteNamespacedVirtualMachineRestoreRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineRestore
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineRestore
     */
    namespace: string
    /**
     * 
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineRestore
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineRestore
     */
    gracePeriodSeconds?: number
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineRestore
     */
    orphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineRestore
     */
    propagationPolicy?: string
}

export interface DefaultApiDeleteNamespacedVirtualMachineSnapshotRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshot
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshot
     */
    namespace: string
    /**
     * 
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshot
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshot
     */
    gracePeriodSeconds?: number
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshot
     */
    orphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshot
     */
    propagationPolicy?: string
}

export interface DefaultApiDeleteNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshotContent
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshotContent
     */
    namespace: string
    /**
     * 
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshotContent
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @type number
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshotContent
     */
    gracePeriodSeconds?: number
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @type boolean
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshotContent
     */
    orphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @type string
     * @memberof DefaultApideleteNamespacedVirtualMachineSnapshotContent
     */
    propagationPolicy?: string
}

export interface DefaultApiDeleteVirtualMachineClusterFlavorRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApideleteVirtualMachineClusterFlavor
     */
    name: string
    /**
     * 
     * @type K8sIoApimachineryPkgApisMetaV1DeleteOptions
     * @memberof DefaultApideleteVirtualMachineClusterFlavor
     */
    body: K8sIoApimachineryPkgApisMetaV1DeleteOptions
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @type number
     * @memberof DefaultApideleteVirtualMachineClusterFlavor
     */
    gracePeriodSeconds?: number
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @type boolean
     * @memberof DefaultApideleteVirtualMachineClusterFlavor
     */
    orphanDependents?: boolean
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @type string
     * @memberof DefaultApideleteVirtualMachineClusterFlavor
     */
    propagationPolicy?: string
}

export interface DefaultApiFunc1Request {
}

export interface DefaultApiFunc7Request {
}

export interface DefaultApiGetAPIGroupFlavorKubevirtIoRequest {
}

export interface DefaultApiGetAPIGroupKubevirtIoRequest {
}

export interface DefaultApiGetAPIGroupListRequest {
}

export interface DefaultApiGetAPIGroupSnapshotKubevirtIoRequest {
}

export interface DefaultApiGetAPIResourcesFlavorKubevirtIoV1alpha1Request {
}

export interface DefaultApiGetAPIResourcesKubevirtIoV1Request {
}

export interface DefaultApiGetAPIResourcesSnapshotKubevirtIoV1alpha1Request {
}

export interface DefaultApiGetRootPathsRequest {
}

export interface DefaultApiHandleDumpProfilerRequest {
}

export interface DefaultApiHandleStartProfilerRequest {
}

export interface DefaultApiHandleStopProfilerRequest {
}

export interface DefaultApiListKubeVirtForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistKubeVirtForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiListNamespacedKubeVirtRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistNamespacedKubeVirt
     */
    watch?: boolean
}

export interface DefaultApiListNamespacedVirtualMachineRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachine
     */
    watch?: boolean
}

export interface DefaultApiListNamespacedVirtualMachineFlavorRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineFlavor
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineFlavor
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineFlavor
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineFlavor
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineFlavor
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineFlavor
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineFlavor
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineFlavor
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineFlavor
     */
    watch?: boolean
}

export interface DefaultApiListNamespacedVirtualMachineInstanceRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstance
     */
    watch?: boolean
}

export interface DefaultApiListNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceMigration
     */
    watch?: boolean
}

export interface DefaultApiListNamespacedVirtualMachineInstancePresetRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstancePreset
     */
    watch?: boolean
}

export interface DefaultApiListNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineInstanceReplicaSet
     */
    watch?: boolean
}

export interface DefaultApiListNamespacedVirtualMachineRestoreRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineRestore
     */
    watch?: boolean
}

export interface DefaultApiListNamespacedVirtualMachineSnapshotRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshot
     */
    watch?: boolean
}

export interface DefaultApiListNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistNamespacedVirtualMachineSnapshotContent
     */
    watch?: boolean
}

export interface DefaultApiListVirtualMachineClusterFlavorRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistVirtualMachineClusterFlavor
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistVirtualMachineClusterFlavor
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineClusterFlavor
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistVirtualMachineClusterFlavor
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistVirtualMachineClusterFlavor
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistVirtualMachineClusterFlavor
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistVirtualMachineClusterFlavor
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineClusterFlavor
     */
    watch?: boolean
}

export interface DefaultApiListVirtualMachineFlavorForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistVirtualMachineFlavorForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistVirtualMachineFlavorForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineFlavorForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistVirtualMachineFlavorForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistVirtualMachineFlavorForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistVirtualMachineFlavorForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistVirtualMachineFlavorForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineFlavorForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiListVirtualMachineForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiListVirtualMachineInstanceForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstanceForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiListVirtualMachineInstanceMigrationForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstanceMigrationForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiListVirtualMachineInstancePresetForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstancePresetForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiListVirtualMachineInstanceReplicaSetForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineInstanceReplicaSetForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiListVirtualMachineRestoreForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineRestoreForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiListVirtualMachineSnapshotContentForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineSnapshotContentForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiListVirtualMachineSnapshotForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApilistVirtualMachineSnapshotForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiPatchNamespacedKubeVirtRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApipatchNamespacedKubeVirt
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApipatchNamespacedKubeVirt
     */
    namespace: string
    /**
     * 
     * @type any
     * @memberof DefaultApipatchNamespacedKubeVirt
     */
    body: any
}

export interface DefaultApiPatchNamespacedVirtualMachineRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachine
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachine
     */
    namespace: string
    /**
     * 
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachine
     */
    body: any
}

export interface DefaultApiPatchNamespacedVirtualMachineFlavorRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineFlavor
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineFlavor
     */
    namespace: string
    /**
     * 
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineFlavor
     */
    body: any
}

export interface DefaultApiPatchNamespacedVirtualMachineInstanceRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstance
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstance
     */
    namespace: string
    /**
     * 
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineInstance
     */
    body: any
}

export interface DefaultApiPatchNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstanceMigration
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstanceMigration
     */
    namespace: string
    /**
     * 
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineInstanceMigration
     */
    body: any
}

export interface DefaultApiPatchNamespacedVirtualMachineInstancePresetRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstancePreset
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstancePreset
     */
    namespace: string
    /**
     * 
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineInstancePreset
     */
    body: any
}

export interface DefaultApiPatchNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstanceReplicaSet
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineInstanceReplicaSet
     */
    namespace: string
    /**
     * 
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineInstanceReplicaSet
     */
    body: any
}

export interface DefaultApiPatchNamespacedVirtualMachineRestoreRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineRestore
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineRestore
     */
    namespace: string
    /**
     * 
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineRestore
     */
    body: any
}

export interface DefaultApiPatchNamespacedVirtualMachineSnapshotRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineSnapshot
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineSnapshot
     */
    namespace: string
    /**
     * 
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineSnapshot
     */
    body: any
}

export interface DefaultApiPatchNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineSnapshotContent
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApipatchNamespacedVirtualMachineSnapshotContent
     */
    namespace: string
    /**
     * 
     * @type any
     * @memberof DefaultApipatchNamespacedVirtualMachineSnapshotContent
     */
    body: any
}

export interface DefaultApiPatchVirtualMachineClusterFlavorRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApipatchVirtualMachineClusterFlavor
     */
    name: string
    /**
     * 
     * @type any
     * @memberof DefaultApipatchVirtualMachineClusterFlavor
     */
    body: any
}

export interface DefaultApiReadNamespacedKubeVirtRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireadNamespacedKubeVirt
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireadNamespacedKubeVirt
     */
    namespace: string
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @type boolean
     * @memberof DefaultApireadNamespacedKubeVirt
     */
    exact?: boolean
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * @type boolean
     * @memberof DefaultApireadNamespacedKubeVirt
     */
    _export?: boolean
}

export interface DefaultApiReadNamespacedVirtualMachineRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachine
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachine
     */
    namespace: string
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachine
     */
    exact?: boolean
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachine
     */
    _export?: boolean
}

export interface DefaultApiReadNamespacedVirtualMachineFlavorRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineFlavor
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineFlavor
     */
    namespace: string
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineFlavor
     */
    exact?: boolean
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineFlavor
     */
    _export?: boolean
}

export interface DefaultApiReadNamespacedVirtualMachineInstanceRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstance
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstance
     */
    namespace: string
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstance
     */
    exact?: boolean
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstance
     */
    _export?: boolean
}

export interface DefaultApiReadNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceMigration
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceMigration
     */
    namespace: string
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceMigration
     */
    exact?: boolean
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceMigration
     */
    _export?: boolean
}

export interface DefaultApiReadNamespacedVirtualMachineInstancePresetRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstancePreset
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstancePreset
     */
    namespace: string
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstancePreset
     */
    exact?: boolean
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstancePreset
     */
    _export?: boolean
}

export interface DefaultApiReadNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceReplicaSet
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceReplicaSet
     */
    namespace: string
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceReplicaSet
     */
    exact?: boolean
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineInstanceReplicaSet
     */
    _export?: boolean
}

export interface DefaultApiReadNamespacedVirtualMachineRestoreRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineRestore
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineRestore
     */
    namespace: string
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineRestore
     */
    exact?: boolean
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineRestore
     */
    _export?: boolean
}

export interface DefaultApiReadNamespacedVirtualMachineSnapshotRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshot
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshot
     */
    namespace: string
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshot
     */
    exact?: boolean
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshot
     */
    _export?: boolean
}

export interface DefaultApiReadNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshotContent
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshotContent
     */
    namespace: string
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshotContent
     */
    exact?: boolean
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * @type boolean
     * @memberof DefaultApireadNamespacedVirtualMachineSnapshotContent
     */
    _export?: boolean
}

export interface DefaultApiReadVirtualMachineClusterFlavorRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireadVirtualMachineClusterFlavor
     */
    name: string
    /**
     * Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @type boolean
     * @memberof DefaultApireadVirtualMachineClusterFlavor
     */
    exact?: boolean
    /**
     * Should this value be exported. Export strips fields that a user can not specify.
     * @type boolean
     * @memberof DefaultApireadVirtualMachineClusterFlavor
     */
    _export?: boolean
}

export interface DefaultApiReplaceNamespacedKubeVirtRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireplaceNamespacedKubeVirt
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireplaceNamespacedKubeVirt
     */
    namespace: string
    /**
     * 
     * @type V1KubeVirt
     * @memberof DefaultApireplaceNamespacedKubeVirt
     */
    body: V1KubeVirt
}

export interface DefaultApiReplaceNamespacedVirtualMachineRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachine
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachine
     */
    namespace: string
    /**
     * 
     * @type V1VirtualMachine
     * @memberof DefaultApireplaceNamespacedVirtualMachine
     */
    body: V1VirtualMachine
}

export interface DefaultApiReplaceNamespacedVirtualMachineFlavorRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineFlavor
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineFlavor
     */
    namespace: string
    /**
     * 
     * @type V1alpha1VirtualMachineFlavor
     * @memberof DefaultApireplaceNamespacedVirtualMachineFlavor
     */
    body: V1alpha1VirtualMachineFlavor
}

export interface DefaultApiReplaceNamespacedVirtualMachineInstanceRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstance
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstance
     */
    namespace: string
    /**
     * 
     * @type V1VirtualMachineInstance
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstance
     */
    body: V1VirtualMachineInstance
}

export interface DefaultApiReplaceNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstanceMigration
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstanceMigration
     */
    namespace: string
    /**
     * 
     * @type V1VirtualMachineInstanceMigration
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstanceMigration
     */
    body: V1VirtualMachineInstanceMigration
}

export interface DefaultApiReplaceNamespacedVirtualMachineInstancePresetRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstancePreset
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstancePreset
     */
    namespace: string
    /**
     * 
     * @type V1VirtualMachineInstancePreset
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstancePreset
     */
    body: V1VirtualMachineInstancePreset
}

export interface DefaultApiReplaceNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstanceReplicaSet
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstanceReplicaSet
     */
    namespace: string
    /**
     * 
     * @type V1VirtualMachineInstanceReplicaSet
     * @memberof DefaultApireplaceNamespacedVirtualMachineInstanceReplicaSet
     */
    body: V1VirtualMachineInstanceReplicaSet
}

export interface DefaultApiReplaceNamespacedVirtualMachineRestoreRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineRestore
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineRestore
     */
    namespace: string
    /**
     * 
     * @type V1alpha1VirtualMachineRestore
     * @memberof DefaultApireplaceNamespacedVirtualMachineRestore
     */
    body: V1alpha1VirtualMachineRestore
}

export interface DefaultApiReplaceNamespacedVirtualMachineSnapshotRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineSnapshot
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineSnapshot
     */
    namespace: string
    /**
     * 
     * @type V1alpha1VirtualMachineSnapshot
     * @memberof DefaultApireplaceNamespacedVirtualMachineSnapshot
     */
    body: V1alpha1VirtualMachineSnapshot
}

export interface DefaultApiReplaceNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineSnapshotContent
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApireplaceNamespacedVirtualMachineSnapshotContent
     */
    namespace: string
    /**
     * 
     * @type V1alpha1VirtualMachineSnapshotContent
     * @memberof DefaultApireplaceNamespacedVirtualMachineSnapshotContent
     */
    body: V1alpha1VirtualMachineSnapshotContent
}

export interface DefaultApiReplaceVirtualMachineClusterFlavorRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApireplaceVirtualMachineClusterFlavor
     */
    name: string
    /**
     * 
     * @type V1alpha1VirtualMachineClusterFlavor
     * @memberof DefaultApireplaceVirtualMachineClusterFlavor
     */
    body: V1alpha1VirtualMachineClusterFlavor
}

export interface DefaultApiV1CheckHealthRequest {
}

export interface DefaultApiV1ConsoleRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1Console
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1Console
     */
    namespace: string
}

export interface DefaultApiV1FilesystemlistRequest {
}

export interface DefaultApiV1FreezeRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1Freeze
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1Freeze
     */
    namespace: string
    /**
     * 
     * @type V1FreezeUnfreezeTimeout
     * @memberof DefaultApiv1Freeze
     */
    body: V1FreezeUnfreezeTimeout
}

export interface DefaultApiV1GuestfsRequest {
}

export interface DefaultApiV1GuestosinfoRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1Guestosinfo
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1Guestosinfo
     */
    namespace: string
}

export interface DefaultApiV1MigrateRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1Migrate
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1Migrate
     */
    namespace: string
}

export interface DefaultApiV1PauseRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1Pause
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1Pause
     */
    namespace: string
    /**
     * 
     * @type V1PauseOptions
     * @memberof DefaultApiv1Pause
     */
    body: V1PauseOptions
}

export interface DefaultApiV1RestartRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1Restart
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1Restart
     */
    namespace: string
    /**
     * 
     * @type V1RestartOptions
     * @memberof DefaultApiv1Restart
     */
    body?: V1RestartOptions
}

export interface DefaultApiV1StartRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1Start
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1Start
     */
    namespace: string
    /**
     * 
     * @type V1StartOptions
     * @memberof DefaultApiv1Start
     */
    body: V1StartOptions
}

export interface DefaultApiV1StopRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1Stop
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1Stop
     */
    namespace: string
    /**
     * 
     * @type V1StopOptions
     * @memberof DefaultApiv1Stop
     */
    body?: V1StopOptions
}

export interface DefaultApiV1TestRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1Test
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1Test
     */
    namespace: string
}

export interface DefaultApiV1UnfreezeRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1Unfreeze
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1Unfreeze
     */
    namespace: string
}

export interface DefaultApiV1UnpauseRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1Unpause
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1Unpause
     */
    namespace: string
    /**
     * 
     * @type V1UnpauseOptions
     * @memberof DefaultApiv1Unpause
     */
    body: V1UnpauseOptions
}

export interface DefaultApiV1UserlistRequest {
}

export interface DefaultApiV1VNCRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1VNC
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1VNC
     */
    namespace: string
}

export interface DefaultApiV1VersionRequest {
}

export interface DefaultApiV1alpha3CheckHealthRequest {
}

export interface DefaultApiV1alpha3ConsoleRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3Console
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3Console
     */
    namespace: string
}

export interface DefaultApiV1alpha3FilesystemlistRequest {
}

export interface DefaultApiV1alpha3FreezeRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3Freeze
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3Freeze
     */
    namespace: string
    /**
     * 
     * @type V1FreezeUnfreezeTimeout
     * @memberof DefaultApiv1alpha3Freeze
     */
    body: V1FreezeUnfreezeTimeout
}

export interface DefaultApiV1alpha3GetSubAPIGroupRequest {
}

export interface DefaultApiV1alpha3GuestfsRequest {
}

export interface DefaultApiV1alpha3GuestosinfoRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3Guestosinfo
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3Guestosinfo
     */
    namespace: string
}

export interface DefaultApiV1alpha3MigrateRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3Migrate
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3Migrate
     */
    namespace: string
}

export interface DefaultApiV1alpha3PauseRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3Pause
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3Pause
     */
    namespace: string
    /**
     * 
     * @type V1PauseOptions
     * @memberof DefaultApiv1alpha3Pause
     */
    body: V1PauseOptions
}

export interface DefaultApiV1alpha3RestartRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3Restart
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3Restart
     */
    namespace: string
    /**
     * 
     * @type V1RestartOptions
     * @memberof DefaultApiv1alpha3Restart
     */
    body?: V1RestartOptions
}

export interface DefaultApiV1alpha3StartRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3Start
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3Start
     */
    namespace: string
    /**
     * 
     * @type V1StartOptions
     * @memberof DefaultApiv1alpha3Start
     */
    body: V1StartOptions
}

export interface DefaultApiV1alpha3StopRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3Stop
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3Stop
     */
    namespace: string
    /**
     * 
     * @type V1StopOptions
     * @memberof DefaultApiv1alpha3Stop
     */
    body?: V1StopOptions
}

export interface DefaultApiV1alpha3TestRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3Test
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3Test
     */
    namespace: string
}

export interface DefaultApiV1alpha3UnfreezeRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3Unfreeze
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3Unfreeze
     */
    namespace: string
}

export interface DefaultApiV1alpha3UnpauseRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3Unpause
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3Unpause
     */
    namespace: string
    /**
     * 
     * @type V1UnpauseOptions
     * @memberof DefaultApiv1alpha3Unpause
     */
    body: V1UnpauseOptions
}

export interface DefaultApiV1alpha3UserlistRequest {
}

export interface DefaultApiV1alpha3VNCRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3VNC
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3VNC
     */
    namespace: string
}

export interface DefaultApiV1alpha3VersionRequest {
}

export interface DefaultApiV1alpha3dumpClusterProfilerRequest {
}

export interface DefaultApiV1alpha3getAPISubResourcesRequest {
}

export interface DefaultApiV1alpha3startClusterProfilerRequest {
}

export interface DefaultApiV1alpha3stopClusterProfilerRequest {
}

export interface DefaultApiV1alpha3usbredirRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3usbredir
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3usbredir
     */
    namespace: string
}

export interface DefaultApiV1alpha3vmAddvolumeRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3vmAddvolume
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3vmAddvolume
     */
    namespace: string
    /**
     * 
     * @type V1AddVolumeOptions
     * @memberof DefaultApiv1alpha3vmAddvolume
     */
    body: V1AddVolumeOptions
}

export interface DefaultApiV1alpha3vmPortForwardRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3vmPortForward
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3vmPortForward
     */
    namespace: string
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * @type string
     * @memberof DefaultApiv1alpha3vmPortForward
     */
    port: string
}

export interface DefaultApiV1alpha3vmPortForwardWithProtocolRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3vmPortForwardWithProtocol
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3vmPortForwardWithProtocol
     */
    namespace: string
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * @type string
     * @memberof DefaultApiv1alpha3vmPortForwardWithProtocol
     */
    port: string
    /**
     * The protocol for portforward on the VirtualMachineInstance.
     * @type string
     * @memberof DefaultApiv1alpha3vmPortForwardWithProtocol
     */
    protocol: string
}

export interface DefaultApiV1alpha3vmRemovevolumeRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3vmRemovevolume
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3vmRemovevolume
     */
    namespace: string
    /**
     * 
     * @type V1RemoveVolumeOptions
     * @memberof DefaultApiv1alpha3vmRemovevolume
     */
    body: V1RemoveVolumeOptions
}

export interface DefaultApiV1alpha3vmiAddvolumeRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3vmiAddvolume
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3vmiAddvolume
     */
    namespace: string
    /**
     * 
     * @type V1AddVolumeOptions
     * @memberof DefaultApiv1alpha3vmiAddvolume
     */
    body: V1AddVolumeOptions
}

export interface DefaultApiV1alpha3vmiPortForwardRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3vmiPortForward
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3vmiPortForward
     */
    namespace: string
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * @type string
     * @memberof DefaultApiv1alpha3vmiPortForward
     */
    port: string
}

export interface DefaultApiV1alpha3vmiPortForwardWithProtocolRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3vmiPortForwardWithProtocol
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3vmiPortForwardWithProtocol
     */
    namespace: string
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * @type string
     * @memberof DefaultApiv1alpha3vmiPortForwardWithProtocol
     */
    port: string
    /**
     * The protocol for portforward on the VirtualMachineInstance.
     * @type string
     * @memberof DefaultApiv1alpha3vmiPortForwardWithProtocol
     */
    protocol: string
}

export interface DefaultApiV1alpha3vmiRemovevolumeRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1alpha3vmiRemovevolume
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1alpha3vmiRemovevolume
     */
    namespace: string
    /**
     * 
     * @type V1RemoveVolumeOptions
     * @memberof DefaultApiv1alpha3vmiRemovevolume
     */
    body: V1RemoveVolumeOptions
}

export interface DefaultApiV1dumpClusterProfilerRequest {
}

export interface DefaultApiV1getAPISubResourcesRequest {
}

export interface DefaultApiV1startClusterProfilerRequest {
}

export interface DefaultApiV1stopClusterProfilerRequest {
}

export interface DefaultApiV1usbredirRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1usbredir
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1usbredir
     */
    namespace: string
}

export interface DefaultApiV1vmAddvolumeRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1vmAddvolume
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1vmAddvolume
     */
    namespace: string
    /**
     * 
     * @type V1AddVolumeOptions
     * @memberof DefaultApiv1vmAddvolume
     */
    body: V1AddVolumeOptions
}

export interface DefaultApiV1vmPortForwardRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1vmPortForward
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1vmPortForward
     */
    namespace: string
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * @type string
     * @memberof DefaultApiv1vmPortForward
     */
    port: string
}

export interface DefaultApiV1vmPortForwardWithProtocolRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1vmPortForwardWithProtocol
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1vmPortForwardWithProtocol
     */
    namespace: string
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * @type string
     * @memberof DefaultApiv1vmPortForwardWithProtocol
     */
    port: string
    /**
     * The protocol for portforward on the VirtualMachineInstance.
     * @type string
     * @memberof DefaultApiv1vmPortForwardWithProtocol
     */
    protocol: string
}

export interface DefaultApiV1vmRemovevolumeRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1vmRemovevolume
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1vmRemovevolume
     */
    namespace: string
    /**
     * 
     * @type V1RemoveVolumeOptions
     * @memberof DefaultApiv1vmRemovevolume
     */
    body: V1RemoveVolumeOptions
}

export interface DefaultApiV1vmiAddvolumeRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1vmiAddvolume
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1vmiAddvolume
     */
    namespace: string
    /**
     * 
     * @type V1AddVolumeOptions
     * @memberof DefaultApiv1vmiAddvolume
     */
    body: V1AddVolumeOptions
}

export interface DefaultApiV1vmiPortForwardRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1vmiPortForward
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1vmiPortForward
     */
    namespace: string
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * @type string
     * @memberof DefaultApiv1vmiPortForward
     */
    port: string
}

export interface DefaultApiV1vmiPortForwardWithProtocolRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1vmiPortForwardWithProtocol
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1vmiPortForwardWithProtocol
     */
    namespace: string
    /**
     * The target port for portforward on the VirtualMachineInstance.
     * @type string
     * @memberof DefaultApiv1vmiPortForwardWithProtocol
     */
    port: string
    /**
     * The protocol for portforward on the VirtualMachineInstance.
     * @type string
     * @memberof DefaultApiv1vmiPortForwardWithProtocol
     */
    protocol: string
}

export interface DefaultApiV1vmiRemovevolumeRequest {
    /**
     * Name of the resource
     * @type string
     * @memberof DefaultApiv1vmiRemovevolume
     */
    name: string
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiv1vmiRemovevolume
     */
    namespace: string
    /**
     * 
     * @type V1RemoveVolumeOptions
     * @memberof DefaultApiv1vmiRemovevolume
     */
    body: V1RemoveVolumeOptions
}

export interface DefaultApiWatchKubeVirtListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchKubeVirtListForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiWatchNamespacedKubeVirtRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedKubeVirt
     */
    watch?: boolean
}

export interface DefaultApiWatchNamespacedVirtualMachineRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachine
     */
    watch?: boolean
}

export interface DefaultApiWatchNamespacedVirtualMachineFlavorRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineFlavor
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineFlavor
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineFlavor
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineFlavor
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineFlavor
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineFlavor
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineFlavor
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineFlavor
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineFlavor
     */
    watch?: boolean
}

export interface DefaultApiWatchNamespacedVirtualMachineInstanceRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstance
     */
    watch?: boolean
}

export interface DefaultApiWatchNamespacedVirtualMachineInstanceMigrationRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceMigration
     */
    watch?: boolean
}

export interface DefaultApiWatchNamespacedVirtualMachineInstancePresetRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstancePreset
     */
    watch?: boolean
}

export interface DefaultApiWatchNamespacedVirtualMachineInstanceReplicaSetRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineInstanceReplicaSet
     */
    watch?: boolean
}

export interface DefaultApiWatchNamespacedVirtualMachineRestoreRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineRestore
     */
    watch?: boolean
}

export interface DefaultApiWatchNamespacedVirtualMachineSnapshotRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshot
     */
    watch?: boolean
}

export interface DefaultApiWatchNamespacedVirtualMachineSnapshotContentRequest {
    /**
     * Object name and auth scope, such as for teams and projects
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    namespace: string
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchNamespacedVirtualMachineSnapshotContent
     */
    watch?: boolean
}

export interface DefaultApiWatchVirtualMachineClusterFlavorListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineClusterFlavorListForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineClusterFlavorListForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineClusterFlavorListForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchVirtualMachineClusterFlavorListForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineClusterFlavorListForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineClusterFlavorListForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineClusterFlavorListForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineClusterFlavorListForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiWatchVirtualMachineFlavorListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineFlavorListForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineFlavorListForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineFlavorListForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchVirtualMachineFlavorListForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineFlavorListForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineFlavorListForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineFlavorListForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineFlavorListForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiWatchVirtualMachineInstanceListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstanceListForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiWatchVirtualMachineInstanceMigrationListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstanceMigrationListForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiWatchVirtualMachineInstancePresetListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstancePresetListForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiWatchVirtualMachineInstanceReplicaSetListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineInstanceReplicaSetListForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiWatchVirtualMachineListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineListForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiWatchVirtualMachineRestoreListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineRestoreListForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiWatchVirtualMachineSnapshotContentListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineSnapshotContentListForAllNamespaces
     */
    watch?: boolean
}

export interface DefaultApiWatchVirtualMachineSnapshotListForAllNamespacesRequest {
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    _continue?: string
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    fieldSelector?: string
    /**
     * If true, partially initialized resources are included in the response.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    includeUninitialized?: boolean
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    labelSelector?: string
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    limit?: number
    /**
     * When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @type string
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    resourceVersion?: string
    /**
     * TimeoutSeconds for the list/watch call.
     * @type number
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    timeoutSeconds?: number
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @type boolean
     * @memberof DefaultApiwatchVirtualMachineSnapshotListForAllNamespaces
     */
    watch?: boolean
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a KubeVirt object.
     * @param param the request object
     */
    public createNamespacedKubeVirt(param: DefaultApiCreateNamespacedKubeVirtRequest, options?: Configuration): Promise<V1KubeVirt> {
        return this.api.createNamespacedKubeVirt(param.namespace, param.body,  options).toPromise();
    }

    /**
     * Create a VirtualMachine object.
     * @param param the request object
     */
    public createNamespacedVirtualMachine(param: DefaultApiCreateNamespacedVirtualMachineRequest, options?: Configuration): Promise<V1VirtualMachine> {
        return this.api.createNamespacedVirtualMachine(param.namespace, param.body,  options).toPromise();
    }

    /**
     * Create a VirtualMachineFlavor object.
     * @param param the request object
     */
    public createNamespacedVirtualMachineFlavor(param: DefaultApiCreateNamespacedVirtualMachineFlavorRequest, options?: Configuration): Promise<V1alpha1VirtualMachineFlavor> {
        return this.api.createNamespacedVirtualMachineFlavor(param.namespace, param.body,  options).toPromise();
    }

    /**
     * Create a VirtualMachineInstance object.
     * @param param the request object
     */
    public createNamespacedVirtualMachineInstance(param: DefaultApiCreateNamespacedVirtualMachineInstanceRequest, options?: Configuration): Promise<V1VirtualMachineInstance> {
        return this.api.createNamespacedVirtualMachineInstance(param.namespace, param.body,  options).toPromise();
    }

    /**
     * Create a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    public createNamespacedVirtualMachineInstanceMigration(param: DefaultApiCreateNamespacedVirtualMachineInstanceMigrationRequest, options?: Configuration): Promise<V1VirtualMachineInstanceMigration> {
        return this.api.createNamespacedVirtualMachineInstanceMigration(param.namespace, param.body,  options).toPromise();
    }

    /**
     * Create a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    public createNamespacedVirtualMachineInstancePreset(param: DefaultApiCreateNamespacedVirtualMachineInstancePresetRequest, options?: Configuration): Promise<V1VirtualMachineInstancePreset> {
        return this.api.createNamespacedVirtualMachineInstancePreset(param.namespace, param.body,  options).toPromise();
    }

    /**
     * Create a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    public createNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiCreateNamespacedVirtualMachineInstanceReplicaSetRequest, options?: Configuration): Promise<V1VirtualMachineInstanceReplicaSet> {
        return this.api.createNamespacedVirtualMachineInstanceReplicaSet(param.namespace, param.body,  options).toPromise();
    }

    /**
     * Create a VirtualMachineRestore object.
     * @param param the request object
     */
    public createNamespacedVirtualMachineRestore(param: DefaultApiCreateNamespacedVirtualMachineRestoreRequest, options?: Configuration): Promise<V1alpha1VirtualMachineRestore> {
        return this.api.createNamespacedVirtualMachineRestore(param.namespace, param.body,  options).toPromise();
    }

    /**
     * Create a VirtualMachineSnapshot object.
     * @param param the request object
     */
    public createNamespacedVirtualMachineSnapshot(param: DefaultApiCreateNamespacedVirtualMachineSnapshotRequest, options?: Configuration): Promise<V1alpha1VirtualMachineSnapshot> {
        return this.api.createNamespacedVirtualMachineSnapshot(param.namespace, param.body,  options).toPromise();
    }

    /**
     * Create a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    public createNamespacedVirtualMachineSnapshotContent(param: DefaultApiCreateNamespacedVirtualMachineSnapshotContentRequest, options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotContent> {
        return this.api.createNamespacedVirtualMachineSnapshotContent(param.namespace, param.body,  options).toPromise();
    }

    /**
     * Create a VirtualMachineClusterFlavor object.
     * @param param the request object
     */
    public createVirtualMachineClusterFlavor(param: DefaultApiCreateVirtualMachineClusterFlavorRequest, options?: Configuration): Promise<V1alpha1VirtualMachineClusterFlavor> {
        return this.api.createVirtualMachineClusterFlavor(param.body,  options).toPromise();
    }

    /**
     * Delete a collection of KubeVirt objects.
     * @param param the request object
     */
    public deleteCollectionNamespacedKubeVirt(param: DefaultApiDeleteCollectionNamespacedKubeVirtRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteCollectionNamespacedKubeVirt(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Delete a collection of VirtualMachine objects.
     * @param param the request object
     */
    public deleteCollectionNamespacedVirtualMachine(param: DefaultApiDeleteCollectionNamespacedVirtualMachineRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteCollectionNamespacedVirtualMachine(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Delete a collection of VirtualMachineFlavor objects.
     * @param param the request object
     */
    public deleteCollectionNamespacedVirtualMachineFlavor(param: DefaultApiDeleteCollectionNamespacedVirtualMachineFlavorRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteCollectionNamespacedVirtualMachineFlavor(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Delete a collection of VirtualMachineInstance objects.
     * @param param the request object
     */
    public deleteCollectionNamespacedVirtualMachineInstance(param: DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteCollectionNamespacedVirtualMachineInstance(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Delete a collection of VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    public deleteCollectionNamespacedVirtualMachineInstanceMigration(param: DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceMigrationRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteCollectionNamespacedVirtualMachineInstanceMigration(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Delete a collection of VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    public deleteCollectionNamespacedVirtualMachineInstancePreset(param: DefaultApiDeleteCollectionNamespacedVirtualMachineInstancePresetRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteCollectionNamespacedVirtualMachineInstancePreset(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Delete a collection of VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    public deleteCollectionNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiDeleteCollectionNamespacedVirtualMachineInstanceReplicaSetRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteCollectionNamespacedVirtualMachineInstanceReplicaSet(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Delete a collection of VirtualMachineRestore objects.
     * @param param the request object
     */
    public deleteCollectionNamespacedVirtualMachineRestore(param: DefaultApiDeleteCollectionNamespacedVirtualMachineRestoreRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteCollectionNamespacedVirtualMachineRestore(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Delete a collection of VirtualMachineSnapshot objects.
     * @param param the request object
     */
    public deleteCollectionNamespacedVirtualMachineSnapshot(param: DefaultApiDeleteCollectionNamespacedVirtualMachineSnapshotRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteCollectionNamespacedVirtualMachineSnapshot(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Delete a collection of VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    public deleteCollectionNamespacedVirtualMachineSnapshotContent(param: DefaultApiDeleteCollectionNamespacedVirtualMachineSnapshotContentRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteCollectionNamespacedVirtualMachineSnapshotContent(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Delete a collection of VirtualMachineClusterFlavor objects.
     * @param param the request object
     */
    public deleteCollectionVirtualMachineClusterFlavor(param: DefaultApiDeleteCollectionVirtualMachineClusterFlavorRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteCollectionVirtualMachineClusterFlavor(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Delete a KubeVirt object.
     * @param param the request object
     */
    public deleteNamespacedKubeVirt(param: DefaultApiDeleteNamespacedKubeVirtRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteNamespacedKubeVirt(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy,  options).toPromise();
    }

    /**
     * Delete a VirtualMachine object.
     * @param param the request object
     */
    public deleteNamespacedVirtualMachine(param: DefaultApiDeleteNamespacedVirtualMachineRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteNamespacedVirtualMachine(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy,  options).toPromise();
    }

    /**
     * Delete a VirtualMachineFlavor object.
     * @param param the request object
     */
    public deleteNamespacedVirtualMachineFlavor(param: DefaultApiDeleteNamespacedVirtualMachineFlavorRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteNamespacedVirtualMachineFlavor(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy,  options).toPromise();
    }

    /**
     * Delete a VirtualMachineInstance object.
     * @param param the request object
     */
    public deleteNamespacedVirtualMachineInstance(param: DefaultApiDeleteNamespacedVirtualMachineInstanceRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteNamespacedVirtualMachineInstance(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy,  options).toPromise();
    }

    /**
     * Delete a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    public deleteNamespacedVirtualMachineInstanceMigration(param: DefaultApiDeleteNamespacedVirtualMachineInstanceMigrationRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteNamespacedVirtualMachineInstanceMigration(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy,  options).toPromise();
    }

    /**
     * Delete a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    public deleteNamespacedVirtualMachineInstancePreset(param: DefaultApiDeleteNamespacedVirtualMachineInstancePresetRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteNamespacedVirtualMachineInstancePreset(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy,  options).toPromise();
    }

    /**
     * Delete a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    public deleteNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiDeleteNamespacedVirtualMachineInstanceReplicaSetRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteNamespacedVirtualMachineInstanceReplicaSet(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy,  options).toPromise();
    }

    /**
     * Delete a VirtualMachineRestore object.
     * @param param the request object
     */
    public deleteNamespacedVirtualMachineRestore(param: DefaultApiDeleteNamespacedVirtualMachineRestoreRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteNamespacedVirtualMachineRestore(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy,  options).toPromise();
    }

    /**
     * Delete a VirtualMachineSnapshot object.
     * @param param the request object
     */
    public deleteNamespacedVirtualMachineSnapshot(param: DefaultApiDeleteNamespacedVirtualMachineSnapshotRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteNamespacedVirtualMachineSnapshot(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy,  options).toPromise();
    }

    /**
     * Delete a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    public deleteNamespacedVirtualMachineSnapshotContent(param: DefaultApiDeleteNamespacedVirtualMachineSnapshotContentRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteNamespacedVirtualMachineSnapshotContent(param.name, param.namespace, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy,  options).toPromise();
    }

    /**
     * Delete a VirtualMachineClusterFlavor object.
     * @param param the request object
     */
    public deleteVirtualMachineClusterFlavor(param: DefaultApiDeleteVirtualMachineClusterFlavorRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        return this.api.deleteVirtualMachineClusterFlavor(param.name, param.body, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy,  options).toPromise();
    }

    /**
     * Health endpoint
     * @param param the request object
     */
    public func1(param: DefaultApiFunc1Request, options?: Configuration): Promise<void> {
        return this.api.func1( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public func7(param: DefaultApiFunc7Request, options?: Configuration): Promise<void> {
        return this.api.func7( options).toPromise();
    }

    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    public getAPIGroupFlavorKubevirtIo(param: DefaultApiGetAPIGroupFlavorKubevirtIoRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup> {
        return this.api.getAPIGroupFlavorKubevirtIo( options).toPromise();
    }

    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    public getAPIGroupKubevirtIo(param: DefaultApiGetAPIGroupKubevirtIoRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup> {
        return this.api.getAPIGroupKubevirtIo( options).toPromise();
    }

    /**
     * Get a KubeVirt API GroupList
     * @param param the request object
     */
    public getAPIGroupList(param: DefaultApiGetAPIGroupListRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIGroupList> {
        return this.api.getAPIGroupList( options).toPromise();
    }

    /**
     * Get a KubeVirt API group
     * @param param the request object
     */
    public getAPIGroupSnapshotKubevirtIo(param: DefaultApiGetAPIGroupSnapshotKubevirtIoRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup> {
        return this.api.getAPIGroupSnapshotKubevirtIo( options).toPromise();
    }

    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    public getAPIResourcesFlavorKubevirtIoV1alpha1(param: DefaultApiGetAPIResourcesFlavorKubevirtIoV1alpha1Request, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList> {
        return this.api.getAPIResourcesFlavorKubevirtIoV1alpha1( options).toPromise();
    }

    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    public getAPIResourcesKubevirtIoV1(param: DefaultApiGetAPIResourcesKubevirtIoV1Request, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList> {
        return this.api.getAPIResourcesKubevirtIoV1( options).toPromise();
    }

    /**
     * Get KubeVirt API Resources
     * @param param the request object
     */
    public getAPIResourcesSnapshotKubevirtIoV1alpha1(param: DefaultApiGetAPIResourcesSnapshotKubevirtIoV1alpha1Request, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList> {
        return this.api.getAPIResourcesSnapshotKubevirtIoV1alpha1( options).toPromise();
    }

    /**
     * Get KubeVirt API root paths
     * @param param the request object
     */
    public getRootPaths(param: DefaultApiGetRootPathsRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1RootPaths> {
        return this.api.getRootPaths( options).toPromise();
    }

    /**
     * dump profiler results endpoint
     * @param param the request object
     */
    public handleDumpProfiler(param: DefaultApiHandleDumpProfilerRequest, options?: Configuration): Promise<void> {
        return this.api.handleDumpProfiler( options).toPromise();
    }

    /**
     * start profiler endpoint
     * @param param the request object
     */
    public handleStartProfiler(param: DefaultApiHandleStartProfilerRequest, options?: Configuration): Promise<void> {
        return this.api.handleStartProfiler( options).toPromise();
    }

    /**
     * stop profiler endpoint
     * @param param the request object
     */
    public handleStopProfiler(param: DefaultApiHandleStopProfilerRequest, options?: Configuration): Promise<void> {
        return this.api.handleStopProfiler( options).toPromise();
    }

    /**
     * Get a list of all KubeVirt objects.
     * @param param the request object
     */
    public listKubeVirtForAllNamespaces(param: DefaultApiListKubeVirtForAllNamespacesRequest, options?: Configuration): Promise<V1KubeVirtList> {
        return this.api.listKubeVirtForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of KubeVirt objects.
     * @param param the request object
     */
    public listNamespacedKubeVirt(param: DefaultApiListNamespacedKubeVirtRequest, options?: Configuration): Promise<V1KubeVirtList> {
        return this.api.listNamespacedKubeVirt(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of VirtualMachine objects.
     * @param param the request object
     */
    public listNamespacedVirtualMachine(param: DefaultApiListNamespacedVirtualMachineRequest, options?: Configuration): Promise<V1VirtualMachineList> {
        return this.api.listNamespacedVirtualMachine(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of VirtualMachineFlavor objects.
     * @param param the request object
     */
    public listNamespacedVirtualMachineFlavor(param: DefaultApiListNamespacedVirtualMachineFlavorRequest, options?: Configuration): Promise<V1alpha1VirtualMachineFlavorList> {
        return this.api.listNamespacedVirtualMachineFlavor(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of VirtualMachineInstance objects.
     * @param param the request object
     */
    public listNamespacedVirtualMachineInstance(param: DefaultApiListNamespacedVirtualMachineInstanceRequest, options?: Configuration): Promise<V1VirtualMachineInstanceList> {
        return this.api.listNamespacedVirtualMachineInstance(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    public listNamespacedVirtualMachineInstanceMigration(param: DefaultApiListNamespacedVirtualMachineInstanceMigrationRequest, options?: Configuration): Promise<V1VirtualMachineInstanceMigrationList> {
        return this.api.listNamespacedVirtualMachineInstanceMigration(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    public listNamespacedVirtualMachineInstancePreset(param: DefaultApiListNamespacedVirtualMachineInstancePresetRequest, options?: Configuration): Promise<V1VirtualMachineInstancePresetList> {
        return this.api.listNamespacedVirtualMachineInstancePreset(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    public listNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiListNamespacedVirtualMachineInstanceReplicaSetRequest, options?: Configuration): Promise<V1VirtualMachineInstanceReplicaSetList> {
        return this.api.listNamespacedVirtualMachineInstanceReplicaSet(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of VirtualMachineRestore objects.
     * @param param the request object
     */
    public listNamespacedVirtualMachineRestore(param: DefaultApiListNamespacedVirtualMachineRestoreRequest, options?: Configuration): Promise<V1alpha1VirtualMachineRestoreList> {
        return this.api.listNamespacedVirtualMachineRestore(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of VirtualMachineSnapshot objects.
     * @param param the request object
     */
    public listNamespacedVirtualMachineSnapshot(param: DefaultApiListNamespacedVirtualMachineSnapshotRequest, options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotList> {
        return this.api.listNamespacedVirtualMachineSnapshot(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    public listNamespacedVirtualMachineSnapshotContent(param: DefaultApiListNamespacedVirtualMachineSnapshotContentRequest, options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotContentList> {
        return this.api.listNamespacedVirtualMachineSnapshotContent(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of VirtualMachineClusterFlavor objects.
     * @param param the request object
     */
    public listVirtualMachineClusterFlavor(param: DefaultApiListVirtualMachineClusterFlavorRequest, options?: Configuration): Promise<V1alpha1VirtualMachineClusterFlavorList> {
        return this.api.listVirtualMachineClusterFlavor(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of all VirtualMachineFlavor objects.
     * @param param the request object
     */
    public listVirtualMachineFlavorForAllNamespaces(param: DefaultApiListVirtualMachineFlavorForAllNamespacesRequest, options?: Configuration): Promise<V1alpha1VirtualMachineFlavorList> {
        return this.api.listVirtualMachineFlavorForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of all VirtualMachine objects.
     * @param param the request object
     */
    public listVirtualMachineForAllNamespaces(param: DefaultApiListVirtualMachineForAllNamespacesRequest, options?: Configuration): Promise<V1VirtualMachineList> {
        return this.api.listVirtualMachineForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of all VirtualMachineInstance objects.
     * @param param the request object
     */
    public listVirtualMachineInstanceForAllNamespaces(param: DefaultApiListVirtualMachineInstanceForAllNamespacesRequest, options?: Configuration): Promise<V1VirtualMachineInstanceList> {
        return this.api.listVirtualMachineInstanceForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of all VirtualMachineInstanceMigration objects.
     * @param param the request object
     */
    public listVirtualMachineInstanceMigrationForAllNamespaces(param: DefaultApiListVirtualMachineInstanceMigrationForAllNamespacesRequest, options?: Configuration): Promise<V1VirtualMachineInstanceMigrationList> {
        return this.api.listVirtualMachineInstanceMigrationForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of all VirtualMachineInstancePreset objects.
     * @param param the request object
     */
    public listVirtualMachineInstancePresetForAllNamespaces(param: DefaultApiListVirtualMachineInstancePresetForAllNamespacesRequest, options?: Configuration): Promise<V1VirtualMachineInstancePresetList> {
        return this.api.listVirtualMachineInstancePresetForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of all VirtualMachineInstanceReplicaSet objects.
     * @param param the request object
     */
    public listVirtualMachineInstanceReplicaSetForAllNamespaces(param: DefaultApiListVirtualMachineInstanceReplicaSetForAllNamespacesRequest, options?: Configuration): Promise<V1VirtualMachineInstanceReplicaSetList> {
        return this.api.listVirtualMachineInstanceReplicaSetForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of all VirtualMachineRestore objects.
     * @param param the request object
     */
    public listVirtualMachineRestoreForAllNamespaces(param: DefaultApiListVirtualMachineRestoreForAllNamespacesRequest, options?: Configuration): Promise<V1alpha1VirtualMachineRestoreList> {
        return this.api.listVirtualMachineRestoreForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of all VirtualMachineSnapshotContent objects.
     * @param param the request object
     */
    public listVirtualMachineSnapshotContentForAllNamespaces(param: DefaultApiListVirtualMachineSnapshotContentForAllNamespacesRequest, options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotContentList> {
        return this.api.listVirtualMachineSnapshotContentForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Get a list of all VirtualMachineSnapshot objects.
     * @param param the request object
     */
    public listVirtualMachineSnapshotForAllNamespaces(param: DefaultApiListVirtualMachineSnapshotForAllNamespacesRequest, options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotList> {
        return this.api.listVirtualMachineSnapshotForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Patch a KubeVirt object.
     * @param param the request object
     */
    public patchNamespacedKubeVirt(param: DefaultApiPatchNamespacedKubeVirtRequest, options?: Configuration): Promise<V1KubeVirt> {
        return this.api.patchNamespacedKubeVirt(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Patch a VirtualMachine object.
     * @param param the request object
     */
    public patchNamespacedVirtualMachine(param: DefaultApiPatchNamespacedVirtualMachineRequest, options?: Configuration): Promise<V1VirtualMachine> {
        return this.api.patchNamespacedVirtualMachine(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Patch a VirtualMachineFlavor object.
     * @param param the request object
     */
    public patchNamespacedVirtualMachineFlavor(param: DefaultApiPatchNamespacedVirtualMachineFlavorRequest, options?: Configuration): Promise<V1alpha1VirtualMachineFlavor> {
        return this.api.patchNamespacedVirtualMachineFlavor(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Patch a VirtualMachineInstance object.
     * @param param the request object
     */
    public patchNamespacedVirtualMachineInstance(param: DefaultApiPatchNamespacedVirtualMachineInstanceRequest, options?: Configuration): Promise<V1VirtualMachineInstance> {
        return this.api.patchNamespacedVirtualMachineInstance(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Patch a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    public patchNamespacedVirtualMachineInstanceMigration(param: DefaultApiPatchNamespacedVirtualMachineInstanceMigrationRequest, options?: Configuration): Promise<V1VirtualMachineInstanceMigration> {
        return this.api.patchNamespacedVirtualMachineInstanceMigration(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Patch a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    public patchNamespacedVirtualMachineInstancePreset(param: DefaultApiPatchNamespacedVirtualMachineInstancePresetRequest, options?: Configuration): Promise<V1VirtualMachineInstancePreset> {
        return this.api.patchNamespacedVirtualMachineInstancePreset(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Patch a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    public patchNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiPatchNamespacedVirtualMachineInstanceReplicaSetRequest, options?: Configuration): Promise<V1VirtualMachineInstanceReplicaSet> {
        return this.api.patchNamespacedVirtualMachineInstanceReplicaSet(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Patch a VirtualMachineRestore object.
     * @param param the request object
     */
    public patchNamespacedVirtualMachineRestore(param: DefaultApiPatchNamespacedVirtualMachineRestoreRequest, options?: Configuration): Promise<V1alpha1VirtualMachineRestore> {
        return this.api.patchNamespacedVirtualMachineRestore(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Patch a VirtualMachineSnapshot object.
     * @param param the request object
     */
    public patchNamespacedVirtualMachineSnapshot(param: DefaultApiPatchNamespacedVirtualMachineSnapshotRequest, options?: Configuration): Promise<V1alpha1VirtualMachineSnapshot> {
        return this.api.patchNamespacedVirtualMachineSnapshot(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Patch a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    public patchNamespacedVirtualMachineSnapshotContent(param: DefaultApiPatchNamespacedVirtualMachineSnapshotContentRequest, options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotContent> {
        return this.api.patchNamespacedVirtualMachineSnapshotContent(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Patch a VirtualMachineClusterFlavor object.
     * @param param the request object
     */
    public patchVirtualMachineClusterFlavor(param: DefaultApiPatchVirtualMachineClusterFlavorRequest, options?: Configuration): Promise<V1alpha1VirtualMachineClusterFlavor> {
        return this.api.patchVirtualMachineClusterFlavor(param.name, param.body,  options).toPromise();
    }

    /**
     * Get a KubeVirt object.
     * @param param the request object
     */
    public readNamespacedKubeVirt(param: DefaultApiReadNamespacedKubeVirtRequest, options?: Configuration): Promise<V1KubeVirt> {
        return this.api.readNamespacedKubeVirt(param.name, param.namespace, param.exact, param._export,  options).toPromise();
    }

    /**
     * Get a VirtualMachine object.
     * @param param the request object
     */
    public readNamespacedVirtualMachine(param: DefaultApiReadNamespacedVirtualMachineRequest, options?: Configuration): Promise<V1VirtualMachine> {
        return this.api.readNamespacedVirtualMachine(param.name, param.namespace, param.exact, param._export,  options).toPromise();
    }

    /**
     * Get a VirtualMachineFlavor object.
     * @param param the request object
     */
    public readNamespacedVirtualMachineFlavor(param: DefaultApiReadNamespacedVirtualMachineFlavorRequest, options?: Configuration): Promise<V1alpha1VirtualMachineFlavor> {
        return this.api.readNamespacedVirtualMachineFlavor(param.name, param.namespace, param.exact, param._export,  options).toPromise();
    }

    /**
     * Get a VirtualMachineInstance object.
     * @param param the request object
     */
    public readNamespacedVirtualMachineInstance(param: DefaultApiReadNamespacedVirtualMachineInstanceRequest, options?: Configuration): Promise<V1VirtualMachineInstance> {
        return this.api.readNamespacedVirtualMachineInstance(param.name, param.namespace, param.exact, param._export,  options).toPromise();
    }

    /**
     * Get a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    public readNamespacedVirtualMachineInstanceMigration(param: DefaultApiReadNamespacedVirtualMachineInstanceMigrationRequest, options?: Configuration): Promise<V1VirtualMachineInstanceMigration> {
        return this.api.readNamespacedVirtualMachineInstanceMigration(param.name, param.namespace, param.exact, param._export,  options).toPromise();
    }

    /**
     * Get a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    public readNamespacedVirtualMachineInstancePreset(param: DefaultApiReadNamespacedVirtualMachineInstancePresetRequest, options?: Configuration): Promise<V1VirtualMachineInstancePreset> {
        return this.api.readNamespacedVirtualMachineInstancePreset(param.name, param.namespace, param.exact, param._export,  options).toPromise();
    }

    /**
     * Get a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    public readNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiReadNamespacedVirtualMachineInstanceReplicaSetRequest, options?: Configuration): Promise<V1VirtualMachineInstanceReplicaSet> {
        return this.api.readNamespacedVirtualMachineInstanceReplicaSet(param.name, param.namespace, param.exact, param._export,  options).toPromise();
    }

    /**
     * Get a VirtualMachineRestore object.
     * @param param the request object
     */
    public readNamespacedVirtualMachineRestore(param: DefaultApiReadNamespacedVirtualMachineRestoreRequest, options?: Configuration): Promise<V1alpha1VirtualMachineRestore> {
        return this.api.readNamespacedVirtualMachineRestore(param.name, param.namespace, param.exact, param._export,  options).toPromise();
    }

    /**
     * Get a VirtualMachineSnapshot object.
     * @param param the request object
     */
    public readNamespacedVirtualMachineSnapshot(param: DefaultApiReadNamespacedVirtualMachineSnapshotRequest, options?: Configuration): Promise<V1alpha1VirtualMachineSnapshot> {
        return this.api.readNamespacedVirtualMachineSnapshot(param.name, param.namespace, param.exact, param._export,  options).toPromise();
    }

    /**
     * Get a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    public readNamespacedVirtualMachineSnapshotContent(param: DefaultApiReadNamespacedVirtualMachineSnapshotContentRequest, options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotContent> {
        return this.api.readNamespacedVirtualMachineSnapshotContent(param.name, param.namespace, param.exact, param._export,  options).toPromise();
    }

    /**
     * Get a VirtualMachineClusterFlavor object.
     * @param param the request object
     */
    public readVirtualMachineClusterFlavor(param: DefaultApiReadVirtualMachineClusterFlavorRequest, options?: Configuration): Promise<V1alpha1VirtualMachineClusterFlavor> {
        return this.api.readVirtualMachineClusterFlavor(param.name, param.exact, param._export,  options).toPromise();
    }

    /**
     * Update a KubeVirt object.
     * @param param the request object
     */
    public replaceNamespacedKubeVirt(param: DefaultApiReplaceNamespacedKubeVirtRequest, options?: Configuration): Promise<V1KubeVirt> {
        return this.api.replaceNamespacedKubeVirt(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Update a VirtualMachine object.
     * @param param the request object
     */
    public replaceNamespacedVirtualMachine(param: DefaultApiReplaceNamespacedVirtualMachineRequest, options?: Configuration): Promise<V1VirtualMachine> {
        return this.api.replaceNamespacedVirtualMachine(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Update a VirtualMachineFlavor object.
     * @param param the request object
     */
    public replaceNamespacedVirtualMachineFlavor(param: DefaultApiReplaceNamespacedVirtualMachineFlavorRequest, options?: Configuration): Promise<V1alpha1VirtualMachineFlavor> {
        return this.api.replaceNamespacedVirtualMachineFlavor(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Update a VirtualMachineInstance object.
     * @param param the request object
     */
    public replaceNamespacedVirtualMachineInstance(param: DefaultApiReplaceNamespacedVirtualMachineInstanceRequest, options?: Configuration): Promise<V1VirtualMachineInstance> {
        return this.api.replaceNamespacedVirtualMachineInstance(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Update a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    public replaceNamespacedVirtualMachineInstanceMigration(param: DefaultApiReplaceNamespacedVirtualMachineInstanceMigrationRequest, options?: Configuration): Promise<V1VirtualMachineInstanceMigration> {
        return this.api.replaceNamespacedVirtualMachineInstanceMigration(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Update a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    public replaceNamespacedVirtualMachineInstancePreset(param: DefaultApiReplaceNamespacedVirtualMachineInstancePresetRequest, options?: Configuration): Promise<V1VirtualMachineInstancePreset> {
        return this.api.replaceNamespacedVirtualMachineInstancePreset(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Update a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    public replaceNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiReplaceNamespacedVirtualMachineInstanceReplicaSetRequest, options?: Configuration): Promise<V1VirtualMachineInstanceReplicaSet> {
        return this.api.replaceNamespacedVirtualMachineInstanceReplicaSet(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Update a VirtualMachineRestore object.
     * @param param the request object
     */
    public replaceNamespacedVirtualMachineRestore(param: DefaultApiReplaceNamespacedVirtualMachineRestoreRequest, options?: Configuration): Promise<V1alpha1VirtualMachineRestore> {
        return this.api.replaceNamespacedVirtualMachineRestore(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Update a VirtualMachineSnapshot object.
     * @param param the request object
     */
    public replaceNamespacedVirtualMachineSnapshot(param: DefaultApiReplaceNamespacedVirtualMachineSnapshotRequest, options?: Configuration): Promise<V1alpha1VirtualMachineSnapshot> {
        return this.api.replaceNamespacedVirtualMachineSnapshot(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Update a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    public replaceNamespacedVirtualMachineSnapshotContent(param: DefaultApiReplaceNamespacedVirtualMachineSnapshotContentRequest, options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotContent> {
        return this.api.replaceNamespacedVirtualMachineSnapshotContent(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Update a VirtualMachineClusterFlavor object.
     * @param param the request object
     */
    public replaceVirtualMachineClusterFlavor(param: DefaultApiReplaceVirtualMachineClusterFlavorRequest, options?: Configuration): Promise<V1alpha1VirtualMachineClusterFlavor> {
        return this.api.replaceVirtualMachineClusterFlavor(param.name, param.body,  options).toPromise();
    }

    /**
     * Health endpoint
     * @param param the request object
     */
    public v1CheckHealth(param: DefaultApiV1CheckHealthRequest, options?: Configuration): Promise<string> {
        return this.api.v1CheckHealth( options).toPromise();
    }

    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param param the request object
     */
    public v1Console(param: DefaultApiV1ConsoleRequest, options?: Configuration): Promise<void> {
        return this.api.v1Console(param.name, param.namespace,  options).toPromise();
    }

    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param param the request object
     */
    public v1Filesystemlist(param: DefaultApiV1FilesystemlistRequest, options?: Configuration): Promise<V1VirtualMachineInstanceFileSystemList> {
        return this.api.v1Filesystemlist( options).toPromise();
    }

    /**
     * Freeze a VirtualMachineInstance object.
     * @param param the request object
     */
    public v1Freeze(param: DefaultApiV1FreezeRequest, options?: Configuration): Promise<string> {
        return this.api.v1Freeze(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1Guestfs(param: DefaultApiV1GuestfsRequest, options?: Configuration): Promise<string> {
        return this.api.v1Guestfs( options).toPromise();
    }

    /**
     * Get guest agent os information
     * @param param the request object
     */
    public v1Guestosinfo(param: DefaultApiV1GuestosinfoRequest, options?: Configuration): Promise<V1VirtualMachineInstanceGuestAgentInfo> {
        return this.api.v1Guestosinfo(param.name, param.namespace,  options).toPromise();
    }

    /**
     * Migrate a running VirtualMachine to another node.
     * @param param the request object
     */
    public v1Migrate(param: DefaultApiV1MigrateRequest, options?: Configuration): Promise<string> {
        return this.api.v1Migrate(param.name, param.namespace,  options).toPromise();
    }

    /**
     * Pause a VirtualMachineInstance object.
     * @param param the request object
     */
    public v1Pause(param: DefaultApiV1PauseRequest, options?: Configuration): Promise<string> {
        return this.api.v1Pause(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Restart a VirtualMachine object.
     * @param param the request object
     */
    public v1Restart(param: DefaultApiV1RestartRequest, options?: Configuration): Promise<string> {
        return this.api.v1Restart(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Start a VirtualMachine object.
     * @param param the request object
     */
    public v1Start(param: DefaultApiV1StartRequest, options?: Configuration): Promise<string> {
        return this.api.v1Start(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Stop a VirtualMachine object.
     * @param param the request object
     */
    public v1Stop(param: DefaultApiV1StopRequest, options?: Configuration): Promise<string> {
        return this.api.v1Stop(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Test endpoint verifying apiserver connectivity.
     * @param param the request object
     */
    public v1Test(param: DefaultApiV1TestRequest, options?: Configuration): Promise<void> {
        return this.api.v1Test(param.name, param.namespace,  options).toPromise();
    }

    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param param the request object
     */
    public v1Unfreeze(param: DefaultApiV1UnfreezeRequest, options?: Configuration): Promise<string> {
        return this.api.v1Unfreeze(param.name, param.namespace,  options).toPromise();
    }

    /**
     * Unpause a VirtualMachineInstance object.
     * @param param the request object
     */
    public v1Unpause(param: DefaultApiV1UnpauseRequest, options?: Configuration): Promise<string> {
        return this.api.v1Unpause(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Get list of active users via guest agent
     * @param param the request object
     */
    public v1Userlist(param: DefaultApiV1UserlistRequest, options?: Configuration): Promise<V1VirtualMachineInstanceGuestOSUserList> {
        return this.api.v1Userlist( options).toPromise();
    }

    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param param the request object
     */
    public v1VNC(param: DefaultApiV1VNCRequest, options?: Configuration): Promise<void> {
        return this.api.v1VNC(param.name, param.namespace,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1Version(param: DefaultApiV1VersionRequest, options?: Configuration): Promise<void> {
        return this.api.v1Version( options).toPromise();
    }

    /**
     * Health endpoint
     * @param param the request object
     */
    public v1alpha3CheckHealth(param: DefaultApiV1alpha3CheckHealthRequest, options?: Configuration): Promise<string> {
        return this.api.v1alpha3CheckHealth( options).toPromise();
    }

    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param param the request object
     */
    public v1alpha3Console(param: DefaultApiV1alpha3ConsoleRequest, options?: Configuration): Promise<void> {
        return this.api.v1alpha3Console(param.name, param.namespace,  options).toPromise();
    }

    /**
     * Get list of active filesystems on guest machine via guest agent
     * @param param the request object
     */
    public v1alpha3Filesystemlist(param: DefaultApiV1alpha3FilesystemlistRequest, options?: Configuration): Promise<V1VirtualMachineInstanceFileSystemList> {
        return this.api.v1alpha3Filesystemlist( options).toPromise();
    }

    /**
     * Freeze a VirtualMachineInstance object.
     * @param param the request object
     */
    public v1alpha3Freeze(param: DefaultApiV1alpha3FreezeRequest, options?: Configuration): Promise<string> {
        return this.api.v1alpha3Freeze(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Get a KubeVirt API Group
     * @param param the request object
     */
    public v1alpha3GetSubAPIGroup(param: DefaultApiV1alpha3GetSubAPIGroupRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup> {
        return this.api.v1alpha3GetSubAPIGroup( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1alpha3Guestfs(param: DefaultApiV1alpha3GuestfsRequest, options?: Configuration): Promise<string> {
        return this.api.v1alpha3Guestfs( options).toPromise();
    }

    /**
     * Get guest agent os information
     * @param param the request object
     */
    public v1alpha3Guestosinfo(param: DefaultApiV1alpha3GuestosinfoRequest, options?: Configuration): Promise<V1VirtualMachineInstanceGuestAgentInfo> {
        return this.api.v1alpha3Guestosinfo(param.name, param.namespace,  options).toPromise();
    }

    /**
     * Migrate a running VirtualMachine to another node.
     * @param param the request object
     */
    public v1alpha3Migrate(param: DefaultApiV1alpha3MigrateRequest, options?: Configuration): Promise<string> {
        return this.api.v1alpha3Migrate(param.name, param.namespace,  options).toPromise();
    }

    /**
     * Pause a VirtualMachineInstance object.
     * @param param the request object
     */
    public v1alpha3Pause(param: DefaultApiV1alpha3PauseRequest, options?: Configuration): Promise<string> {
        return this.api.v1alpha3Pause(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Restart a VirtualMachine object.
     * @param param the request object
     */
    public v1alpha3Restart(param: DefaultApiV1alpha3RestartRequest, options?: Configuration): Promise<string> {
        return this.api.v1alpha3Restart(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Start a VirtualMachine object.
     * @param param the request object
     */
    public v1alpha3Start(param: DefaultApiV1alpha3StartRequest, options?: Configuration): Promise<string> {
        return this.api.v1alpha3Start(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Stop a VirtualMachine object.
     * @param param the request object
     */
    public v1alpha3Stop(param: DefaultApiV1alpha3StopRequest, options?: Configuration): Promise<string> {
        return this.api.v1alpha3Stop(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Test endpoint verifying apiserver connectivity.
     * @param param the request object
     */
    public v1alpha3Test(param: DefaultApiV1alpha3TestRequest, options?: Configuration): Promise<void> {
        return this.api.v1alpha3Test(param.name, param.namespace,  options).toPromise();
    }

    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param param the request object
     */
    public v1alpha3Unfreeze(param: DefaultApiV1alpha3UnfreezeRequest, options?: Configuration): Promise<string> {
        return this.api.v1alpha3Unfreeze(param.name, param.namespace,  options).toPromise();
    }

    /**
     * Unpause a VirtualMachineInstance object.
     * @param param the request object
     */
    public v1alpha3Unpause(param: DefaultApiV1alpha3UnpauseRequest, options?: Configuration): Promise<string> {
        return this.api.v1alpha3Unpause(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Get list of active users via guest agent
     * @param param the request object
     */
    public v1alpha3Userlist(param: DefaultApiV1alpha3UserlistRequest, options?: Configuration): Promise<V1VirtualMachineInstanceGuestOSUserList> {
        return this.api.v1alpha3Userlist( options).toPromise();
    }

    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param param the request object
     */
    public v1alpha3VNC(param: DefaultApiV1alpha3VNCRequest, options?: Configuration): Promise<void> {
        return this.api.v1alpha3VNC(param.name, param.namespace,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1alpha3Version(param: DefaultApiV1alpha3VersionRequest, options?: Configuration): Promise<void> {
        return this.api.v1alpha3Version( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1alpha3dumpClusterProfiler(param: DefaultApiV1alpha3dumpClusterProfilerRequest, options?: Configuration): Promise<void> {
        return this.api.v1alpha3dumpClusterProfiler( options).toPromise();
    }

    /**
     * Get a KubeVirt API resources
     * @param param the request object
     */
    public v1alpha3getAPISubResources(param: DefaultApiV1alpha3getAPISubResourcesRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList> {
        return this.api.v1alpha3getAPISubResources( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1alpha3startClusterProfiler(param: DefaultApiV1alpha3startClusterProfilerRequest, options?: Configuration): Promise<void> {
        return this.api.v1alpha3startClusterProfiler( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1alpha3stopClusterProfiler(param: DefaultApiV1alpha3stopClusterProfilerRequest, options?: Configuration): Promise<void> {
        return this.api.v1alpha3stopClusterProfiler( options).toPromise();
    }

    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param param the request object
     */
    public v1alpha3usbredir(param: DefaultApiV1alpha3usbredirRequest, options?: Configuration): Promise<void> {
        return this.api.v1alpha3usbredir(param.name, param.namespace,  options).toPromise();
    }

    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param param the request object
     */
    public v1alpha3vmAddvolume(param: DefaultApiV1alpha3vmAddvolumeRequest, options?: Configuration): Promise<string> {
        return this.api.v1alpha3vmAddvolume(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param param the request object
     */
    public v1alpha3vmPortForward(param: DefaultApiV1alpha3vmPortForwardRequest, options?: Configuration): Promise<void> {
        return this.api.v1alpha3vmPortForward(param.name, param.namespace, param.port,  options).toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param param the request object
     */
    public v1alpha3vmPortForwardWithProtocol(param: DefaultApiV1alpha3vmPortForwardWithProtocolRequest, options?: Configuration): Promise<void> {
        return this.api.v1alpha3vmPortForwardWithProtocol(param.name, param.namespace, param.port, param.protocol,  options).toPromise();
    }

    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param param the request object
     */
    public v1alpha3vmRemovevolume(param: DefaultApiV1alpha3vmRemovevolumeRequest, options?: Configuration): Promise<string> {
        return this.api.v1alpha3vmRemovevolume(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param param the request object
     */
    public v1alpha3vmiAddvolume(param: DefaultApiV1alpha3vmiAddvolumeRequest, options?: Configuration): Promise<string> {
        return this.api.v1alpha3vmiAddvolume(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    public v1alpha3vmiPortForward(param: DefaultApiV1alpha3vmiPortForwardRequest, options?: Configuration): Promise<void> {
        return this.api.v1alpha3vmiPortForward(param.name, param.namespace, param.port,  options).toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    public v1alpha3vmiPortForwardWithProtocol(param: DefaultApiV1alpha3vmiPortForwardWithProtocolRequest, options?: Configuration): Promise<void> {
        return this.api.v1alpha3vmiPortForwardWithProtocol(param.name, param.namespace, param.port, param.protocol,  options).toPromise();
    }

    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param param the request object
     */
    public v1alpha3vmiRemovevolume(param: DefaultApiV1alpha3vmiRemovevolumeRequest, options?: Configuration): Promise<string> {
        return this.api.v1alpha3vmiRemovevolume(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1dumpClusterProfiler(param: DefaultApiV1dumpClusterProfilerRequest, options?: Configuration): Promise<void> {
        return this.api.v1dumpClusterProfiler( options).toPromise();
    }

    /**
     * Get a KubeVirt API resources
     * @param param the request object
     */
    public v1getAPISubResources(param: DefaultApiV1getAPISubResourcesRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList> {
        return this.api.v1getAPISubResources( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1startClusterProfiler(param: DefaultApiV1startClusterProfilerRequest, options?: Configuration): Promise<void> {
        return this.api.v1startClusterProfiler( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1stopClusterProfiler(param: DefaultApiV1stopClusterProfilerRequest, options?: Configuration): Promise<void> {
        return this.api.v1stopClusterProfiler( options).toPromise();
    }

    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param param the request object
     */
    public v1usbredir(param: DefaultApiV1usbredirRequest, options?: Configuration): Promise<void> {
        return this.api.v1usbredir(param.name, param.namespace,  options).toPromise();
    }

    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param param the request object
     */
    public v1vmAddvolume(param: DefaultApiV1vmAddvolumeRequest, options?: Configuration): Promise<string> {
        return this.api.v1vmAddvolume(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param param the request object
     */
    public v1vmPortForward(param: DefaultApiV1vmPortForwardRequest, options?: Configuration): Promise<void> {
        return this.api.v1vmPortForward(param.name, param.namespace, param.port,  options).toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param param the request object
     */
    public v1vmPortForwardWithProtocol(param: DefaultApiV1vmPortForwardWithProtocolRequest, options?: Configuration): Promise<void> {
        return this.api.v1vmPortForwardWithProtocol(param.name, param.namespace, param.port, param.protocol,  options).toPromise();
    }

    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param param the request object
     */
    public v1vmRemovevolume(param: DefaultApiV1vmRemovevolumeRequest, options?: Configuration): Promise<string> {
        return this.api.v1vmRemovevolume(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param param the request object
     */
    public v1vmiAddvolume(param: DefaultApiV1vmiAddvolumeRequest, options?: Configuration): Promise<string> {
        return this.api.v1vmiAddvolume(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    public v1vmiPortForward(param: DefaultApiV1vmiPortForwardRequest, options?: Configuration): Promise<void> {
        return this.api.v1vmiPortForward(param.name, param.namespace, param.port,  options).toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param param the request object
     */
    public v1vmiPortForwardWithProtocol(param: DefaultApiV1vmiPortForwardWithProtocolRequest, options?: Configuration): Promise<void> {
        return this.api.v1vmiPortForwardWithProtocol(param.name, param.namespace, param.port, param.protocol,  options).toPromise();
    }

    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param param the request object
     */
    public v1vmiRemovevolume(param: DefaultApiV1vmiRemovevolumeRequest, options?: Configuration): Promise<string> {
        return this.api.v1vmiRemovevolume(param.name, param.namespace, param.body,  options).toPromise();
    }

    /**
     * Watch a KubeVirtList object.
     * @param param the request object
     */
    public watchKubeVirtListForAllNamespaces(param: DefaultApiWatchKubeVirtListForAllNamespacesRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchKubeVirtListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a KubeVirt object.
     * @param param the request object
     */
    public watchNamespacedKubeVirt(param: DefaultApiWatchNamespacedKubeVirtRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchNamespacedKubeVirt(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachine object.
     * @param param the request object
     */
    public watchNamespacedVirtualMachine(param: DefaultApiWatchNamespacedVirtualMachineRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchNamespacedVirtualMachine(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineFlavor object.
     * @param param the request object
     */
    public watchNamespacedVirtualMachineFlavor(param: DefaultApiWatchNamespacedVirtualMachineFlavorRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchNamespacedVirtualMachineFlavor(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineInstance object.
     * @param param the request object
     */
    public watchNamespacedVirtualMachineInstance(param: DefaultApiWatchNamespacedVirtualMachineInstanceRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchNamespacedVirtualMachineInstance(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineInstanceMigration object.
     * @param param the request object
     */
    public watchNamespacedVirtualMachineInstanceMigration(param: DefaultApiWatchNamespacedVirtualMachineInstanceMigrationRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchNamespacedVirtualMachineInstanceMigration(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineInstancePreset object.
     * @param param the request object
     */
    public watchNamespacedVirtualMachineInstancePreset(param: DefaultApiWatchNamespacedVirtualMachineInstancePresetRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchNamespacedVirtualMachineInstancePreset(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineInstanceReplicaSet object.
     * @param param the request object
     */
    public watchNamespacedVirtualMachineInstanceReplicaSet(param: DefaultApiWatchNamespacedVirtualMachineInstanceReplicaSetRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchNamespacedVirtualMachineInstanceReplicaSet(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineRestore object.
     * @param param the request object
     */
    public watchNamespacedVirtualMachineRestore(param: DefaultApiWatchNamespacedVirtualMachineRestoreRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchNamespacedVirtualMachineRestore(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineSnapshot object.
     * @param param the request object
     */
    public watchNamespacedVirtualMachineSnapshot(param: DefaultApiWatchNamespacedVirtualMachineSnapshotRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchNamespacedVirtualMachineSnapshot(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineSnapshotContent object.
     * @param param the request object
     */
    public watchNamespacedVirtualMachineSnapshotContent(param: DefaultApiWatchNamespacedVirtualMachineSnapshotContentRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchNamespacedVirtualMachineSnapshotContent(param.namespace, param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineClusterFlavorList object.
     * @param param the request object
     */
    public watchVirtualMachineClusterFlavorListForAllNamespaces(param: DefaultApiWatchVirtualMachineClusterFlavorListForAllNamespacesRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchVirtualMachineClusterFlavorListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineFlavorList object.
     * @param param the request object
     */
    public watchVirtualMachineFlavorListForAllNamespaces(param: DefaultApiWatchVirtualMachineFlavorListForAllNamespacesRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchVirtualMachineFlavorListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineInstanceList object.
     * @param param the request object
     */
    public watchVirtualMachineInstanceListForAllNamespaces(param: DefaultApiWatchVirtualMachineInstanceListForAllNamespacesRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchVirtualMachineInstanceListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineInstanceMigrationList object.
     * @param param the request object
     */
    public watchVirtualMachineInstanceMigrationListForAllNamespaces(param: DefaultApiWatchVirtualMachineInstanceMigrationListForAllNamespacesRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchVirtualMachineInstanceMigrationListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineInstancePresetList object.
     * @param param the request object
     */
    public watchVirtualMachineInstancePresetListForAllNamespaces(param: DefaultApiWatchVirtualMachineInstancePresetListForAllNamespacesRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchVirtualMachineInstancePresetListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineInstanceReplicaSetList object.
     * @param param the request object
     */
    public watchVirtualMachineInstanceReplicaSetListForAllNamespaces(param: DefaultApiWatchVirtualMachineInstanceReplicaSetListForAllNamespacesRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchVirtualMachineInstanceReplicaSetListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineList object.
     * @param param the request object
     */
    public watchVirtualMachineListForAllNamespaces(param: DefaultApiWatchVirtualMachineListForAllNamespacesRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchVirtualMachineListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineRestoreList object.
     * @param param the request object
     */
    public watchVirtualMachineRestoreListForAllNamespaces(param: DefaultApiWatchVirtualMachineRestoreListForAllNamespacesRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchVirtualMachineRestoreListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineSnapshotContentList object.
     * @param param the request object
     */
    public watchVirtualMachineSnapshotContentListForAllNamespaces(param: DefaultApiWatchVirtualMachineSnapshotContentListForAllNamespacesRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchVirtualMachineSnapshotContentListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

    /**
     * Watch a VirtualMachineSnapshotList object.
     * @param param the request object
     */
    public watchVirtualMachineSnapshotListForAllNamespaces(param: DefaultApiWatchVirtualMachineSnapshotListForAllNamespacesRequest, options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        return this.api.watchVirtualMachineSnapshotListForAllNamespaces(param._continue, param.fieldSelector, param.includeUninitialized, param.labelSelector, param.limit, param.resourceVersion, param.timeoutSeconds, param.watch,  options).toPromise();
    }

}
