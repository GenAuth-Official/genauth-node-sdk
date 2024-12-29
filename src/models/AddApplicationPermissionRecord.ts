/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationPermissionRecordItem } from "./ApplicationPermissionRecordItem";

export type AddApplicationPermissionRecord = {
  /**
   * Authorization subject list, up to 10 items
   */
  list: Array<ApplicationPermissionRecordItem>;
  /**
   * Application ID
   */
  appId: string;
};
