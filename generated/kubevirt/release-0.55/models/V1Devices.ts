/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1Disk,
    V1DiskFromJSON,
    V1DiskFromJSONTyped,
    V1DiskToJSON,
    V1Filesystem,
    V1FilesystemFromJSON,
    V1FilesystemFromJSONTyped,
    V1FilesystemToJSON,
    V1GPU,
    V1GPUFromJSON,
    V1GPUFromJSONTyped,
    V1GPUToJSON,
    V1HostDevice,
    V1HostDeviceFromJSON,
    V1HostDeviceFromJSONTyped,
    V1HostDeviceToJSON,
    V1Input,
    V1InputFromJSON,
    V1InputFromJSONTyped,
    V1InputToJSON,
    V1Interface,
    V1InterfaceFromJSON,
    V1InterfaceFromJSONTyped,
    V1InterfaceToJSON,
    V1SoundDevice,
    V1SoundDeviceFromJSON,
    V1SoundDeviceFromJSONTyped,
    V1SoundDeviceToJSON,
    V1Watchdog,
    V1WatchdogFromJSON,
    V1WatchdogFromJSONTyped,
    V1WatchdogToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Devices
 */
export interface V1Devices {
    /**
     * Whether to attach the default graphics device or not. VNC will not be available if set to false. Defaults to true.
     * @type {boolean}
     * @memberof V1Devices
     */
    autoattachGraphicsDevice?: boolean;
    /**
     * Whether to attach the Memory balloon device with default period. Period can be adjusted in virt-config. Defaults to true.
     * @type {boolean}
     * @memberof V1Devices
     */
    autoattachMemBalloon?: boolean;
    /**
     * Whether to attach a pod network interface. Defaults to true.
     * @type {boolean}
     * @memberof V1Devices
     */
    autoattachPodInterface?: boolean;
    /**
     * Whether to attach the default serial console or not. Serial console access will not be available if set to false. Defaults to true.
     * @type {boolean}
     * @memberof V1Devices
     */
    autoattachSerialConsole?: boolean;
    /**
     * Whether or not to enable virtio multi-queue for block devices. Defaults to false.
     * @type {boolean}
     * @memberof V1Devices
     */
    blockMultiQueue?: boolean;
    /**
     * Represent a subset of client devices that can be accessed by VMI. At the moment only, USB devices using Usbredir's library and tooling. Another fit would be a smartcard with libcacard.
     * 
     * The struct is currently empty as there is no immediate request for user-facing APIs. This structure simply turns on USB redirection of UsbClientPassthroughMaxNumberOf devices.
     * @type {object}
     * @memberof V1Devices
     */
    clientPassthrough?: object;
    /**
     * DisableHotplug disabled the ability to hotplug disks.
     * @type {boolean}
     * @memberof V1Devices
     */
    disableHotplug?: boolean;
    /**
     * Disks describes disks, cdroms and luns which are connected to the vmi.
     * @type {Array<V1Disk>}
     * @memberof V1Devices
     */
    disks?: Array<V1Disk>;
    /**
     * Filesystems describes filesystem which is connected to the vmi.
     * @type {Array<V1Filesystem>}
     * @memberof V1Devices
     */
    filesystems?: Array<V1Filesystem>;
    /**
     * Whether to attach a GPU device to the vmi.
     * @type {Array<V1GPU>}
     * @memberof V1Devices
     */
    gpus?: Array<V1GPU>;
    /**
     * Whether to attach a host device to the vmi.
     * @type {Array<V1HostDevice>}
     * @memberof V1Devices
     */
    hostDevices?: Array<V1HostDevice>;
    /**
     * Inputs describe input devices
     * @type {Array<V1Input>}
     * @memberof V1Devices
     */
    inputs?: Array<V1Input>;
    /**
     * Interfaces describe network interfaces which are added to the vmi.
     * @type {Array<V1Interface>}
     * @memberof V1Devices
     */
    interfaces?: Array<V1Interface>;
    /**
     * If specified, virtual network interfaces configured with a virtio bus will also enable the vhost multiqueue feature for network devices. The number of queues created depends on additional factors of the VirtualMachineInstance, like the number of guest CPUs.
     * @type {boolean}
     * @memberof V1Devices
     */
    networkInterfaceMultiqueue?: boolean;
    /**
     * Rng represents the random device passed from host
     * @type {object}
     * @memberof V1Devices
     */
    rng?: object;
    /**
     * 
     * @type {V1SoundDevice}
     * @memberof V1Devices
     */
    sound?: V1SoundDevice;
    /**
     * 
     * @type {object}
     * @memberof V1Devices
     */
    tpm?: object;
    /**
     * Fall back to legacy virtio 0.9 support if virtio bus is selected on devices. This is helpful for old machines like CentOS6 or RHEL6 which do not understand virtio_non_transitional (virtio 1.0).
     * @type {boolean}
     * @memberof V1Devices
     */
    useVirtioTransitional?: boolean;
    /**
     * 
     * @type {V1Watchdog}
     * @memberof V1Devices
     */
    watchdog?: V1Watchdog;
}

