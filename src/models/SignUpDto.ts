/*istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SignUpByPassCodeDto } from './SignUpByPassCodeDto';
import type { SignUpByPasswordDto } from './SignUpByPasswordDto';
import type { SignUpOptionsDto } from './SignUpOptionsDto';
import type { SignUpProfileDto } from './SignUpProfileDto';

export type SignUpDto = {
    /**
     * Registration method:
     * - `PASSWORD`: Email password method
     * - `PASSCODE`: Email/mobile phone number verification code method
     *
     */
    connection: SignUpDto.connection;
    /**
     * This parameter is required when the registration method is `PASSWORD`.
     */
    passwordPayload?: SignUpByPasswordDto;
    /**
     * This parameter is required when the authentication method is `PASSCODE`
     */
    passCodePayload?: SignUpByPassCodeDto;
    /**
     * User information
     */
    profile?: SignUpProfileDto;
    /**
     * Optional parameters
     */
    options?: SignUpOptionsDto;
};

export namespace SignUpDto {

    /**
     * Registration method:
     * - `PASSWORD`: Email password method
     * - `PASSCODE`: Email/mobile phone number verification code method
     *
     */
    export enum connection {
        PASSWORD = 'PASSWORD',
        PASSCODE = 'PASSCODE',
    }


}
