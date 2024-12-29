/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateTenantUserDto = {
  /**
   * Tenant member information to be updated
   */
  updates: any;
  /**
   * Tenant ID
   */
  tenantId: string;
  /**
   * User ID at the associated user pool level
   */
  linkUserId?: string;
  /**
   * Tenant member ID
   */
  memberId?: string;
};
