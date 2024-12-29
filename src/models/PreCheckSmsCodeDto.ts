/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PreCheckSmsCodeDto = {
  /**
   *Mobile phone number without area code. If it is a foreign mobile phone number, please specify the area code in the phoneCountryCode parameter.
   */
  phone: string;
  /**
   * SMS verification code
   */
  passCode: string;
  /**
   * Mobile phone area code, mainland China mobile phone number is optional. GenAuth SMS service does not have built-in support for international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. A complete list of mobile phone area codes can be found at https://en.wikipedia.org/wiki/List_of_country_calling_codes.
   */
  phoneCountryCode?: string;
  /**
   * SMS channel, specify the purpose of sending this SMS, such as CHANNEL_LOGIN for login, CHANNEL_REGISTER for registration.
   */
  channel: PreCheckSmsCodeDto.channel;
};

export namespace PreCheckSmsCodeDto {
  /**
   * SMS channel, specify the purpose of sending this SMS, such as CHANNEL_LOGIN for login, CHANNEL_REGISTER for registration.
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
