/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResetPasswordByPhonePassCodeDto = {
  /**
   *The mobile phone number bound to this account does not include the area code. If it is a foreign mobile phone number, please specify the area code in the phoneCountryCode parameter.
   */
  phoneNumber: string;
  /**
   * SMS verification code. Each SMS verification code can only be used once and is valid for one minute. You need to obtain it through the **Send SMS** interface.
   */
  passCode: string;
  /**
   * Mobile phone area code, mainland China mobile phone number is optional. GenAuth SMS service does not have built-in support for international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. A complete list of mobile phone area codes can be found at https://en.wikipedia.org/wiki/List_of_country_calling_codes.
   */
  phoneCountryCode?: string;
};
