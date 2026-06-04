/**
 * Represent a subset of client devices that can be accessed by VMI. At the moment only, USB devices using Usbredir's library and tooling. Another fit would be a smartcard with libcacard.
 *
 * The struct is currently empty as there is no immediate request for user-facing APIs. This structure simply turns on USB redirection of UsbClientPassthroughMaxNumberOf devices.
 */
export type V1ClientPassthroughDevices = object;
