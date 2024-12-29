import { JWKSObject, Lang } from "./utils";

export const DEFAULT_COOKIE_KEY = "X-GenAuth-Node-OIDC-State";

export const DEFAULT_SCOPE = "openid profile";

/**
 * NodeJS authentication SDK initialization parameters
 */
export interface AuthenticationClientInitOptions {
  /**
   * Application ID
   */
  appId: string;

  /**
   * Application Secret
   */
  appSecret?: string;

  /**
   * Application domain name, such as https://example.genauth.ai
   */
  appHost: string;

  /**
   * User's accessToken
   */
  accessToken?: string;

  /**
   * Redirection target URL after authentication is completed. Optional, the first callback address configured in the console is used by default.
   */
  redirectUri?: string;

  /**
   * Redirection target URL after logout is completed
   */
  logoutRedirectUri?: string;

  /**
   * Permissions requested by the application side GenAuth, separated by spaces, default is 'openid profile'
   *
   * Successfully obtained permissions will appear in the scope field of the Access Token
   *
   * Some examples:
   * - openid: permissions specified by the OIDC standard, must include
   * - profile: Get the user's basic identity information
   * - offline_access: Get the user's Refresh Token, which can be used to call refreshLoginState to refresh the user's login state
   */
  scope?: string;

  /**
   * Cookie name for storing authentication context
   */
  cookieKey?: string;

  /**
   * Language
   */
  lang?: Lang;

  /**
   * Protocol type, default is oidc
   */
  protocol?: "oauth" | "oidc" | "saml" | "cas";

  /**
   * Get token endpoint authentication method
   */
  tokenEndPointAuthMethod?:
    | "client_secret_post"
    | "client_secret_basic"
    | "none";

  /**
   * Check token endpoint authentication method
   */
  introspectionEndPointAuthMethod?:
    | "client_secret_post"
    | "client_secret_basic"
    | "none";

  /**
   * Withdraw token endpoint authentication method
   */
  revocationEndPointAuthMethod?:
    | "client_secret_post"
    | "client_secret_basic"
    | "none";

  /**
   * Request timeout, in milliseconds, default is 10000, 10 seconds.
   */
  timeout?: number;

  /**
   * Whether to reject illegal HTTPS requests, the default is true; if it is a private deployment scenario and the certificate is not trusted, it can be set to false
   */
  rejectUnauthorized?: boolean;

  // Event subscription socket connection address
  socketUri?: string;

  // Retry times
  retryTimes?: number;
}

export const DEFAULT_SOCKET_URI = "wss://openevent.genauth.ai";
