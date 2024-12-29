/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdatePhoneByPhonePassCodeDto = {
  /**
   * New phone number without area code. If it is a foreign phone number, please specify the area code in the newPhoneCountryCode parameter.
   */
  newPhoneNumber: string;
  /**
   * Verification code
   */
  newPhonePassCode: string;
  /**
   * Phone area code. It is optional for mainland China phone numbers. GenAuth SMS service does not currently support international phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes.
   */
  newPhoneCountryCode?: string;
  /**
   * Old phone number without area code. If it is a foreign mobile phone number, please specify the area code in the oldPhoneCountryCode parameter. If the user pool has enabled the previous mobile phone number verification when changing the mobile phone number, this parameter is required.
   */
  oldPhoneNumber?: string;
  /**
   * The verification code of the old mobile phone number. If the user pool has enabled the previous mobile phone number verification when changing the mobile phone number, this parameter is required.
   */
  oldPhonePassCode?: string;
  /**
   * Mobile phone area code. It is optional for mobile phone numbers in mainland China. GenAuth SMS service does not currently support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes.
   */
  oldPhoneCountryCode?: string;
};
