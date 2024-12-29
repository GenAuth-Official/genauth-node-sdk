/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PermissionNamespacesListRespDto } from "./PermissionNamespacesListRespDto";

export type PermissionNamespaceListPagingDto = {
  /**
   * Total number of records
   */
  totalCount: number;
  /**
   * Response data
   */
  list: Array<PermissionNamespacesListRespDto>;
};
