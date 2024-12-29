/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TokenEndPointParams = {
  /**
   * GenAuth application ID, required when the token authentication method is `client_secret_post` or `none`.
   */
  client_id?: string;
  /**
   * GenAuth application key, required when the token authentication method is `client_secret_post`.
   */
  client_secret?: string;
  /**
   * Authorization mode:
   * - `authorization_code`: Use one-time authorization code `code` in exchange.
   * - `refresh_token`: Obtain using Refresh Token.
   * - `client_credentials`: Used in M2M scenarios without user interaction.
   * - `password`: Password mode, obtained using the user's account password, not recommended.
   * - `http://genauth.ai/oidc/grant_type/genauth_token`: Use the Token issued by the historical version of GenAuth in exchange, which is not recommended.
   *
   */
  grant_type: TokenEndPointParams.grant_type;
  /**
   * The redirect_uri value when initiating OIDC authorization login must be consistent with the parameters when initiating the login request.
   */
  redirect_uri: string;
  /**
   * The one-time authorization code obtained is **one code only for one-time use** and will be invalid after use. Validity period is 10 minutes. Required when `grant_type` is `authorization_code`.
   */
  code?: string;
  /**
   * Splice the random string value generated when OIDC authorizes the login connection, that is, the original value of code_challenge, not its digest value. This parameter needs to be filled in when using **authorization code + PKCE mode**. Required when `grant_type` is `authorization_code` and PKCE mode is used.
   */
  code_verifier?: string;
  /**
   * User's Refresh Token. Required when `grant_type` is `refresh_token`.
   */
  refresh_token?: string;
};

export namespace TokenEndPointParams {
  /**
   * Authorization mode:
   * - `authorization_code`: Use one-time authorization code `code` in exchange.
   * - `refresh_token`: Obtain using Refresh Token.
   * - `client_credentials`: Used in M2M scenarios without user interaction.
   * - `password`: Password mode, obtained using the user's account password, not recommended.
   * - `http://genauth.ai/oidc/grant_type/genauth_token`: Use the Token issued by the historical version of GenAuth in exchange, which is not recommended.
   *
   */
  export enum grant_type {
    AUTHORIZATION_CODE = "authorization_code",
    REFRESH_TOKEN = "refresh_token",
    CLIENT_CREDENTIALS = "client_credentials",
    PASSWORD = "password",
    HTTP_GENAUTH_CN_OIDC_GRANT_TYPE_GENAUTH_TOKEN = "http://genauth.ai/oidc/grant_type/genauth_token",
  }
}
