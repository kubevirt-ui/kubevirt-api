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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a KubeVirt object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public createNamespacedKubeVirt(namespace: string, body: V1KubeVirt, _options?: Configuration): Promise<V1KubeVirt> {
        const result = this.api.createNamespacedKubeVirt(namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Create a VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public createNamespacedVirtualMachine(namespace: string, body: V1VirtualMachine, _options?: Configuration): Promise<V1VirtualMachine> {
        const result = this.api.createNamespacedVirtualMachine(namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Create a VirtualMachineFlavor object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public createNamespacedVirtualMachineFlavor(namespace: string, body: V1alpha1VirtualMachineFlavor, _options?: Configuration): Promise<V1alpha1VirtualMachineFlavor> {
        const result = this.api.createNamespacedVirtualMachineFlavor(namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Create a VirtualMachineInstance object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public createNamespacedVirtualMachineInstance(namespace: string, body: V1VirtualMachineInstance, _options?: Configuration): Promise<V1VirtualMachineInstance> {
        const result = this.api.createNamespacedVirtualMachineInstance(namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Create a VirtualMachineInstanceMigration object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public createNamespacedVirtualMachineInstanceMigration(namespace: string, body: V1VirtualMachineInstanceMigration, _options?: Configuration): Promise<V1VirtualMachineInstanceMigration> {
        const result = this.api.createNamespacedVirtualMachineInstanceMigration(namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Create a VirtualMachineInstancePreset object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public createNamespacedVirtualMachineInstancePreset(namespace: string, body: V1VirtualMachineInstancePreset, _options?: Configuration): Promise<V1VirtualMachineInstancePreset> {
        const result = this.api.createNamespacedVirtualMachineInstancePreset(namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Create a VirtualMachineInstanceReplicaSet object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public createNamespacedVirtualMachineInstanceReplicaSet(namespace: string, body: V1VirtualMachineInstanceReplicaSet, _options?: Configuration): Promise<V1VirtualMachineInstanceReplicaSet> {
        const result = this.api.createNamespacedVirtualMachineInstanceReplicaSet(namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Create a VirtualMachineRestore object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public createNamespacedVirtualMachineRestore(namespace: string, body: V1alpha1VirtualMachineRestore, _options?: Configuration): Promise<V1alpha1VirtualMachineRestore> {
        const result = this.api.createNamespacedVirtualMachineRestore(namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Create a VirtualMachineSnapshot object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public createNamespacedVirtualMachineSnapshot(namespace: string, body: V1alpha1VirtualMachineSnapshot, _options?: Configuration): Promise<V1alpha1VirtualMachineSnapshot> {
        const result = this.api.createNamespacedVirtualMachineSnapshot(namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Create a VirtualMachineSnapshotContent object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public createNamespacedVirtualMachineSnapshotContent(namespace: string, body: V1alpha1VirtualMachineSnapshotContent, _options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotContent> {
        const result = this.api.createNamespacedVirtualMachineSnapshotContent(namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Create a VirtualMachineClusterFlavor object.
     * @param body 
     */
    public createVirtualMachineClusterFlavor(body: V1alpha1VirtualMachineClusterFlavor, _options?: Configuration): Promise<V1alpha1VirtualMachineClusterFlavor> {
        const result = this.api.createVirtualMachineClusterFlavor(body, _options);
        return result.toPromise();
    }

    /**
     * Delete a collection of KubeVirt objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public deleteCollectionNamespacedKubeVirt(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteCollectionNamespacedKubeVirt(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Delete a collection of VirtualMachine objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public deleteCollectionNamespacedVirtualMachine(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteCollectionNamespacedVirtualMachine(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Delete a collection of VirtualMachineFlavor objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public deleteCollectionNamespacedVirtualMachineFlavor(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteCollectionNamespacedVirtualMachineFlavor(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Delete a collection of VirtualMachineInstance objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public deleteCollectionNamespacedVirtualMachineInstance(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteCollectionNamespacedVirtualMachineInstance(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Delete a collection of VirtualMachineInstanceMigration objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public deleteCollectionNamespacedVirtualMachineInstanceMigration(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteCollectionNamespacedVirtualMachineInstanceMigration(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Delete a collection of VirtualMachineInstancePreset objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public deleteCollectionNamespacedVirtualMachineInstancePreset(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteCollectionNamespacedVirtualMachineInstancePreset(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Delete a collection of VirtualMachineInstanceReplicaSet objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public deleteCollectionNamespacedVirtualMachineInstanceReplicaSet(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteCollectionNamespacedVirtualMachineInstanceReplicaSet(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Delete a collection of VirtualMachineRestore objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public deleteCollectionNamespacedVirtualMachineRestore(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteCollectionNamespacedVirtualMachineRestore(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Delete a collection of VirtualMachineSnapshot objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public deleteCollectionNamespacedVirtualMachineSnapshot(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteCollectionNamespacedVirtualMachineSnapshot(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Delete a collection of VirtualMachineSnapshotContent objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public deleteCollectionNamespacedVirtualMachineSnapshotContent(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteCollectionNamespacedVirtualMachineSnapshotContent(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Delete a collection of VirtualMachineClusterFlavor objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public deleteCollectionVirtualMachineClusterFlavor(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteCollectionVirtualMachineClusterFlavor(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Delete a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    public deleteNamespacedKubeVirt(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteNamespacedKubeVirt(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options);
        return result.toPromise();
    }

    /**
     * Delete a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    public deleteNamespacedVirtualMachine(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteNamespacedVirtualMachine(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options);
        return result.toPromise();
    }

    /**
     * Delete a VirtualMachineFlavor object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    public deleteNamespacedVirtualMachineFlavor(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteNamespacedVirtualMachineFlavor(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options);
        return result.toPromise();
    }

    /**
     * Delete a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    public deleteNamespacedVirtualMachineInstance(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteNamespacedVirtualMachineInstance(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options);
        return result.toPromise();
    }

    /**
     * Delete a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    public deleteNamespacedVirtualMachineInstanceMigration(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteNamespacedVirtualMachineInstanceMigration(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options);
        return result.toPromise();
    }

    /**
     * Delete a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    public deleteNamespacedVirtualMachineInstancePreset(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteNamespacedVirtualMachineInstancePreset(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options);
        return result.toPromise();
    }

    /**
     * Delete a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    public deleteNamespacedVirtualMachineInstanceReplicaSet(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteNamespacedVirtualMachineInstanceReplicaSet(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options);
        return result.toPromise();
    }

    /**
     * Delete a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    public deleteNamespacedVirtualMachineRestore(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteNamespacedVirtualMachineRestore(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options);
        return result.toPromise();
    }

    /**
     * Delete a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    public deleteNamespacedVirtualMachineSnapshot(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteNamespacedVirtualMachineSnapshot(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options);
        return result.toPromise();
    }

    /**
     * Delete a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    public deleteNamespacedVirtualMachineSnapshotContent(name: string, namespace: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteNamespacedVirtualMachineSnapshotContent(name, namespace, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options);
        return result.toPromise();
    }

    /**
     * Delete a VirtualMachineClusterFlavor object.
     * @param name Name of the resource
     * @param body 
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     */
    public deleteVirtualMachineClusterFlavor(name: string, body: K8sIoApimachineryPkgApisMetaV1DeleteOptions, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1Status> {
        const result = this.api.deleteVirtualMachineClusterFlavor(name, body, gracePeriodSeconds, orphanDependents, propagationPolicy, _options);
        return result.toPromise();
    }

    /**
     * Health endpoint
     */
    public func1(_options?: Configuration): Promise<void> {
        const result = this.api.func1(_options);
        return result.toPromise();
    }

    /**
     */
    public func7(_options?: Configuration): Promise<void> {
        const result = this.api.func7(_options);
        return result.toPromise();
    }

    /**
     * Get a KubeVirt API group
     */
    public getAPIGroupFlavorKubevirtIo(_options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup> {
        const result = this.api.getAPIGroupFlavorKubevirtIo(_options);
        return result.toPromise();
    }

    /**
     * Get a KubeVirt API group
     */
    public getAPIGroupKubevirtIo(_options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup> {
        const result = this.api.getAPIGroupKubevirtIo(_options);
        return result.toPromise();
    }

    /**
     * Get a KubeVirt API GroupList
     */
    public getAPIGroupList(_options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIGroupList> {
        const result = this.api.getAPIGroupList(_options);
        return result.toPromise();
    }

    /**
     * Get a KubeVirt API group
     */
    public getAPIGroupSnapshotKubevirtIo(_options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup> {
        const result = this.api.getAPIGroupSnapshotKubevirtIo(_options);
        return result.toPromise();
    }

    /**
     * Get KubeVirt API Resources
     */
    public getAPIResourcesFlavorKubevirtIoV1alpha1(_options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList> {
        const result = this.api.getAPIResourcesFlavorKubevirtIoV1alpha1(_options);
        return result.toPromise();
    }

    /**
     * Get KubeVirt API Resources
     */
    public getAPIResourcesKubevirtIoV1(_options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList> {
        const result = this.api.getAPIResourcesKubevirtIoV1(_options);
        return result.toPromise();
    }

    /**
     * Get KubeVirt API Resources
     */
    public getAPIResourcesSnapshotKubevirtIoV1alpha1(_options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList> {
        const result = this.api.getAPIResourcesSnapshotKubevirtIoV1alpha1(_options);
        return result.toPromise();
    }

    /**
     * Get KubeVirt API root paths
     */
    public getRootPaths(_options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1RootPaths> {
        const result = this.api.getRootPaths(_options);
        return result.toPromise();
    }

    /**
     * dump profiler results endpoint
     */
    public handleDumpProfiler(_options?: Configuration): Promise<void> {
        const result = this.api.handleDumpProfiler(_options);
        return result.toPromise();
    }

    /**
     * start profiler endpoint
     */
    public handleStartProfiler(_options?: Configuration): Promise<void> {
        const result = this.api.handleStartProfiler(_options);
        return result.toPromise();
    }

    /**
     * stop profiler endpoint
     */
    public handleStopProfiler(_options?: Configuration): Promise<void> {
        const result = this.api.handleStopProfiler(_options);
        return result.toPromise();
    }

    /**
     * Get a list of all KubeVirt objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listKubeVirtForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1KubeVirtList> {
        const result = this.api.listKubeVirtForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of KubeVirt objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listNamespacedKubeVirt(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1KubeVirtList> {
        const result = this.api.listNamespacedKubeVirt(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of VirtualMachine objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listNamespacedVirtualMachine(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1VirtualMachineList> {
        const result = this.api.listNamespacedVirtualMachine(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of VirtualMachineFlavor objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listNamespacedVirtualMachineFlavor(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1alpha1VirtualMachineFlavorList> {
        const result = this.api.listNamespacedVirtualMachineFlavor(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of VirtualMachineInstance objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listNamespacedVirtualMachineInstance(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1VirtualMachineInstanceList> {
        const result = this.api.listNamespacedVirtualMachineInstance(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of VirtualMachineInstanceMigration objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listNamespacedVirtualMachineInstanceMigration(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1VirtualMachineInstanceMigrationList> {
        const result = this.api.listNamespacedVirtualMachineInstanceMigration(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of VirtualMachineInstancePreset objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listNamespacedVirtualMachineInstancePreset(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1VirtualMachineInstancePresetList> {
        const result = this.api.listNamespacedVirtualMachineInstancePreset(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of VirtualMachineInstanceReplicaSet objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listNamespacedVirtualMachineInstanceReplicaSet(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1VirtualMachineInstanceReplicaSetList> {
        const result = this.api.listNamespacedVirtualMachineInstanceReplicaSet(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of VirtualMachineRestore objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listNamespacedVirtualMachineRestore(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1alpha1VirtualMachineRestoreList> {
        const result = this.api.listNamespacedVirtualMachineRestore(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of VirtualMachineSnapshot objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listNamespacedVirtualMachineSnapshot(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotList> {
        const result = this.api.listNamespacedVirtualMachineSnapshot(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of VirtualMachineSnapshotContent objects.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listNamespacedVirtualMachineSnapshotContent(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotContentList> {
        const result = this.api.listNamespacedVirtualMachineSnapshotContent(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of VirtualMachineClusterFlavor objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listVirtualMachineClusterFlavor(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1alpha1VirtualMachineClusterFlavorList> {
        const result = this.api.listVirtualMachineClusterFlavor(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all VirtualMachineFlavor objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listVirtualMachineFlavorForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1alpha1VirtualMachineFlavorList> {
        const result = this.api.listVirtualMachineFlavorForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all VirtualMachine objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listVirtualMachineForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1VirtualMachineList> {
        const result = this.api.listVirtualMachineForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all VirtualMachineInstance objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listVirtualMachineInstanceForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1VirtualMachineInstanceList> {
        const result = this.api.listVirtualMachineInstanceForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all VirtualMachineInstanceMigration objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listVirtualMachineInstanceMigrationForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1VirtualMachineInstanceMigrationList> {
        const result = this.api.listVirtualMachineInstanceMigrationForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all VirtualMachineInstancePreset objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listVirtualMachineInstancePresetForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1VirtualMachineInstancePresetList> {
        const result = this.api.listVirtualMachineInstancePresetForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all VirtualMachineInstanceReplicaSet objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listVirtualMachineInstanceReplicaSetForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1VirtualMachineInstanceReplicaSetList> {
        const result = this.api.listVirtualMachineInstanceReplicaSetForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all VirtualMachineRestore objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listVirtualMachineRestoreForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1alpha1VirtualMachineRestoreList> {
        const result = this.api.listVirtualMachineRestoreForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all VirtualMachineSnapshotContent objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listVirtualMachineSnapshotContentForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotContentList> {
        const result = this.api.listVirtualMachineSnapshotContentForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all VirtualMachineSnapshot objects.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public listVirtualMachineSnapshotForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotList> {
        const result = this.api.listVirtualMachineSnapshotForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Patch a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public patchNamespacedKubeVirt(name: string, namespace: string, body: any, _options?: Configuration): Promise<V1KubeVirt> {
        const result = this.api.patchNamespacedKubeVirt(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Patch a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public patchNamespacedVirtualMachine(name: string, namespace: string, body: any, _options?: Configuration): Promise<V1VirtualMachine> {
        const result = this.api.patchNamespacedVirtualMachine(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Patch a VirtualMachineFlavor object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public patchNamespacedVirtualMachineFlavor(name: string, namespace: string, body: any, _options?: Configuration): Promise<V1alpha1VirtualMachineFlavor> {
        const result = this.api.patchNamespacedVirtualMachineFlavor(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Patch a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public patchNamespacedVirtualMachineInstance(name: string, namespace: string, body: any, _options?: Configuration): Promise<V1VirtualMachineInstance> {
        const result = this.api.patchNamespacedVirtualMachineInstance(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Patch a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public patchNamespacedVirtualMachineInstanceMigration(name: string, namespace: string, body: any, _options?: Configuration): Promise<V1VirtualMachineInstanceMigration> {
        const result = this.api.patchNamespacedVirtualMachineInstanceMigration(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Patch a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public patchNamespacedVirtualMachineInstancePreset(name: string, namespace: string, body: any, _options?: Configuration): Promise<V1VirtualMachineInstancePreset> {
        const result = this.api.patchNamespacedVirtualMachineInstancePreset(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Patch a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public patchNamespacedVirtualMachineInstanceReplicaSet(name: string, namespace: string, body: any, _options?: Configuration): Promise<V1VirtualMachineInstanceReplicaSet> {
        const result = this.api.patchNamespacedVirtualMachineInstanceReplicaSet(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Patch a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public patchNamespacedVirtualMachineRestore(name: string, namespace: string, body: any, _options?: Configuration): Promise<V1alpha1VirtualMachineRestore> {
        const result = this.api.patchNamespacedVirtualMachineRestore(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Patch a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public patchNamespacedVirtualMachineSnapshot(name: string, namespace: string, body: any, _options?: Configuration): Promise<V1alpha1VirtualMachineSnapshot> {
        const result = this.api.patchNamespacedVirtualMachineSnapshot(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Patch a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public patchNamespacedVirtualMachineSnapshotContent(name: string, namespace: string, body: any, _options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotContent> {
        const result = this.api.patchNamespacedVirtualMachineSnapshotContent(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Patch a VirtualMachineClusterFlavor object.
     * @param name Name of the resource
     * @param body 
     */
    public patchVirtualMachineClusterFlavor(name: string, body: any, _options?: Configuration): Promise<V1alpha1VirtualMachineClusterFlavor> {
        const result = this.api.patchVirtualMachineClusterFlavor(name, body, _options);
        return result.toPromise();
    }

    /**
     * Get a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    public readNamespacedKubeVirt(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<V1KubeVirt> {
        const result = this.api.readNamespacedKubeVirt(name, namespace, exact, _export, _options);
        return result.toPromise();
    }

    /**
     * Get a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    public readNamespacedVirtualMachine(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<V1VirtualMachine> {
        const result = this.api.readNamespacedVirtualMachine(name, namespace, exact, _export, _options);
        return result.toPromise();
    }

    /**
     * Get a VirtualMachineFlavor object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    public readNamespacedVirtualMachineFlavor(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<V1alpha1VirtualMachineFlavor> {
        const result = this.api.readNamespacedVirtualMachineFlavor(name, namespace, exact, _export, _options);
        return result.toPromise();
    }

    /**
     * Get a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    public readNamespacedVirtualMachineInstance(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<V1VirtualMachineInstance> {
        const result = this.api.readNamespacedVirtualMachineInstance(name, namespace, exact, _export, _options);
        return result.toPromise();
    }

    /**
     * Get a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    public readNamespacedVirtualMachineInstanceMigration(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<V1VirtualMachineInstanceMigration> {
        const result = this.api.readNamespacedVirtualMachineInstanceMigration(name, namespace, exact, _export, _options);
        return result.toPromise();
    }

    /**
     * Get a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    public readNamespacedVirtualMachineInstancePreset(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<V1VirtualMachineInstancePreset> {
        const result = this.api.readNamespacedVirtualMachineInstancePreset(name, namespace, exact, _export, _options);
        return result.toPromise();
    }

    /**
     * Get a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    public readNamespacedVirtualMachineInstanceReplicaSet(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<V1VirtualMachineInstanceReplicaSet> {
        const result = this.api.readNamespacedVirtualMachineInstanceReplicaSet(name, namespace, exact, _export, _options);
        return result.toPromise();
    }

    /**
     * Get a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    public readNamespacedVirtualMachineRestore(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<V1alpha1VirtualMachineRestore> {
        const result = this.api.readNamespacedVirtualMachineRestore(name, namespace, exact, _export, _options);
        return result.toPromise();
    }

    /**
     * Get a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    public readNamespacedVirtualMachineSnapshot(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<V1alpha1VirtualMachineSnapshot> {
        const result = this.api.readNamespacedVirtualMachineSnapshot(name, namespace, exact, _export, _options);
        return result.toPromise();
    }

    /**
     * Get a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    public readNamespacedVirtualMachineSnapshotContent(name: string, namespace: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotContent> {
        const result = this.api.readNamespacedVirtualMachineSnapshotContent(name, namespace, exact, _export, _options);
        return result.toPromise();
    }

    /**
     * Get a VirtualMachineClusterFlavor object.
     * @param name Name of the resource
     * @param exact Should the export be exact. Exact export maintains cluster-specific fields like &#39;Namespace&#39;.
     * @param _export Should this value be exported. Export strips fields that a user can not specify.
     */
    public readVirtualMachineClusterFlavor(name: string, exact?: boolean, _export?: boolean, _options?: Configuration): Promise<V1alpha1VirtualMachineClusterFlavor> {
        const result = this.api.readVirtualMachineClusterFlavor(name, exact, _export, _options);
        return result.toPromise();
    }

    /**
     * Update a KubeVirt object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public replaceNamespacedKubeVirt(name: string, namespace: string, body: V1KubeVirt, _options?: Configuration): Promise<V1KubeVirt> {
        const result = this.api.replaceNamespacedKubeVirt(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Update a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public replaceNamespacedVirtualMachine(name: string, namespace: string, body: V1VirtualMachine, _options?: Configuration): Promise<V1VirtualMachine> {
        const result = this.api.replaceNamespacedVirtualMachine(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Update a VirtualMachineFlavor object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public replaceNamespacedVirtualMachineFlavor(name: string, namespace: string, body: V1alpha1VirtualMachineFlavor, _options?: Configuration): Promise<V1alpha1VirtualMachineFlavor> {
        const result = this.api.replaceNamespacedVirtualMachineFlavor(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Update a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public replaceNamespacedVirtualMachineInstance(name: string, namespace: string, body: V1VirtualMachineInstance, _options?: Configuration): Promise<V1VirtualMachineInstance> {
        const result = this.api.replaceNamespacedVirtualMachineInstance(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Update a VirtualMachineInstanceMigration object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public replaceNamespacedVirtualMachineInstanceMigration(name: string, namespace: string, body: V1VirtualMachineInstanceMigration, _options?: Configuration): Promise<V1VirtualMachineInstanceMigration> {
        const result = this.api.replaceNamespacedVirtualMachineInstanceMigration(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Update a VirtualMachineInstancePreset object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public replaceNamespacedVirtualMachineInstancePreset(name: string, namespace: string, body: V1VirtualMachineInstancePreset, _options?: Configuration): Promise<V1VirtualMachineInstancePreset> {
        const result = this.api.replaceNamespacedVirtualMachineInstancePreset(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Update a VirtualMachineInstanceReplicaSet object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public replaceNamespacedVirtualMachineInstanceReplicaSet(name: string, namespace: string, body: V1VirtualMachineInstanceReplicaSet, _options?: Configuration): Promise<V1VirtualMachineInstanceReplicaSet> {
        const result = this.api.replaceNamespacedVirtualMachineInstanceReplicaSet(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Update a VirtualMachineRestore object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public replaceNamespacedVirtualMachineRestore(name: string, namespace: string, body: V1alpha1VirtualMachineRestore, _options?: Configuration): Promise<V1alpha1VirtualMachineRestore> {
        const result = this.api.replaceNamespacedVirtualMachineRestore(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Update a VirtualMachineSnapshot object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public replaceNamespacedVirtualMachineSnapshot(name: string, namespace: string, body: V1alpha1VirtualMachineSnapshot, _options?: Configuration): Promise<V1alpha1VirtualMachineSnapshot> {
        const result = this.api.replaceNamespacedVirtualMachineSnapshot(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Update a VirtualMachineSnapshotContent object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public replaceNamespacedVirtualMachineSnapshotContent(name: string, namespace: string, body: V1alpha1VirtualMachineSnapshotContent, _options?: Configuration): Promise<V1alpha1VirtualMachineSnapshotContent> {
        const result = this.api.replaceNamespacedVirtualMachineSnapshotContent(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Update a VirtualMachineClusterFlavor object.
     * @param name Name of the resource
     * @param body 
     */
    public replaceVirtualMachineClusterFlavor(name: string, body: V1alpha1VirtualMachineClusterFlavor, _options?: Configuration): Promise<V1alpha1VirtualMachineClusterFlavor> {
        const result = this.api.replaceVirtualMachineClusterFlavor(name, body, _options);
        return result.toPromise();
    }

    /**
     * Health endpoint
     */
    public v1CheckHealth(_options?: Configuration): Promise<string> {
        const result = this.api.v1CheckHealth(_options);
        return result.toPromise();
    }

    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    public v1Console(name: string, namespace: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1Console(name, namespace, _options);
        return result.toPromise();
    }

    /**
     * Get list of active filesystems on guest machine via guest agent
     */
    public v1Filesystemlist(_options?: Configuration): Promise<V1VirtualMachineInstanceFileSystemList> {
        const result = this.api.v1Filesystemlist(_options);
        return result.toPromise();
    }

    /**
     * Freeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1Freeze(name: string, namespace: string, body: V1FreezeUnfreezeTimeout, _options?: Configuration): Promise<string> {
        const result = this.api.v1Freeze(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     */
    public v1Guestfs(_options?: Configuration): Promise<string> {
        const result = this.api.v1Guestfs(_options);
        return result.toPromise();
    }

    /**
     * Get guest agent os information
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    public v1Guestosinfo(name: string, namespace: string, _options?: Configuration): Promise<V1VirtualMachineInstanceGuestAgentInfo> {
        const result = this.api.v1Guestosinfo(name, namespace, _options);
        return result.toPromise();
    }

    /**
     * Migrate a running VirtualMachine to another node.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    public v1Migrate(name: string, namespace: string, _options?: Configuration): Promise<string> {
        const result = this.api.v1Migrate(name, namespace, _options);
        return result.toPromise();
    }

    /**
     * Pause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1Pause(name: string, namespace: string, body: V1PauseOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1Pause(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Restart a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1Restart(name: string, namespace: string, body?: V1RestartOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1Restart(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Start a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1Start(name: string, namespace: string, body: V1StartOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1Start(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Stop a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1Stop(name: string, namespace: string, body?: V1StopOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1Stop(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Test endpoint verifying apiserver connectivity.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    public v1Test(name: string, namespace: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1Test(name, namespace, _options);
        return result.toPromise();
    }

    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    public v1Unfreeze(name: string, namespace: string, _options?: Configuration): Promise<string> {
        const result = this.api.v1Unfreeze(name, namespace, _options);
        return result.toPromise();
    }

    /**
     * Unpause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1Unpause(name: string, namespace: string, body: V1UnpauseOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1Unpause(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Get list of active users via guest agent
     */
    public v1Userlist(_options?: Configuration): Promise<V1VirtualMachineInstanceGuestOSUserList> {
        const result = this.api.v1Userlist(_options);
        return result.toPromise();
    }

    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    public v1VNC(name: string, namespace: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1VNC(name, namespace, _options);
        return result.toPromise();
    }

    /**
     */
    public v1Version(_options?: Configuration): Promise<void> {
        const result = this.api.v1Version(_options);
        return result.toPromise();
    }

    /**
     * Health endpoint
     */
    public v1alpha3CheckHealth(_options?: Configuration): Promise<string> {
        const result = this.api.v1alpha3CheckHealth(_options);
        return result.toPromise();
    }

    /**
     * Open a websocket connection to a serial console on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    public v1alpha3Console(name: string, namespace: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1alpha3Console(name, namespace, _options);
        return result.toPromise();
    }

    /**
     * Get list of active filesystems on guest machine via guest agent
     */
    public v1alpha3Filesystemlist(_options?: Configuration): Promise<V1VirtualMachineInstanceFileSystemList> {
        const result = this.api.v1alpha3Filesystemlist(_options);
        return result.toPromise();
    }

    /**
     * Freeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1alpha3Freeze(name: string, namespace: string, body: V1FreezeUnfreezeTimeout, _options?: Configuration): Promise<string> {
        const result = this.api.v1alpha3Freeze(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Get a KubeVirt API Group
     */
    public v1alpha3GetSubAPIGroup(_options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIGroup> {
        const result = this.api.v1alpha3GetSubAPIGroup(_options);
        return result.toPromise();
    }

    /**
     */
    public v1alpha3Guestfs(_options?: Configuration): Promise<string> {
        const result = this.api.v1alpha3Guestfs(_options);
        return result.toPromise();
    }

    /**
     * Get guest agent os information
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    public v1alpha3Guestosinfo(name: string, namespace: string, _options?: Configuration): Promise<V1VirtualMachineInstanceGuestAgentInfo> {
        const result = this.api.v1alpha3Guestosinfo(name, namespace, _options);
        return result.toPromise();
    }

    /**
     * Migrate a running VirtualMachine to another node.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    public v1alpha3Migrate(name: string, namespace: string, _options?: Configuration): Promise<string> {
        const result = this.api.v1alpha3Migrate(name, namespace, _options);
        return result.toPromise();
    }

    /**
     * Pause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1alpha3Pause(name: string, namespace: string, body: V1PauseOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1alpha3Pause(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Restart a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1alpha3Restart(name: string, namespace: string, body?: V1RestartOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1alpha3Restart(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Start a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1alpha3Start(name: string, namespace: string, body: V1StartOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1alpha3Start(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Stop a VirtualMachine object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1alpha3Stop(name: string, namespace: string, body?: V1StopOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1alpha3Stop(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Test endpoint verifying apiserver connectivity.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    public v1alpha3Test(name: string, namespace: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1alpha3Test(name, namespace, _options);
        return result.toPromise();
    }

    /**
     * Unfreeze a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    public v1alpha3Unfreeze(name: string, namespace: string, _options?: Configuration): Promise<string> {
        const result = this.api.v1alpha3Unfreeze(name, namespace, _options);
        return result.toPromise();
    }

    /**
     * Unpause a VirtualMachineInstance object.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1alpha3Unpause(name: string, namespace: string, body: V1UnpauseOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1alpha3Unpause(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Get list of active users via guest agent
     */
    public v1alpha3Userlist(_options?: Configuration): Promise<V1VirtualMachineInstanceGuestOSUserList> {
        const result = this.api.v1alpha3Userlist(_options);
        return result.toPromise();
    }

    /**
     * Open a websocket connection to connect to VNC on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    public v1alpha3VNC(name: string, namespace: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1alpha3VNC(name, namespace, _options);
        return result.toPromise();
    }

    /**
     */
    public v1alpha3Version(_options?: Configuration): Promise<void> {
        const result = this.api.v1alpha3Version(_options);
        return result.toPromise();
    }

    /**
     */
    public v1alpha3dumpClusterProfiler(_options?: Configuration): Promise<void> {
        const result = this.api.v1alpha3dumpClusterProfiler(_options);
        return result.toPromise();
    }

    /**
     * Get a KubeVirt API resources
     */
    public v1alpha3getAPISubResources(_options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList> {
        const result = this.api.v1alpha3getAPISubResources(_options);
        return result.toPromise();
    }

    /**
     */
    public v1alpha3startClusterProfiler(_options?: Configuration): Promise<void> {
        const result = this.api.v1alpha3startClusterProfiler(_options);
        return result.toPromise();
    }

    /**
     */
    public v1alpha3stopClusterProfiler(_options?: Configuration): Promise<void> {
        const result = this.api.v1alpha3stopClusterProfiler(_options);
        return result.toPromise();
    }

    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    public v1alpha3usbredir(name: string, namespace: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1alpha3usbredir(name, namespace, _options);
        return result.toPromise();
    }

    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1alpha3vmAddvolume(name: string, namespace: string, body: V1AddVolumeOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1alpha3vmAddvolume(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    public v1alpha3vmPortForward(name: string, namespace: string, port: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1alpha3vmPortForward(name, namespace, port, _options);
        return result.toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    public v1alpha3vmPortForwardWithProtocol(name: string, namespace: string, port: string, protocol: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1alpha3vmPortForwardWithProtocol(name, namespace, port, protocol, _options);
        return result.toPromise();
    }

    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1alpha3vmRemovevolume(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1alpha3vmRemovevolume(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1alpha3vmiAddvolume(name: string, namespace: string, body: V1AddVolumeOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1alpha3vmiAddvolume(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    public v1alpha3vmiPortForward(name: string, namespace: string, port: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1alpha3vmiPortForward(name, namespace, port, _options);
        return result.toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    public v1alpha3vmiPortForwardWithProtocol(name: string, namespace: string, port: string, protocol: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1alpha3vmiPortForwardWithProtocol(name, namespace, port, protocol, _options);
        return result.toPromise();
    }

    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1alpha3vmiRemovevolume(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1alpha3vmiRemovevolume(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     */
    public v1dumpClusterProfiler(_options?: Configuration): Promise<void> {
        const result = this.api.v1dumpClusterProfiler(_options);
        return result.toPromise();
    }

    /**
     * Get a KubeVirt API resources
     */
    public v1getAPISubResources(_options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1APIResourceList> {
        const result = this.api.v1getAPISubResources(_options);
        return result.toPromise();
    }

    /**
     */
    public v1startClusterProfiler(_options?: Configuration): Promise<void> {
        const result = this.api.v1startClusterProfiler(_options);
        return result.toPromise();
    }

    /**
     */
    public v1stopClusterProfiler(_options?: Configuration): Promise<void> {
        const result = this.api.v1stopClusterProfiler(_options);
        return result.toPromise();
    }

    /**
     * Open a websocket connection to connect to USB device on the specified VirtualMachineInstance.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     */
    public v1usbredir(name: string, namespace: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1usbredir(name, namespace, _options);
        return result.toPromise();
    }

    /**
     * Add a volume and disk to a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1vmAddvolume(name: string, namespace: string, body: V1AddVolumeOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1vmAddvolume(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic to the running VMI for the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    public v1vmPortForward(name: string, namespace: string, port: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1vmPortForward(name, namespace, port, _options);
        return result.toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachine and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    public v1vmPortForwardWithProtocol(name: string, namespace: string, port: string, protocol: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1vmPortForwardWithProtocol(name, namespace, port, protocol, _options);
        return result.toPromise();
    }

    /**
     * Removes a volume and disk from a running Virtual Machine.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1vmRemovevolume(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1vmRemovevolume(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Add a volume and disk to a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1vmiAddvolume(name: string, namespace: string, body: V1AddVolumeOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1vmiAddvolume(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     */
    public v1vmiPortForward(name: string, namespace: string, port: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1vmiPortForward(name, namespace, port, _options);
        return result.toPromise();
    }

    /**
     * Open a websocket connection forwarding traffic of the specified protocol (either tcp or udp) to the specified VirtualMachineInstance and port.
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param port The target port for portforward on the VirtualMachineInstance.
     * @param protocol The protocol for portforward on the VirtualMachineInstance.
     */
    public v1vmiPortForwardWithProtocol(name: string, namespace: string, port: string, protocol: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1vmiPortForwardWithProtocol(name, namespace, port, protocol, _options);
        return result.toPromise();
    }

    /**
     * Removes a volume and disk from a running Virtual Machine Instance
     * @param name Name of the resource
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param body 
     */
    public v1vmiRemovevolume(name: string, namespace: string, body: V1RemoveVolumeOptions, _options?: Configuration): Promise<string> {
        const result = this.api.v1vmiRemovevolume(name, namespace, body, _options);
        return result.toPromise();
    }

    /**
     * Watch a KubeVirtList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchKubeVirtListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchKubeVirtListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a KubeVirt object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchNamespacedKubeVirt(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchNamespacedKubeVirt(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachine object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchNamespacedVirtualMachine(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchNamespacedVirtualMachine(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineFlavor object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchNamespacedVirtualMachineFlavor(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchNamespacedVirtualMachineFlavor(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineInstance object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchNamespacedVirtualMachineInstance(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchNamespacedVirtualMachineInstance(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineInstanceMigration object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchNamespacedVirtualMachineInstanceMigration(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchNamespacedVirtualMachineInstanceMigration(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineInstancePreset object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchNamespacedVirtualMachineInstancePreset(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchNamespacedVirtualMachineInstancePreset(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineInstanceReplicaSet object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchNamespacedVirtualMachineInstanceReplicaSet(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchNamespacedVirtualMachineInstanceReplicaSet(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineRestore object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchNamespacedVirtualMachineRestore(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchNamespacedVirtualMachineRestore(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineSnapshot object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchNamespacedVirtualMachineSnapshot(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchNamespacedVirtualMachineSnapshot(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineSnapshotContent object.
     * @param namespace Object name and auth scope, such as for teams and projects
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchNamespacedVirtualMachineSnapshotContent(namespace: string, _continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchNamespacedVirtualMachineSnapshotContent(namespace, _continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineClusterFlavorList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchVirtualMachineClusterFlavorListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchVirtualMachineClusterFlavorListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineFlavorList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchVirtualMachineFlavorListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchVirtualMachineFlavorListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineInstanceList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchVirtualMachineInstanceListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchVirtualMachineInstanceListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineInstanceMigrationList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchVirtualMachineInstanceMigrationListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchVirtualMachineInstanceMigrationListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineInstancePresetList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchVirtualMachineInstancePresetListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchVirtualMachineInstancePresetListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineInstanceReplicaSetList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchVirtualMachineInstanceReplicaSetListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchVirtualMachineInstanceReplicaSetListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchVirtualMachineListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchVirtualMachineListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineRestoreList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchVirtualMachineRestoreListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchVirtualMachineRestoreListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineSnapshotContentList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchVirtualMachineSnapshotContentListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchVirtualMachineSnapshotContentListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }

    /**
     * Watch a VirtualMachineSnapshotList object.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server the server will respond with a 410 ResourceExpired error indicating the client must restart their list without the continue field. This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param includeUninitialized If true, partially initialized resources are included in the response.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history.
     * @param timeoutSeconds TimeoutSeconds for the list/watch call.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    public watchVirtualMachineSnapshotListForAllNamespaces(_continue?: string, fieldSelector?: string, includeUninitialized?: boolean, labelSelector?: string, limit?: number, resourceVersion?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<K8sIoApimachineryPkgApisMetaV1WatchEvent> {
        const result = this.api.watchVirtualMachineSnapshotListForAllNamespaces(_continue, fieldSelector, includeUninitialized, labelSelector, limit, resourceVersion, timeoutSeconds, watch, _options);
        return result.toPromise();
    }


}



