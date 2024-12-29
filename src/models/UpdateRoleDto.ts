/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateRoleDto = {
  /**
   * Permission group (permission space) role name
   */
  name: string;
  /**
   * Unique identification code of the role in the new permission group (permission space)
   */
  newCode: string;
  /**
   * Unique identifier of the role in the permission group (permission space)
   */
  code: string;
  /**
   * The code of the permission group (permission space) to which it belongs. If it is not passed, the default permission group will be obtained.
   */
  namespace?: string;
  /**
   * Role description
   */
  description?: string;
  /**
   * Role status, ENABLE- means normal, DISABLE- means disabled
   */
  status?: string;
  /**
   * Role automatic disable time, in milliseconds, if null is passed, it means permanent
   */
  disableTime?: string;
  /**
   * Whether to enable the application permission. In addition, the application must enable SSO single sign-on and unauthorized users can see the application configuration in the application panel
   */
  enablePermissionApply?: boolean;
};
