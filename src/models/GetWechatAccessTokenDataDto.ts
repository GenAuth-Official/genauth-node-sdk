/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetWechatAccessTokenDataDto = {
  /**
   * GenAuth server cached WeChat Access Token
   */
  accessToken: string;
  /**
   * Access Token expiration time, as a timestamp in seconds
   */
  expiresAt: string;
};
