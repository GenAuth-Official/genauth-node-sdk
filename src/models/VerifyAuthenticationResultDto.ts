/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginTokenResponseDataDto } from "./LoginTokenResponseDataDto";

export type VerifyAuthenticationResultDto = {
  /**
   * Verify the result of the authenticator login authentication, true verification success
   */
  verified: boolean;
  /**
   * When the verification authenticator login authentication passes, that is, verified = true, this data will be returned.
   */
  tokenSet?: LoginTokenResponseDataDto;
};
