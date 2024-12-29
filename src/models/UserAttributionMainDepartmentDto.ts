/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvitationDepartmentRespDto } from "./InvitationDepartmentRespDto";

export type UserAttributionMainDepartmentDto = {
  /**
   * Policy ID
   */
  policyId: string;
  /**
   * Main department ID
   */
  departmentId: string | null;
  /**
   * Main department details
   */
  departmentDetail?: InvitationDepartmentRespDto;
};
