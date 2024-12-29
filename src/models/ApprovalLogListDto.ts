/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the approval log list
 */
export type ApprovalLogListDto = {
  /**
   * Current page number, starting from 1
   */
  pageNo?: any;
  /**
   * Number of pages per page, maximum cannot exceed 50, default is 10
   */
  pageSize?: any;
  /**
   * Initiate approval object type, currently supports: application permission application (APP_PERMISSION_APPLY), role permission application (ROLE_PERMISSION_APPLY)
   */
  objectType?: any;
  /**
   * Used for fuzzy search based on approval number, initiator name, and approval object name, optional.
   */
  keyword?: any;
};
