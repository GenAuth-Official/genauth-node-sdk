/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PublicKeyCredentialDescriptorDto = {
    /**
     * Allowed credential IDs
     */
    id: string;
    /**
     * The communication method between authenticator and user agent required for credentials:
     * - `ble`: Authenticator that can be connected via Bluetooth
     * - `internal`: platform built-in authenticator that cannot be removed
     * - `nfc`: Authenticator that can connect via NFC
     * - `usb`: Authenticator that can be connected via USB
     *
     */
    transports: Array<string>;
    /**
     * Fixed value, public-key
     */
    type: string;
};
