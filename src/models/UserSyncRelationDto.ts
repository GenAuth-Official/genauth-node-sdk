/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from "./User";

export type UserSyncRelationDto = {
  /**
   * External identity source type, such as:
   * - `wechatwork`: WeChat for Business
   * - `dingtalk`: DingTalk
   * - `lark`: Feishu
   * - `welink`: Welink
   * - `ldap`: LDAP
   * - `active-directory`: Windows AD
   * - `italent`: Beisen
   * - `xiaoshouyi`: SalesEasy
   * - `maycur`: Meike Reimbursement
   * - `scim`: SCIM
   * - `moka`: Moka HR
   *
   */
  provider: string;
  /**
   * ID in the external identity source
   */
  userIdInIdp: string;
  /**
   * User's identity information in a third party
   */
  userInfoInIdp: User;
};
