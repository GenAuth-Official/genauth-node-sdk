/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GeoIp } from "./GeoIp";
import type { ParsedUserAgent } from "./ParsedUserAgent";

export type AdminAuditLogDto = {
  /**
   * Admin user ID
   */
  adminUserId: string;
  /**
   * Admin user avatar
   */
  adminUserAvatar: string;
  /**
   * Admin user display name, displayed in the following user field order: nickname > username > name > givenName > familyName -> email -> phone -> id
   */
  adminUserDisplayName: string;
  /**
   * Client IP, can be filtered according to the client IP at login. By default, the login history of all login IPs is not obtained.
   */
  clientIp?: string;
  /**
   * Operation type:
   * - `create`: create
   * - `delete`: delete
   * - `import`: import
   * - `export`: export
   * - `update`: modify
   * - `refresh`: refresh
   * - `sync`: synchronize
   * - `invite`: invite
   * - `resign`: resign
   * - `recover`: recover
   * - `disable`: disable
   * - `userEnable`: enable
   *
   */
  operationType: AdminAuditLogDto.operationType;
  /**
   * Event type:
   * - `user`: user
   * - `userpool`: user pool
   * - `tenant`: tenant
   * - `userLoginState`: user login state
   * - `userAccountState`: user account state
   * - `userGroup`: user group
   * - `fieldEncryptState`: Field encryption status
   * - `syncTask`: synchronization task
   * - `socialConnection`: social identity source
   * - `enterpriseConnection`: social identity source
   * - `customDatabase`: custom database
   * - `org`: organization
   * - `cooperator`: collaboration administrator
   * - `application`: application
   * - `resourceNamespace`: permission group
   * - `resource`: resource
   * - `role`: role
   * - `roleAssign`: role authorization
   * - `policy`: policy
   *
   */
  resourceType: AdminAuditLogDto.resourceType;
  /**
   * event details
   */
  eventDetails?: string;
  /**
   * specific operation parameters
   */
  operationParam?: string;
  /**
   * original value
   */
  originValue?: string;
  /**
   * new value
   */
  targetValue?: string;
  /**
   * Success
   */
  success: boolean;
  /**
   * User Agent
   */
  userAgent: string;
  /**
   * User Agent after parsing
   */
  ua: ParsedUserAgent;
  /**
   * Geographic location
   */
  geoip: GeoIp;
  /**
   * Time
   */
  timestamp: string;
  /**
   * Request ID
   */
  requestId: string;
};

export namespace AdminAuditLogDto {
  /**
   * Operation type:
   * - `create`: create
   * - `delete`: delete
   * - `import`: import
   * - `export`: export
   * - `update`: modify
   * - `refresh`: refresh
   * - `sync`: synchronize
   * - `invite`: invite
   * - `resign`: resign
   * - `recover`: recover
   * - `disable`: disable
   * - `userEnable`: enable
   *
   */
  export enum operationType {
    ALL = "all",
    CREATE = "create",
    DELETE = "delete",
    IMPORT = "import",
    EXPORT = "export",
    UPDATE = "update",
    REFRESH = "refresh",
    SYNC = "sync",
    INVITE = "invite",
    RESIGN = "resign",
    RECOVER = "recover",
    DISABLE = "disable",
    ENABLE = "enable",
    ACTIVATE = "activate",
    DEACTIVATE = "deactivate",
    ADD = "add",
    REMOVE = "remove",
    QUERY = "query",
    SEND_INVITATION = "sendInvitation",
    REVERT_INVITATION = "revertInvitation",
    APPROVAL = "approval",
    REJECT = "reject",
  }

  /**
   * Event type:
   * - `user`: user
   * - `userpool`: user pool
   * - `tenant`: tenant
   * - `userLoginState`: user login state
   * - `userAccountState`: user account state
   * - `userGroup`: User grouping
   * - `fieldEncryptState`: field encryption state
   * - `syncTask`: synchronization task
   * - `socialConnection`: social identity source
   * - `enterpriseConnection`: social identity source
   * - `customDatabase`: custom database
   * - `org`: organization
   * - `cooperator`: collaboration administrator
   * - `application`: application
   * - `resourceNamespace`: permission grouping
   * - `resource`: resource
   * - `role`: role
   * - `roleAssign`: role authorization
   * - `policy`: policy
   *
   */
  export enum resourceType {
    ALL = "all",
    USER = "user",
    USERPOOL = "userpool",
    TENANT = "tenant",
    USER_LOGIN_STATE = "userLoginState",
    USER_ACCOUNT_STATE = "userAccountState",
    USER_GROUP = "userGroup",
    FIELD_ENCRYPT_STATE = "fieldEncryptState",
    SYNC_TASK = "syncTask",
    SOCIAL_CONNECTION = "socialConnection",
    ENTERPRISE_CONNECTION = "enterpriseConnection",
    CUSTOM_DATABASE = "customDatabase",
    ORG = "org",
    COOPERATOR = "cooperator",
    APPLICATION = "application",
    RESOURCE_NAMESPACE = "resourceNamespace",
    RESOURCE = "resource",
    ROLE = "role",
    ROLE_ASSIGN = "roleAssign",
    POLICY = "policy",
    CUSTOM_DOMAIN = "customDomain",
    PERMIT_SPACE = "permitSpace",
    GENERAL_RESOURCE = "generalResource",
    GENERAL_RESOURCE_AUTHORIZATION = "generalResourceAuthorization",
    ROLE_SUBJECT = "roleSubject",
    SUBJECT_OF_ROLE = "subjectOfRole",
    DATA_RESOURCE = "dataResource",
    DATA_POLICY = "dataPolicy",
    AUTHORIZATION = "authorization",
    USER_AUTHORIZATION = "userAuthorization",
    ADMIN_PERMISSION_ROLE = "adminPermissionRole",
    ADMIN_PERMISSION_ADMIN = "adminPermissionAdmin",
    ADMIN_PERMISSION_POLICY = "adminPermissionPolicy",
    UNIVERSAL_INVITATION = "universalInvitation",
    POLICY_INVITATION = "policyInvitation",
    INVITATION_ROSTER = "invitationRoster",
    INVITATION_USER = "invitationUser",
    INVITATION_POLICY = "invitationPolicy",
    APPLICANT = "applicant",
  }
}
