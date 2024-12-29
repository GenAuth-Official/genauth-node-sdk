/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthenticationCredentialDto } from "./AuthenticationCredentialDto";
import type { SignInByWebAuthnOptionsDto } from "./SignInByWebAuthnOptionsDto";

export type VerifyAuthenticationDto = {
  /**
   * Ticket obtained from the Get WebAuthn authentication request initialization parameter interface
   */
  ticket: string;
  /**
   * Authenticator credential information
   */
  authenticationCredential: AuthenticationCredentialDto;
  /**
   * Optional parameters
   */
  options?: SignInByWebAuthnOptionsDto;
};
