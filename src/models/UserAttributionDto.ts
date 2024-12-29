/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupDto } from "./GroupDto";
import type { InvitationDepartmentRespDto } from "./InvitationDepartmentRespDto";
import type { InvitationPostRespDto } from "./InvitationPostRespDto";
import type { RoleDto } from "./RoleDto";

export type UserAttributionDto = {
  /**
   * Attribution record ID
   */
  id: string;
  /**
   * Policy ID
   */
  policyId: string;
  /**
   * Unique identifier of the associated object:
   * - If it is a user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`
   * - If it is a role, it is the role code, such as `admin`
   * - If it is a group, it is the group code, such as `developer`
   * - If it is a department, it is the department ID, such as `6343bafc019xxxx889206c4c`
   * - If it is a position, it is the position code, such as `leader`
   *
   */
  targetIdentifier: string;
  /**
   * The code of the permission space where the role is located. If targetType is role, this parameter must be passed
   */
  namespace?: string;
  /**
   * Type of associated object
   */
  targetType: UserAttributionDto.targetType;
  /**
   * Related object details
   */
  targetDetail?:
    | InvitationDepartmentRespDto
    | InvitationPostRespDto
    | RoleDto
    | GroupDto;
  /**
   * Creation time
   */
  createdAt: string;
  /**
   * Update time
   */
  updatedAt: string;
};

export namespace UserAttributionDto {
  /**
   * Related object type
   */
  export enum targetType {
    DEPARTMENT = "department",
    POST = "post",
    ROLE = "role",
    GROUP = "group",
  }
}
