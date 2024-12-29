/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthenticateByADDto } from './AuthenticateByADDto';
import type { AuthenticateByLDAPDto } from './AuthenticateByLDAPDto';
import type { AuthenticateByPassCodeDto } from './AuthenticateByPassCodeDto';
import type { AuthenticateByPasswordDto } from './AuthenticateByPasswordDto';
import type { SignInOptionsDto } from './SignInOptionsDto';

export type LoginByCredentialsDto = {
    /**
     *Authentication method:
     * - `PASSWORD`: Use password for authentication.
     * - `PASSCODE`: Use a one-time temporary verification code for authentication.
     * - `LDAP`: Authentication based on LDAP user directory.
     * - `AD`: Authentication based on Windows AD user directory.
     *
     */
    connection: LoginByCredentialsDto.connection;
    /**
     * This parameter is required when the authentication method is `PASSWORD`.
     */
    passwordPayload?: AuthenticateByPasswordDto;
    /**
     * This parameter is required when the authentication method is `PASSCODE`
     */
    passCodePayload?: AuthenticateByPassCodeDto;
    /**
     * This parameter is required when the authentication method is `AD`
     */
    adPayload?: AuthenticateByADDto;
    /**
     * This parameter is required when the authentication method is `LDAP`
     */
    ldapPayload?: AuthenticateByLDAPDto;
    /**
     * Optional parameters
     */
    options?: SignInOptionsDto;
};

export namespace LoginByCredentialsDto {

    /**
     *Authentication method:
     * - `PASSWORD`: Use password for authentication.
     * - `PASSCODE`: Use a one-time temporary verification code for authentication.
     * - `LDAP`: Authentication based on LDAP user directory.
     * - `AD`: Authentication based on Windows AD user directory.
     *
     */
    export enum connection {
        PASSWORD = 'PASSWORD',
        PASSCODE = 'PASSCODE',
        LDAP = 'LDAP',
        AD = 'AD',
    }


}
