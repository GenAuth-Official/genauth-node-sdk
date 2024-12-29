/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrincipalAuthenticationInfoDto } from "./PrincipalAuthenticationInfoDto";

export type PrincipalAuthenticationInfoPagingDto = {
  /**
   * Total number of records
   */
  totalCount: number;
  /**
   * Response Data
   */
  list: Array<PrincipalAuthenticationInfoDto>;
};
