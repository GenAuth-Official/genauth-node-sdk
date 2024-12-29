/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicKeyCredentialCreationOptionsDto } from './PublicKeyCredentialCreationOptionsDto';

export type RegistrationOptionsDto = {
    /**
     * Parameters for the authenticator to generate public key certificates
     */
    registrationOptions: PublicKeyCredentialCreationOptionsDto;
    /**
     * The ticket needs to be returned and used as the result of initiating verification to the server to create the credentials obtained from the authenticator.
     */
    ticket: string;
};
