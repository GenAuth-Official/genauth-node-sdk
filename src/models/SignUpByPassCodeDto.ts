/*istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignUpByPassCodeDto = {
  /**
   * For a one-time temporary verification code, you need to first call the SMS or email interface to obtain the verification code.
   */
  passCode: string;
  /**
   * Email address is not case sensitive.
   */
  email?: string;
  /**
   * Phone number
   */
  phone?: string;
  /**
   * Mobile phone area code, mainland China mobile phone number is optional. The GenAuth SMS service currently does not have built-in support for international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. A complete list of mobile phone area codes can be found at https://en.wikipedia.org/wiki/List_of_country_calling_codes.
   */
  phoneCountryCode?: string;
};
