/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleDepartmentRespDto } from "./RoleDepartmentRespDto";

export type RoleDepartmentListPagingDto = {
  /**
   * Total number of records
   */
  totalCount: number;
  /**
   * Data
   */
  list: Array<RoleDepartmentRespDto>;
};
