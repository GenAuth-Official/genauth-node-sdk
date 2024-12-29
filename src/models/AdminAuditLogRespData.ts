/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdminAuditLogDto } from "./AdminAuditLogDto";

export type AdminAuditLogRespData = {
  /**
   * Total number of records
   */
  totalCount: number;
  /**
   * Return list
   */
  list: Array<AdminAuditLogDto>;
};
