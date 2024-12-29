/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserInfoDto = {
  /**
   * Username, unique in the user pool
   */
  username?: string;
  /**
   * Email, not case sensitive
   */
  email?: string;
  /**
   *Mobile phone number without area code. If it is a foreign mobile phone number, please specify the area code in the phoneCountryCode parameter.
   */
  phone?: string;
  /**
   * Mobile phone area code, mainland China mobile phone number is optional. GenAuth SMS service does not have built-in support for international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. A complete list of mobile phone area codes can be found at https://en.wikipedia.org/wiki/List_of_country_calling_codes.
   */
  phoneCountryCode?: string;
  /**
   * User’s real name, not unique
   */
  name?: string;
  /**
   * gender
   */
  gender?: UserInfoDto.gender;
  /**
   *Country
   */
  country?: string;
  /**
   *Province
   */
  province?: string;
  /**
   *City where you are located
   */
  city?: string;
};

export namespace UserInfoDto {
  /**
   * gender
   */
  export enum gender {
    M = "M",
    F = "F",
    U = "U",
  }
}
