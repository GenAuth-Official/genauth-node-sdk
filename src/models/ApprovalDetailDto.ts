/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ import type { ApplicationPermissionApplyApprovalObject } from "./ApplicationPermissionApplyApprovalObject";
import type { ExtraParams } from "./ExtraParams";
import type { RolePermissionApplyApprovalObject } from "./RolePermissionApplyApprovalObject";
export type ApprovalDetailDto = {
  /** * Approval ID */ approvalId: number;
  /** * Approval number */ number: string;
  /** * Approval status */ status: ApprovalDetailDto.status;
  /** * Submission time */ submitTime: string;
  /** * Checkout time */ closedTime?: string
  /** * Initiate approval object type, currently supports: application permission application (APP_PERMISSION_APPLY), role permission application (ROLE_PERMISSION_APPLY)
   */;
  objectType: ApprovalDetailDto.objectType;
  /**
   * Approval object (array)
   */
  approvalObjectList:
    | RolePermissionApplyApprovalObject
    | ApplicationPermissionApplyApprovalObject;
  /* *
   * Additional parameters, currently only supports: Role Permission Application (ROLE_PERMISSION_APPLY)
   */
  extraParams?: ExtraParams;
};

export namespace ApprovalDetailDto {
  /**
   * Approval status*/
  export enum status {
    PENDING = "PENDING",
    AGREED = "AGREED ",
    REFUSED = "REFUSED",
  }

  /**
   * Initiate approval object type, currently supports: application permission application (APP_PERMISSION_APPLY), role permission application (ROLE_PERMISSION_APPLY)
   */
  export enum objectType {
    APP_PERMISSION_APPLY = "APP_PERMISSION_APPLY",
    ROLE_PERMISSION_APPLY = "ROLE_PERMISSION_APPLY",
  }
}
