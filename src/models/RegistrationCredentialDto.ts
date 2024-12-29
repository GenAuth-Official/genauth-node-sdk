/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthenticatorAttestationResponseDto } from './AuthenticatorAttestationResponseDto';

export type RegistrationCredentialDto = {
    /**
     * Base64URL encoded credential ID
     */
    id: string;
    /**
     *Original voucher ID
     */
    rawId: string;
    /**
     * Objects for relying parties to verify and register
     */
    response: AuthenticatorAttestationResponseDto;
    /**
     * Optional parameter, the communication method between the authenticator and the user agent required for the certificate:
     * - `ble`: Authenticator that can be connected via Bluetooth
     * - `internal`: platform built-in authenticator that cannot be removed
     * - `nfc`: Authenticator that can connect via NFC
     * - `usb`: Authenticator that can be connected via USB
     *
     */
    transports?: Array<string>;
    /**
     * Fixed value, 'public-key'
     */
    type: string;
};
