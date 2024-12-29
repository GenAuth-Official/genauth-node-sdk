/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApprovalDetailDto } from "./ApprovalDetailDto";

export type ApprovalPageList = {
  /**
   * List of approved pages
   */
  list: Array<ApprovalDetailDto>;
  /**
   * Total number of records
   */
  totalCount: number;
};
