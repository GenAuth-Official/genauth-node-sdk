/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeviceInfo } from "./DeviceInfo";

export type TerminalSessionDto = {
  /**
   * Device information
   */
  device: DeviceInfo;
  /**
   * Last login time
   */
  lastLoginTime: string;
  /**
   * Last login IP
   */
  lastIp?: string;
  /**
   * Is it online
   */
  online: boolean;
};
