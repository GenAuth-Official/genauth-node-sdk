/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataStatementPermissionDto } from "./DataStatementPermissionDto";

export type UpdateDataPolicyDto = {
  /**
   * Data policy ID
   */
  policyId: string;
  /**
   * Data policy name, unique to the user pool
   */
  policyName?: string;
  /**
   * Data policy description
   */
  description?: string;
  /**
   * Data permission list, all data permissions under each policy
   */
  statementList?: Array<DataStatementPermissionDto>;
};
