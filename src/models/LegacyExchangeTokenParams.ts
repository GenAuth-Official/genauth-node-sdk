/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LegacyExchangeTokenParams = {
  /**
   * Authorization scope, multiple resources are separated by spaces
   */
  scope: string;
  /**
   * Token type to be returned
   */
  response_token_type: LegacyExchangeTokenParams.response_token_type;
  /**
   * GenAuth application ID
   */
  client_id: string;
  /**
   * GenAuth application key, required when the token exchange authentication method is `client_secret_post`.
   */
  client_secret?: string;
  /**
   * id token
   */
  id_token?: string;
  /**
   * access token
   */
  access_token?: string;
  /**
   * context parameter, which can be obtained in pipeline
   */
  exchange_token_ctx?: any;
};

export namespace LegacyExchangeTokenParams {
  /**
   * Token type to be returned
   */
  export enum response_token_type {
    ID_TOKEN = "id_token",
    ACCESS_TOKEN = "access_token",
  }
}
