export interface OidcParams {
  /**
   * Callback URL, optional. If not provided, defaults to the redirectUri parameter used during SDK initialization.
   */
  redirectUri?: string;
  /**
   * Response type, optional, possible values are code, code id_token token, code id_token, code id_token, code token, id_token token, id_token, none; defaults to code, authorization code mode.
   */
  responseType?:
    | "code"
    | "code id_token token"
    | "code id_token"
    | "code token"
    | "id_token token"
    | "id_token"
    | "none";
  /**
   * Response mode, optional, possible values are query, fragment, form_post; defaults to query, which sends the code to the callback URL via browser redirect.
   */
  responseMode?: "query" | "fragment" | "form_post";
  /**
   * Random string, optional, automatically generated by default.
   */
  state?: string;
  /**
   * Random string, optional, automatically generated by default.
   */
  nonce?: string;
  /**
   * Requested permission items, optional, OIDC protocol defaults to openid profile email phone address, OAuth 2.0 protocol defaults to user.
   */
  scope?: string;
  /**
   * Can be plain or S256, indicating the digest algorithm used to calculate code_challenge. plain means no algorithm is used, S256 means code_challenge is calculated using SHA256.
   */
  codeChallengeMethod?: "plain" | "S256";
  /**
   * A string with length greater than or equal to 43, sent to GenAuth as code_challenge.
   */
  codeChallenge?: string;
  /**
   * GenAuth Tenant ID
   */
  tenantId?: string;

  /**
   * Whether to require forced login
   */
  forced?: boolean;
}

export interface OauthParams {
  /**
   * Callback URL, optional. If not provided, defaults to the redirectUri parameter used during SDK initialization.
   */
  redirectUri?: string;
  /**
   * Response type, optional, possible values are code, token. Defaults to code, authorization code mode.
   */
  responseType?: "code" | "token";
  /**
   * Random string, optional, automatically generated by default.
   */
  state?: string;
  /**
   * Requested permission items, optional, OAuth 2.0 protocol defaults to user.
   */
  scope?: string;
}

export interface LogoutParams {
  /**
   * Target URL for redirection after logout completion, overrides the corresponding setting in initialization parameters, defaults to logoutRedirectUri passed during initialization
   */
  redirectUri?: string;
  /**
   * ID Token obtained during user login, used to invalidate user token, recommended to provide
   */
  idToken?: string;
  /**
   * Intermediate state identifier passed to the target URL
   */
  state?: string;
}

export interface CasParams {
  /**
   * Business callback URL in CAS protocol.
   */
  service?: string;
}

export type Cas20ValidationSuccessResult = {
  serviceResponse: {
    authenticationSuccess: {
      user: string;
      attributes: {
        updated_at: string;
        address: {
          country: string;
          postal_code: string;
          region: string;
          formatted: string;
        };
        phone_number_verified: boolean;
        phone_number: string;
        locale: string;
        zoneinfo: string;
        birthdate: string;
        gender: string;
        email_verified: boolean;
        email: string;
        website: string;
        picture: string;
        profile: string;
        preferred_username: string;
        nickname: string;
        middle_name: string;
        family_name: string;
        given_name: string;
        name: string;
        sub: string;
        external_id: string;
        unionid: string;
      };
    };
  };
};
export type Cas20ValidationFailureResult = {
  authenticationFailure: {
    code: string;
    description: string;
  };
};
