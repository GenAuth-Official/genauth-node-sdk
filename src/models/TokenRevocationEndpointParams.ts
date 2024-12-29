/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TokenRevocationEndpointParams = {
  /**
   * GenAuth application ID. Required when the withdrawal token authentication method is configured on the console as client_secret_post and none.
   */
  client_id?: string;
  /**
   * GenAuth application key. Required when the withdrawal token authentication method is configured as client_secret_post in the console.
   */
  client_secret?: string;
  /**
   * The value of `access_token` or `refresh_token`
   */
  token: string;
};
