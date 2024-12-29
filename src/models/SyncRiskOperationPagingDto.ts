/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyncRiskOperationDto } from "./SyncRiskOperationDto";

export type SyncRiskOperationPagingDto = {
  /**
   * Total number of records
   */
  totalCount: number;
  /**
   * Data list
   */
  list: Array<SyncRiskOperationDto>;
};
