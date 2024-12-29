/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserAttributionDto } from "./UserAttributionDto";

export type UserAttributionPaginationDto = {
  /**
   * Total number of records
   */
  totalCount?: number;
  /**
   * List data
   */
  list: Array<UserAttributionDto>;
};
