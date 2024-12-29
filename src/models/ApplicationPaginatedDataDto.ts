/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationDto } from "./ApplicationDto";

export type ApplicationPaginatedDataDto = {
  /**
   * List data
   */
  list: Array<ApplicationDto>;
  /**
   * Total number of records
   */
  totalCount: number;
};
