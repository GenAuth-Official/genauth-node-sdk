/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TenantUserDto = {
  /**
   * Email address, case-insensitive
   */
  email?: string;
  /**
   * Phone number without area code. If it is a foreign phone number, please specify the area code in the phoneCountryCode parameter.
   */
  phone?: string;
  /**
   * Phone area code. It is optional for mainland China phone numbers. The GenAuth SMS service does not currently support international phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes.
   */
  phoneCountryCode?: string;
  /**
   * Username, unique in the user pool
   */
  username?: string;
  /**
   * User real name, not unique
   */
  name?: string;
  /**
   * Nickname
   */
  nickname?: string;
  /**
   * Avatar link
   */
  photo?: string;
  /**
   * Total number of historical logins
   */
  loginsCount?: number;
  /**
   * Last login IP
   */
  lastIp?: string;
  /**
   * Gender:
   * - `M`: male, `male`
   * - `F`: female, `female`
   * - `U`: unknown, `unknown`
   *
   */
  gender: TenantUserDto.gender;
  /**
   * Date of birth
   */
  birthdate?: string;
  /**
   * Country
   */
  country?: string;
  /**
   * Province
   */
  province?: string;
  /**
   * City
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
   * Postal code
   */
  postalCode?: string;
  /**
   * First name
   */
  givenName?: string;
  /**
   * Last name
   */
  familyName?: string;
  /**
   * Middle name
   */
  middleName?: string;
  /**
   * Preferred Username
   */
  preferredUsername?: string;
  /**
   * User's last logged-in application ID
   */
  lastLoginApp?: string;
  /**
   * User pool ID
   */
  userPoolId: string;
  /**
   * Tenant ID
   */
  tenantId: string;
  /**
   * Tenant member ID
   */
  memberId: string;
  /**
   * User ID at the associated user pool level
   */
  linkUserId: string;
  /**
   * Is it a tenant administrator?
   */
  isTenantAdmin: boolean;
  /**
   * User password, in plain text by default. We use the HTTPS protocol to securely transmit passwords, which can ensure security to a certain extent. If you need a higher level of security, we also support RSA256 and SM2 to encrypt passwords. For details, see the `passwordEncryptType` parameter.
   */
  password?: string;
  /**
   * Salt for encrypting user passwords
   */
  salt?: string;
};

export namespace TenantUserDto {
  /**
   * Gender:
   * - `M`: male, `male`
   * - `F`: female, `female`
   * - `U`: unknown, `unknown`
   *
   */
  export enum gender {
    M = "M",
    F = "F",
    U = "U",
  }
}
