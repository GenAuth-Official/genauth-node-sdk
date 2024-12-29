/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdatePublicAccountOptionsDto } from "./UpdatePublicAccountOptionsDto";

export type UpdatePublicAccountReqDto = {
  /**
   * The user's unique identifier can be user ID, username, email, mobile phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. Defaults to user id.
   */
  userId: string;
  /**
   * Mobile phone area code, mainland China mobile phone number is optional. GenAuth SMS service does not have built-in support for international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. A complete list of mobile phone area codes can be found at https://en.wikipedia.org/wiki/List_of_country_calling_codes.
   */
  phoneCountryCode?: string;
  /**
   * User’s real name, not unique
   */
  name?: string;
  /**
   * Nick name
   */
  nickname?: string;
  /**
   * Avatar link
   */
  photo?: string;
  /**
   * Third-party external ID
   */
  externalId?: string;
  /**
   * Current status of account
   */
  status?: UpdatePublicAccountReqDto.status;
  /**
   * Is the email verified?
   */
  emailVerified?: boolean;
  /**
   * Is the mobile phone number verified?
   */
  phoneVerified?: boolean;
  /**
   *Date of birth
   */
  birthdate?: string;
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
  /**
   * Address
   */
  address?: string;
  /**
   * Street address
   */
  streetAddress?: string;
  /**
   * Postal code number
   */
  postalCode?: string;
  /**
   * gender
   */
  gender?: UpdatePublicAccountReqDto.gender;
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
   * User password, default is clear text. We use the HTTPS protocol for secure transmission of passwords, which can ensure security to a certain extent. If you need a higher level of security, we also support RSA256 and SM2 to encrypt passwords. See the `passwordEncryptType` parameter for details.
   */
  password?: string;
  /**
   * Company where you work
   */
  company?: string;
  /**
   * Browser UA used for the most recent login
   */
  browser?: string;
  /**
   *The device from which you last logged in
   */
  device?: string;
  /**
   * name
   */
  givenName?: string;
  /**
   * surname
   */
  familyName?: string;
  /**
   *Middle name
   */
  middleName?: string;
  /**
   *Preferred Username
   */
  profile?: string;
  /**
   *Preferred Username
   */
  preferredUsername?: string;
  /**
   * User personal web page
   */
  website?: string;
  /**
   * User time zone information
   */
  zoneinfo?: string;
  /**
   *Locale
   */
  locale?: string;
  /**
   * Standard full address
   */
  formatted?: string;
  /**
   * User's area
   */
  region?: string;
  /**
   * User ID number
   */
  identityNumber?: string;
  /**
   * Custom data, the key in the object passed in must first define the relevant custom fields in the user pool
   */
  customData?: any;
  /**
   * Optional parameters
   */
  options?: UpdatePublicAccountOptionsDto;
};

export namespace UpdatePublicAccountReqDto {
  /**
   * Current status of account
   */
  export enum status {
    SUSPENDED = "Suspended",
    RESIGNED = "Resigned",
    ACTIVATED = "Activated",
    ARCHIVED = "Archived",
    DEACTIVATED = "Deactivated",
  }

  /**
   * gender
   */
  export enum gender {
    M = "M",
    F = "F",
    U = "U",
  }
}
