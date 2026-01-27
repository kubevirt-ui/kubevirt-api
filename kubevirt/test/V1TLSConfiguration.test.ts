import { V1TLSConfiguration } from '../models/V1TLSConfiguration';

export const testObject: V1TLSConfiguration = {
  ciphers: ['TLS_AES_128_GCM_SHA256', 'TLS_AES_256_GCM_SHA384'],
  minTLSVersion: 'VersionTLS12',
};
