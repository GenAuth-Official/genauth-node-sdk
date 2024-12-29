/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssignAsaAccountItem } from "./AssignAsaAccountItem";

export type AssignAsaAccountsDto = {
  /**
   * Application ID
   */
  appId: string;
  /**
   * Account ID to be associated
   */
  accountId: string;
  /**
   * List of associated objects
   */
  targets: Array<AssignAsaAccountItem>;
};
