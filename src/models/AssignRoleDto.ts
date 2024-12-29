/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TargetDto } from "./TargetDto";

export type AssignRoleDto = {
  /**
   * Target object
   */
  targets: Array<TargetDto>;
  /**
   * Unique identifier of the role in the permission group
   */
  code: string;
  /**
   * Subject expiration time in milliseconds, valid forever if null
   */
  endTime?: number;
  /**
   * Subject join time in milliseconds, join immediately if null
   */
  enableTime?: number;
  /**
   * Code of the permission group
   */
  namespace?: string;
};