export function V1DevicesFromJSON(json: any): V1Devices {
    return V1DevicesFromJSONTyped(json, false);
}

export function V1DevicesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Devices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoattachGraphicsDevice': !exists(json, 'autoattachGraphicsDevice') ? undefined : json['autoattachGraphicsDevice'],
        'autoattachMemBalloon': !exists(json, 'autoattachMemBalloon') ? undefined : json['autoattachMemBalloon'],
        'autoattachPodInterface': !exists(json, 'autoattachPodInterface') ? undefined : json['autoattachPodInterface'],
        'autoattachSerialConsole': !exists(json, 'autoattachSerialConsole') ? undefined : json['autoattachSerialConsole'],
        'blockMultiQueue': !exists(json, 'blockMultiQueue') ? undefined : json['blockMultiQueue'],
        'clientPassthrough': !exists(json, 'clientPassthrough') ? undefined : json['clientPassthrough'],
        'disableHotplug': !exists(json, 'disableHotplug') ? undefined : json['disableHotplug'],
        'disks': !exists(json, 'disks') ? undefined : ((json['disks'] as Array<any>).map(V1DiskFromJSON)),
        'filesystems': !exists(json, 'filesystems') ? undefined : ((json['filesystems'] as Array<any>).map(V1FilesystemFromJSON)),
        'gpus': !exists(json, 'gpus') ? undefined : ((json['gpus'] as Array<any>).map(V1GPUFromJSON)),
        'hostDevices': !exists(json, 'hostDevices') ? undefined : ((json['hostDevices'] as Array<any>).map(V1HostDeviceFromJSON)),
        'inputs': !exists(json, 'inputs') ? undefined : ((json['inputs'] as Array<any>).map(V1InputFromJSON)),
        'interfaces': !exists(json, 'interfaces') ? undefined : ((json['interfaces'] as Array<any>).map(V1InterfaceFromJSON)),
        'networkInterfaceMultiqueue': !exists(json, 'networkInterfaceMultiqueue') ? undefined : json['networkInterfaceMultiqueue'],
        'rng': !exists(json, 'rng') ? undefined : json['rng'],
        'sound': !exists(json, 'sound') ? undefined : V1SoundDeviceFromJSON(json['sound']),
        'tpm': !exists(json, 'tpm') ? undefined : json['tpm'],
        'useVirtioTransitional': !exists(json, 'useVirtioTransitional') ? undefined : json['useVirtioTransitional'],
        'watchdog': !exists(json, 'watchdog') ? undefined : V1WatchdogFromJSON(json['watchdog']),
    };
}

export function V1DevicesToJSON(value?: V1Devices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'autoattachGraphicsDevice': value.autoattachGraphicsDevice,
        'autoattachMemBalloon': value.autoattachMemBalloon,
        'autoattachPodInterface': value.autoattachPodInterface,
        'autoattachSerialConsole': value.autoattachSerialConsole,
        'blockMultiQueue': value.blockMultiQueue,
        'clientPassthrough': value.clientPassthrough,
        'disableHotplug': value.disableHotplug,
        'disks': value.disks === undefined ? undefined : ((value.disks as Array<any>).map(V1DiskToJSON)),
        'filesystems': value.filesystems === undefined ? undefined : ((value.filesystems as Array<any>).map(V1FilesystemToJSON)),
        'gpus': value.gpus === undefined ? undefined : ((value.gpus as Array<any>).map(V1GPUToJSON)),
        'hostDevices': value.hostDevices === undefined ? undefined : ((value.hostDevices as Array<any>).map(V1HostDeviceToJSON)),
        'inputs': value.inputs === undefined ? undefined : ((value.inputs as Array<any>).map(V1InputToJSON)),
        'interfaces': value.interfaces === undefined ? undefined : ((value.interfaces as Array<any>).map(V1InterfaceToJSON)),
        'networkInterfaceMultiqueue': value.networkInterfaceMultiqueue,
        'rng': value.rng,
        'sound': V1SoundDeviceToJSON(value.sound),
        'tpm': value.tpm,
        'useVirtioTransitional': value.useVirtioTransitional,
        'watchdog': V1WatchdogToJSON(value.watchdog),
    };
}

