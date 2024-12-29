/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TokenIntrospectEndpointParams = {
  /**
   * GenAuth application ID. Required when the authentication method of token verification is configured as client_secret_post and none in the console.
   */
  client_id?: string;
  /**
   * GenAuth application key. Required when the authentication method of token verification is configured as client_secret_post in the console.
   */
  client_secret?: string;
  /**
   * The value of `access_token` or `refresh_token`
   */
  token: string;
  /**
   * Whether to verify the user status. If true is passed, when the user is deleted, deactivated, archived, or resigned, the token will be considered invalid even if it is within the validity period.
   */
  strict?: boolean;
};
