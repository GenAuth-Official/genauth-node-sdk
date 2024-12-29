/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the list of roles that can apply for permissions
 */
export type RolesPermissionApplicableDto = {
  /**
   * GenAuth application ID
   */
  appId?: any;
  /**
   * Current page number, starting from 1
   */
  page?: any;
  /**
   * The number of pages per page cannot exceed 50, and the default is 10
   */
  limit?: any;
  /**
   * Used for fuzzy search based on the role's code or name, optional.
   */
  keyword?: any;
};
