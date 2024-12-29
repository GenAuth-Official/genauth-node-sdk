/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplicationRegisterConfigInputDto = {
  /**
   * Enabled registration method
   */
  enabledBasicRegisterMethods: Array<
    "PHONE_CODE" | "EMAIL_CODE" | "EMAIL_PASSWORD"
  >;
  /**
   * Default registration type
   * - `PASSWORD`: Password type, supports email + password for login
   * - `PASSCODE`: Verification code type, depending on the registration method you enable, supports mobile phone number/email + verification code for login
   *
   */
  defaultRegisterMethod: ApplicationRegisterConfigInputDto.defaultRegisterMethod;
};

export namespace ApplicationRegisterConfigInputDto {
  /**
   * Default registration type
   * - `PASSWORD`: Password type, supports email + Password to log in
   * - `PASSCODE`: verification code type, depends on the registration method you enable, supports mobile phone number/email + verification code to log in
   *
   */
  export enum defaultRegisterMethod {
    PASSCODE = "PASSCODE",
    PASSWORD = "PASSWORD",
  }
}
