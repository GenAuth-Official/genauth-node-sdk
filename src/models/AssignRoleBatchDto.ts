/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleCodeDto } from "./RoleCodeDto";
import type { TargetDto } from "./TargetDto";

export type AssignRoleBatchDto = {
  /**
   * Target list for assigning roles
   */
  targets: Array<TargetDto>;
  /**
   * Role information list
   */
  roles: Array<RoleCodeDto>;
};
