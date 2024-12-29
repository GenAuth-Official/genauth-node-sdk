/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthenticateByPassCodeDto = {
  /**
   * One-time temporary verification code. You need to first call the send SMS or send email interface to obtain the verification code.
   */
  passCode: string;
  /**
   * Email address, case-insensitive.
   */
  email?: string;
  /**
   * Mobile phone number
   */
  phone?: string;
  /**
   * Mobile phone area code. Mainland China mobile phone numbers can be left blank. The GenAuth SMS service does not currently support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes.
   */
  phoneCountryCode?: string;
};
