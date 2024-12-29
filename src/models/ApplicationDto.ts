/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ import type { ApplicationBrandingConfig } from "./ApplicationBrandingConfig";
import type { ApplicationLoginConfigDto } from "./ApplicationLoginConfigDto";
import type { ApplicationRegisterConfig } from "./ApplicationRegisterConfig";
import type { CasIdPConfig } from "./CasIdPConfig";
import type { OauthIdpConfig } from "./OauthIdpConfig";
import type { OIDCConfig } from "./OIDCConfig";
import type { SamlIdpConfig } from "./SamlIdpConfig";
export type ApplicationDto = {
  /** * Application ID */ appId: string;
  /** * Apply unique identifier */ appIdentifier: string;
  /**
   * Application name*/
  appName: string;
  /**
   * Application Logo link*/
  appLogo: string;
  /**
   * Application description*/
  appDescription?: string;
  /**
* Application type* /
appType: ApplicationDto.appType;
/**
* User pool ID
*/
  userPoolId: string;
  /**
   * Is it an integrated application? */
  isIntegrateApp: boolean;
  /**
   * Default application protocol type */
  defaultProtocol: ApplicationDto.defaultProtocol
  /**
   * Application login callback address*/;
  redirectUris: Array<string>;
  /**
   * Application logout callback address*/
  logoutRedirectUris: Array<string>;
  /**
   * Login initiation address: In the GenAuth application details, click "Experience Login" or click the app icon in the app panel to jump to this page. URL, default is the GenAuth login page.
   */
  initLoginUri: string;
  /**
   * Whether to enable SSO single sign-on*/
  ssoEnabled: boolean;
  /**
   * Time to enable SSO single sign-on*/
  ssoEnabledAt?: string;
  /**
   * Login configuration*/
  loginConfig: ApplicationLoginConfigDto;
  /**
   * Registration configuration */
  registerConfig: ApplicationRegisterConfig;
  /**
   * Branding configuration */
  brandingConfig: ApplicationBrandingConfig;
  /**
   * OIDC protocol configuration */
  oidcConfig: OIDCConfig;
  /**
   * Whether to enable SAML identity provider */
  samlProviderEnabled: boolean;
  /**
   * SAML protocol configuration */
  samlConfig?: SamlIdpConfig;
  /**
   * Whether to enable OAuth identity provider */
  oauthProviderEnabled: boolean;
  /**
   * OAuth2.0 protocol configuration */
  oauthConfig?: OauthIdpConfig;
  /**
   * Whether to enable CAS identity provider */
  casProviderEnabled: boolean;
  /**
   * CAS protocol configuration */
  casConfig?: CasIdPConfig;
  /**
   * Whether to customize the login box of this application. The default is to use the global login box configuration.
   */
  customBrandingEnabled: boolean;
  /**
   * Whether to customize the security rules of this application. The default is to use the global security configuration.
   */
  customSecurityEnabled: boolean;
  /**
   * Template type of integrated application*/
  template?: string;
};

export namespace ApplicationDto {
  /**
   * Application type*/
  export enum appType {
    WEB = "web",
    SPA = "spa ",
    NATIVE = "native",
    API = "api",
    MFA = "mfa",
    MINI_PROGRAM = "mini-program",
    GATEWAY_APP = "gateway-app",
    GATEWAY_AGENT = "gateway-agent",
  }

  /**
   * Default Application protocol type*/
  export enum defaultProtocol {
    OIDC = "oidc",
    OAUTH = "oauth",
    SAML = "saml",
    CAS = "cas",
    ASA = "asa",
  }
}
