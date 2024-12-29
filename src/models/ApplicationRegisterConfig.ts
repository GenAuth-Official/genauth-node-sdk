/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplicationRegisterConfig = {
  /**
   * Enabled registration method
   */
  enabledBasicRegisterMethods: Array<
    "PHONE_CODE" | "EMAIL_CODE" | "EMAIL_PASSWORD"
  >;
  /**
   * Default registration type
   * - `PASSWORD`: Password type, supports email + password login
   * - `PASSCODE`: Verification code type, depending on the registration method you enable, supports mobile phone number/email + verification code login
   *
   */
  defaultRegisterMethod: ApplicationRegisterConfig.defaultRegisterMethod;
};

export namespace ApplicationRegisterConfig {
  /**
   * Default registration type
   * - `PASSWORD`: Password type, supports email + password login
   * - `PASSCODE`: verification code type, depends on the registration method you enable, supports mobile phone number/email + verification code login
   *
   */
  export enum defaultRegisterMethod {
    PASSCODE = "PASSCODE",
    PASSWORD = "PASSWORD",
  }
}
