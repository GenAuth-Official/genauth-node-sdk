/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuickFilterInviteeRecordDto } from "./QuickFilterInviteeRecordDto";

export type QuickFilterInviteePaginationDto = {
  /**
   * Total number of records
   */
  totalCount?: number;
  /**
   * List data
   */
  list: Array<QuickFilterInviteeRecordDto>;
};
