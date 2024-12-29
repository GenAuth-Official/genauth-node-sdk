/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdentityDto } from "./IdentityDto";

export type UserDto = {
  /**
   * The unique identifier of the user, which can be user ID, user name, email, mobile phone number, externalId, or ID in the external identity source. For details, see the description of the userIdType field. The default is user id.
   */
  userId: string;
  /**
   * Creation time
   */
  createdAt: string;
  /**
   * Update time
   */
  updatedAt: string;
  /**
   * Current status of the account:
   * - Activated: Normal status
   * - Suspended: Deactivated
   * - Deactivated: Disabled
   * - Resigned: Resigned
   * - Archived: Archived
   *
   */
  status: UserDto.status;
  /**
   * Current work status of the account
   */
  workStatus: UserDto.workStatus;
  /**
   * Third-party external ID
   */
  externalId?: string;
  /**
   * Email address, case-insensitive
   */
  email?: string;
  /**
   * Mobile phone number, without area code. If it is a foreign mobile phone number, please specify the area code in the phoneCountryCode parameter.
   */
  phone?: string;
  /**
   * Mobile phone area code. It is optional for mobile phone numbers in mainland China. The GenAuth SMS service does not currently support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes.
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
   * Last login time
   */
  lastLogin?: string;
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
  gender: UserDto.gender;
  /**
   * Is the email verified?
   */
  emailVerified: boolean;
  /**
   * Is the phone number verified?
   */
  phoneVerified: boolean;
  /**
   * The last time the user changed their password
   */
  passwordLastSetAt?: string;
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
   * Company
   */
  company?: string;
  /**
   * Browser UA used for the last login
   */
  browser?: string;
  /**
   * Device used for the last login
   */
  device?: string;
  /**
   * Name
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
  profile?: string;
  /**
   * Preferred Username
   */
  preferredUsername?: string;
  /**
   * User personal website
   */
  website?: string;
  /**
   * User time zone information
   */
  zoneinfo?: string;
  /**
   * Locale
   */
  locale?: string;
  /**
   * Standard full address
   */
  formatted?: string;
  /**
   * User region
   */
  region?: string;
  /**
   * Source type:
   * - `excel`: Import via excel
   * - `register`: User self-registration
   * - `adminCreated`: Administrator background manual creation (including using the management API to create users)
   * - `syncTask`: Synchronization task of the synchronization center
   *
   */
  userSourceType: UserDto.userSourceType;
  /**
   * Application ID or synchronization task ID
   */
  userSourceId?: string;
  /**
   * Application ID of the user's last login
   */
  lastLoginApp?: string;
  /**
   * User's main department ID
   */
  mainDepartmentId?: string;
  /**
   * The time when the user last performed MFA authentication
   */
  lastMfaTime?: string;
  /**
   * User password security strength level
   */
  passwordSecurityLevel?: number;
  /**
   * Require password reset on next login
   */
  resetPasswordOnNextLogin?: boolean;
  /**
   * Registration method
   */
  registerSource?: Array<string>;
  /**
   * User department ID list
   */
  departmentIds?: Array<string>;
  /**
   * External identity source
   */
  identities?: Array<IdentityDto>;
  /**
   * User ID number
   */
  identityNumber?: string;
  /**
   * User's extended field data
   */
  customData?: any;
  /**
   * User's data object extended field data
   */
  metadataSource?: any;
  /**
   * User's associated department ID
   */
  postIdList?: Array<string>;
  /**
   * User status last modified time
   */
  statusChangedAt?: string;
  /**
   * User tenant ID
   */
  tenantId?: string;
  /**
   * User registration time
   */
  signedUp?: string;
};

export namespace UserDto {
  /**
   * Account current status:
   * - Activated: Normal status
   * - Suspended: Deactivated
   * - Deactivated: Disabled
   * - Resigned: Resigned
   * - Archived: Archived
   *
   */
  export enum status {
    SUSPENDED = "Suspended",
    RESIGNED = "Resigned",
    ACTIVATED = "Activated",
    ARCHIVED = "Archived",
    DEACTIVATED = "Deactivated",
  }

  /**
   * Account current working status
   */
  export enum workStatus {
    CLOSED = "Closed",
    ACTIVE = "Active",
  }

  /**
   * Gender:
   * - `M`: Male, `male`
   * - `F`: Female, `female`
   * - `U`: Unknown, `unknown`
   *
   */
  export enum gender {
    M = "M",
    F = "F",
    U = "U",
  }

  /**
   * Source type:
   * - `excel`: Imported through excel
   * - `register`: User self-registration
   * - `adminCreated`: Manual creation by the administrator backend (including creating users using the management API)
   * - `syncTask`: Synchronization task of the synchronization center
   *
   */
  export enum userSourceType {
    EXCEL = "excel",
    REGISTER = "register",
    ADMIN_CREATED = "adminCreated",
    SYNC = "sync",
  }
}
