/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImportOtpItemDataDto } from "./ImportOtpItemDataDto";

export type ImportOtpItemDto = {
  /**
   * User ID
   */
  userId: string;
  /**
   * OTP Data
   */
  otp: ImportOtpItemDataDto;
};
