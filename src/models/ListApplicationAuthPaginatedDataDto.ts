/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListApplicationAuthDataDto } from "./ListApplicationAuthDataDto";

export type ListApplicationAuthPaginatedDataDto = {
  /**
   * List data
   */
  list: Array<ListApplicationAuthDataDto>;
  /**
   * Total number of records
   */
  totalCount: number;
};
