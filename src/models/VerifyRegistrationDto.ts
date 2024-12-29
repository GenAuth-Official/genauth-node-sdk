/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegistrationCredentialDto } from "./RegistrationCredentialDto";

export type VerifyRegistrationDto = {
  /**
   * Get the ticket when creating the initialization parameters of the credential
   */
  ticket: string;
  /**
   * Bind the authenticator credential information
   */
  registrationCredential: RegistrationCredentialDto;
  /**
   * Credential information type:
   * - `FINGERPRINT`: Fingerprint
   * - `FACE`: Face
   * - `OTHER` Other
   */
  authenticatorCode?: VerifyRegistrationDto.authenticatorCode;
};

export namespace VerifyRegistrationDto {
  /**
   * Credential information type:
   * - `FINGERPRINT`: Fingerprint
   * - `FACE`: Face
   * - `OTHER` Other */ export enum authenticatorCode {
    FINGERPRINT = "fingerprint",
    FACE = "face",
    OTHER = "other",
  }
}
