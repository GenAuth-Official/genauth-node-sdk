/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsaAccountDto } from "./AsaAccountDto";

export type AsaAccountPaginatedDataDto = {
  /**
   * List data
   */
  list: Array<AsaAccountDto>;
  /**
   * Total number of records
   */
  totalCount: number;
};
