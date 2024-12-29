/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the approval list
 */
export type ApprovalPendingListDto = {
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
   * Used for fuzzy search based on approval number or initiator name, optional.
   */
  keyword?: any;
};
