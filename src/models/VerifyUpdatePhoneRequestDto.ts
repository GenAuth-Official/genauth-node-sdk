/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdatePhoneByPhonePassCodeDto } from "./UpdatePhoneByPhonePassCodeDto";

export type VerifyUpdatePhoneRequestDto = {
  /**
   * Data verified using the phone number verification code
   */
  phonePassCodePayload: UpdatePhoneByPhonePassCodeDto;
  /**
   * Modify the verification method for the phone number:
   * - `PHONE_PASSCODE`: Use the SMS verification code for verification. Currently, only this method is supported.
   *
   */
  verifyMethod: VerifyUpdatePhoneRequestDto.verifyMethod;
};

export namespace VerifyUpdatePhoneRequestDto {
  /**
   * Modify the verification method of the mobile phone number:
   * - `PHONE_PASSCODE`: Use the SMS verification code for verification. Currently only this method is supported.
   *
   */
  export enum verifyMethod {
    PHONE_PASSCODE = "PHONE_PASSCODE",
  }
}
