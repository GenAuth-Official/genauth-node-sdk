/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PublicAccountDto = {
  /**
   * The user's unique identifier can be user ID, username, email, mobile phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. Defaults to user id.
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
   * Current status of account:
   * - Activated: normal state
   * - Suspended: Disabled
   * - Deactivated: disabled
   * - Resigned: Resigned
   * - Archived: Archived
   *
   */
  status: PublicAccountDto.status;
  /**
   * Current working status of the account
   */
  workStatus: PublicAccountDto.workStatus;
  /**
   * Third-party external ID
   */
  externalId?: string;
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
   * Username, unique in the user pool
   */
  username?: string;
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
   * Total number of historical logins
   */
  loginsCount?: number;
  /**
   *Last login time
   */
  lastLogin?: string;
  /**
   *Last login IP
   */
  lastIp?: string;
  /**
   * gender:
   * - `M`: male, `male`
   * - `F`: female, `female`
   * - `U`: unknown, `unknown`
   *
   */
  gender: PublicAccountDto.gender;
  /**
   * Is the email verified?
   */
  emailVerified: boolean;
  /**
   * Is the mobile phone number verified?
   */
  phoneVerified: boolean;
  /**
   * The time when the user’s last password was changed
   */
  passwordLastSetAt?: string;
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
   * Source type:
   * - `excel`: import via excel
   * - `register`: User self-registration
   * - `adminCreated`: manually created by the administrator (including creating users using the management API)
   * - `syncTask`: synchronization task of synchronization center
   *
   */
  userSourceType: PublicAccountDto.userSourceType;
  /**
   * Application ID or synchronization task ID
   */
  userSourceId?: string;
  /**
   * The application ID of the user's last login
   */
  lastLoginApp?: string;
  /**
   * User primary department ID
   */
  mainDepartmentId?: string;
  /**
   * The last time the user authenticated with MFA
   */
  lastMfaTime?: string;
  /**
   * User password security strength level
   */
  passwordSecurityLevel?: number;
  /**
   * Password reset required for next login
   */
  resetPasswordOnNextLogin?: boolean;
  /**
   * Registration method
   */
  registerSource?: Array<string>;
  /**
   * List of department IDs to which the public account belongs
   */
  departmentIds?: Array<string>;
  /**
   * User ID number
   */
  identityNumber?: string;
  /**
   * Extended field data of public account
   */
  customData?: any;
  /**
   * Public account status last modified time
   */
  statusChangedAt?: string;
  /**
   * User tenant ID
   */
  tenantId?: string;
};

export namespace PublicAccountDto {
  /**
   * Current status of account:
   * - Activated: normal state
   * - Suspended: Disabled
   * - Deactivated: disabled
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
   * Current working status of the account
   */
  export enum workStatus {
    CLOSED = "Closed",
    ACTIVE = "Active",
  }

  /**
   * gender:
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

  /**
   * Source type:
   * - `excel`: import via excel
   * - `register`: User self-registration
   * - `adminCreated`: manually created by the administrator (including creating users using the management API)
   * - `syncTask`: synchronization task of synchronization center
   *
   */
  export enum userSourceType {
    EXCEL = "excel",
    REGISTER = "register",
    ADMIN_CREATED = "adminCreated",
    SYNC = "sync",
  }
}
