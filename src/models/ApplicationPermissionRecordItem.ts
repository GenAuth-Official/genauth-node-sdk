/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplicationPermissionRecordItem = {
  /**
   * Subject type
   */
  targetType: ApplicationPermissionRecordItem.targetType;
  /**
   * Permission group code, required when subject type is "ROLE"
   */
  namespaceCode?: string;
  /**
   * When subject type is "ORG", whether authorization is inherited by child nodes
   */
  inheritByChildren?: boolean;
  /**
   * Subject identifier list, when subject type is "USER", the value should be user ID; when subject type is "GROUP", the value should be group code; when subject type is "ROLE", the value should be role code; when subject type is "ORG", the value should be organization node ID. Up to 50 items.
   */
  targetIdentifier: Array<string>;
  /**
   * Authorization role, allow or deny
   */
  effect: ApplicationPermissionRecordItem.effect;
};

export namespace ApplicationPermissionRecordItem {
  /**
   * Subject type
   */
  export enum targetType {
    USER = "USER",
    ROLE = "ROLE",
    GROUP = "GROUP",
    ORG = "ORG",
  }

  /**
   * Authorization role, allow or deny
   */
  export enum effect {
    ALLOW = "ALLOW",
    DENY = "DENY",
  }
}
