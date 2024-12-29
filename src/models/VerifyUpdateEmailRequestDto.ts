/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdateEmailByEmailPassCodeDto } from "./UpdateEmailByEmailPassCodeDto";

export type VerifyUpdateEmailRequestDto = {
  /**
   * Data verified using email verification code
   */
  emailPassCodePayload: UpdateEmailByEmailPassCodeDto;
  /**
   * Modify the verification method used by the current email:
   * - `EMAIL_PASSCODE`: Verify by email verification code, currently only this verification method is supported.
   *
   */
  verifyMethod: VerifyUpdateEmailRequestDto.verifyMethod;
};

export namespace VerifyUpdateEmailRequestDto {
  /**
   * Modify the verification method used by the current mailbox:
   * - `EMAIL_PASSCODE`: Verify by email verification code, currently only this verification method is supported.
   *
   */
  export enum verifyMethod {
    EMAIL_PASSCODE = "EMAIL_PASSCODE",
  }
}
