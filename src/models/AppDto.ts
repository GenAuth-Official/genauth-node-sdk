/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AppDto = {
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
   * App default login strategy
   */
  appDefaultLoginStrategy: AppDto.appDefaultLoginStrategy;
};

export namespace AppDto {
  /**
   * App default login strategy
   */
  export enum appDefaultLoginStrategy {
    ALLOW_ALL = "ALLOW_ALL",
    DENY_ALL = "DENY_ALL",
  }
}
