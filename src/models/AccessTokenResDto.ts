/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccessTokenResDto = {
  /**
   * Access Token content
   */
  access_token: string;
  /**
   * Access_token validity period, default is 7200 seconds (two hours), after expiration, a new access_token should be obtained.
   */
  expires_in: number;
};
