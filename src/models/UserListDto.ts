/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the risk list user list by page
 */
export type UserListDto = {
  /**
   * IP type
   */
  userListType?: any;
  /**
   * Current page number, starting from 1
   */
  page?: any;
  /**
   * Number per page, maximum cannot exceed 50, default is 10
   */
  limit?: any;
};
