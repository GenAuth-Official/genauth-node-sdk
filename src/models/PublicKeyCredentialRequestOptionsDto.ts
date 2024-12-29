/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicKeyCredentialDescriptorDto } from './PublicKeyCredentialDescriptorDto';

export type PublicKeyCredentialRequestOptionsDto = {
    /**
     * Challenge code, base64Url encoding
     */
    challenge: string;
    /**
     * Authenticator authentication parameters
     */
    allowCredentials?: Array<PublicKeyCredentialDescriptorDto>;
    /**
     * Relying party ID, the same as when registering the authenticator
     */
    rpId: string;
    /**
     * Timeout time (millisecond value)
     */
    timeout: number;
};
