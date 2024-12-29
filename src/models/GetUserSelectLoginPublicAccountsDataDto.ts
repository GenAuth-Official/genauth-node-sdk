/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetUserSelectLoginPublicAccountsOriginUserDto } from "./GetUserSelectLoginPublicAccountsOriginUserDto";
import type { ListPublicAccountDataDto } from "./ListPublicAccountDataDto";

export type GetUserSelectLoginPublicAccountsDataDto = {
  /**
   * Public account list
   */
  publicAccounts: Array<ListPublicAccountDataDto>;
  /**
   * Personal account information
   */
  originUser?: GetUserSelectLoginPublicAccountsOriginUserDto;
};
