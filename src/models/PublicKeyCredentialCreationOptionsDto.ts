/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicKeyCredentialDescriptorDto } from './PublicKeyCredentialDescriptorDto';
import type { PublicKeyCredentialParametersDto } from './PublicKeyCredentialParametersDto';
import type { PublicKeyCredentialRpEntityDto } from './PublicKeyCredentialRpEntityDto';
import type { PublicKeyCredentialUserEntityDto } from './PublicKeyCredentialUserEntityDto';

export type PublicKeyCredentialCreationOptionsDto = {
    /**
     * Challenge code, base64Url encoding
     */
    challenge: string;
    /**
     * Used to identify credentials to be excluded to avoid the same user registering the same authenticator multiple times
     */
    excludeCredentials: Array<PublicKeyCredentialDescriptorDto>;
    /**
     * Algorithm list, indicating which signature algorithms are accepted by the relying party
     */
    pubKeyCredParams: Array<PublicKeyCredentialParametersDto>;
    /**
     * Relying party information
     */
    rp: PublicKeyCredentialRpEntityDto;
    /**
     * Timeout time (millisecond value)
     */
    timeout: number;
    /**
     * User information
     */
    user: PublicKeyCredentialUserEntityDto;
};
