/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeleteAccountByEmailPassCodeDto } from "./DeleteAccountByEmailPassCodeDto";
import type { DeleteAccountByPasswordDto } from "./DeleteAccountByPasswordDto";
import type { DeleteAccountByPhonePassCodeDto } from "./DeleteAccountByPhonePassCodeDto";

export type VerifyDeleteAccountRequestDto = {
  /**
   * Account cancellation verification method:
   * - `PHONE_PASSCODE`: Use the phone number verification code method for verification.
   * - `EMAIL_PASSCODE`: Use the email verification code method for verification.
   * - `PASSWORD`: If the user has neither a phone number nor an email bound, the password can be used as a verification method.
   *
   */
  verifyMethod: VerifyDeleteAccountRequestDto.verifyMethod;
  /**
   * Data verified using a phone number verification code
   */
  phonePassCodePayload?: DeleteAccountByPhonePassCodeDto;
  /**
   * Data verified using an email verification code
   */
  emailPassCodePayload?: DeleteAccountByEmailPassCodeDto;
  /**
   * Data verified using a password
   */
  passwordPayload?: DeleteAccountByPasswordDto;
};

export namespace VerifyDeleteAccountRequestDto {
  /**
   * Account cancellation verification method:
   * - `PHONE_PASSCODE`: Verify using a phone number verification code.
   * - `EMAIL_PASSCODE`: Verify using an email verification code.
   * - `PASSWORD`: If the user has neither a phone number nor an email bound, the password can be used as a verification method.
   * */ export enum verifyMethod {
    PHONE_PASSCODE = "PHONE_PASSCODE",
    EMAIL_PASSCODE = "EMAIL_PASSCODE",
    PASSWORD = "PASSWORD",
  }
}
