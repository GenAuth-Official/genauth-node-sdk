/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ import type { SignInByAdPayloadDto } from "./SignInByAdPayloadDto";
import type { SignInByLdapPayloadDto } from "./SignInByLdapPayloadDto";
import type { SignInByPassCodePayloadDto } from "./SignInByPassCodePayloadDto";
import type { SignInByPasswordPayloadDto } from "./SignInByPasswordPayloadDto";
import type { SignInOptionsDto } from "./SignInOptionsDto";
export type SigninByCredentialsDto = {
  /** *Authentication method: * - `PASSWORD`: Authentication using password.
   * - `PASSCODE`: Authentication using a one-time temporary verification code.
   * - `LDAP`: Authentication based on LDAP user directory.
   * - `AD`: Authentication based on Windows AD user directory.
   *
   * */
  connection: SigninByCredentialsDto.connection;
  /**
   * This parameter is required when the authentication method is `PASSWORD`.
   */
  passwordPayload?: SignInByPasswordPayloadDto;
  /**
   * This parameter is required when the authentication method is `PASSCODE`*/
  passCodePayload?: SignInByPassCodePayloadDto;
  /**
   * This parameter is required when the authentication method is `AD`*/
  adPayload?: SignInByAdPayloadDto;
  /**
   * This parameter is required when the authentication method is `LDAP`*/
  ldapPayload?: SignInByLdapPayloadDto;
  /**
   * Optional parameters*/
  options?: SignInOptionsDto;
  /**
   * Application ID. "Exchange token authentication method" is configured as `client_secret_post` and needs to be passed.
   */
  client_id?: string;
  /**
   * Application key. When the application's "Exchange token authentication method" is configured as `client_secret_post`, it needs to be passed.
   */
  client_secret?: string;
};

export namespace SigninByCredentialsDto {
  /**
   * Authentication method:
   * - `PASSWORD`: Use password for authentication. * - `PASSCODE`: Use a one-time temporary verification code for authentication.
   * - `LDAP`: Authentication based on an LDAP user directory.
   * - `AD`: Authentication based on a Windows AD user directory.
   *
   */
  export enum connection {
    PASSWORD = "PASSWORD",
    PASSCODE = "PASSCODE",
    LDAP = "LDAP",
    AD = "AD",
  }
}
