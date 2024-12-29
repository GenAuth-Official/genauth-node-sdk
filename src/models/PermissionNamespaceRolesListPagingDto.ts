/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PermissionNamespaceRolesListRespDto } from "./PermissionNamespaceRolesListRespDto";

export type PermissionNamespaceRolesListPagingDto = {
  /**
   * Total number of records
   */
  totalCount: number;
  /**
   * Response data
   */
  list: Array<PermissionNamespaceRolesListRespDto>;
};
