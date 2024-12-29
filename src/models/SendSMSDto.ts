/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendSMSDto = {
  /**
   * SMS channel, specify the purpose of sending this SMS:
   * - `CHANNEL_LOGIN`: used for user login
   * - `CHANNEL_REGISTER`: used for user registration
   * - `CHANNEL_RESET_PASSWORD`: used to reset password
   * - `CHANNEL_BIND_PHONE`: used to bind mobile phone number
   * - `CHANNEL_UNBIND_PHONE`: used to unbind mobile phone number
   * - `CHANNEL_BIND_MFA`: used to bind MFA
   * - `CHANNEL_VERIFY_MFA`: used for verification MFA
   * - `CHANNEL_UNBIND_MFA`: used to unbind MFA
   * - `CHANNEL_COMPLETE_PHONE`: used to complete mobile phone number information when registering/logging in
   * - `CHANNEL_IDENTITY_VERIFICATION`: used for user real-name authentication
   * - `CHANNEL_DELETE_ACCOUNT`: used to cancel account
   *
   */
  channel: SendSMSDto.channel;
  /**
   *Mobile phone number without area code. If it is a foreign mobile phone number, please specify the area code in the phoneCountryCode parameter.
   */
  phoneNumber: string;
  /**
   * Mobile phone area code, mainland China mobile phone number is optional. GenAuth SMS service does not have built-in support for international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. A complete list of mobile phone area codes can be found at https://en.wikipedia.org/wiki/List_of_country_calling_codes.
   */
  phoneCountryCode?: string;
};

export namespace SendSMSDto {
  /**
   * SMS channel, specify the purpose of sending this SMS:
   * - `CHANNEL_LOGIN`: used for user login
   * - `CHANNEL_REGISTER`: used for user registration
   * - `CHANNEL_RESET_PASSWORD`: used to reset password
   * - `CHANNEL_BIND_PHONE`: used to bind mobile phone number
   * - `CHANNEL_UNBIND_PHONE`: used to unbind mobile phone number
   * - `CHANNEL_BIND_MFA`: used to bind MFA
   * - `CHANNEL_VERIFY_MFA`: used to verify MFA
   * - `CHANNEL_UNBIND_MFA`: used to unbind MFA
   * - `CHANNEL_COMPLETE_PHONE`: used to complete mobile phone number information when registering/logging in
   * - `CHANNEL_IDENTITY_VERIFICATION`: used for user real-name authentication
   * - `CHANNEL_DELETE_ACCOUNT`: used to cancel account
   *
   */
  export enum channel {
    CHANNEL_LOGIN = "CHANNEL_LOGIN",
    CHANNEL_REGISTER = "CHANNEL_REGISTER",
    CHANNEL_RESET_PASSWORD = "CHANNEL_RESET_PASSWORD",
    CHANNEL_BIND_PHONE = "CHANNEL_BIND_PHONE",
    CHANNEL_UNBIND_PHONE = "CHANNEL_UNBIND_PHONE",
    CHANNEL_BIND_MFA = "CHANNEL_BIND_MFA",
    CHANNEL_VERIFY_MFA = "CHANNEL_VERIFY_MFA",
    CHANNEL_UNBIND_MFA = "CHANNEL_UNBIND_MFA",
    CHANNEL_COMPLETE_PHONE = "CHANNEL_COMPLETE_PHONE",
    CHANNEL_IDENTITY_VERIFICATION = "CHANNEL_IDENTITY_VERIFICATION",
    CHANNEL_DELETE_ACCOUNT = "CHANNEL_DELETE_ACCOUNT",
  }
}
