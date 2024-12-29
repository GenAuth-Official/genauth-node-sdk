/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KickUsersOptionsDto } from "./KickUsersOptionsDto";

export type KickUsersDto = {
  /**
   * APP ID List
   */
  appIds: Array<string>;
  /**
   * User ID
   */
  userId: string;
  /**
   * Optional parameters
   */
  options?: KickUsersOptionsDto;
};
