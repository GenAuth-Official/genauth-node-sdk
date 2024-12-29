/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserLoginHistoryDto = {
  /**
   * App ID
   */
  appId: string;
  /**
   * App name
   */
  appName: string;
  /**
   * App Logo
   */
  appLogo: string;
  /**
   * App login address
   */
  appLoginUrl: string;
  /**
   * Client IP
   */
  clientIp: string;
  /**
   * User agent used when logging in
   */
  userAgent?: string;
  /**
   * Login time
   */
  time: string;
};
