/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationBrandingConfigInputDto } from "./ApplicationBrandingConfigInputDto";
import type { ApplicationRegisterConfigInputDto } from "./ApplicationRegisterConfigInputDto";
import type { CasIdPConfig } from "./CasIdPConfig";
import type { OauthIdpConfig } from "./OauthIdpConfig";
import type { OIDCConfig } from "./OIDCConfig";
import type { SamlIdpConfig } from "./SamlIdpConfig";
import type { UpdateApplicationLoginConfigInputDto } from "./UpdateApplicationLoginConfigInputDto";

export type UpdateApplicationDto = {
  /**
   * Application ID
   */
  appId: string;
  /**
   * Application name
   */
  appName?: string;
  /**
   * Integrate application configuration information
   */
  templateData?: any;
  /**
   * Apply unique identifier
   */
  appIdentifier?: string;
  /**
   *App Logo link
   */
  appLogo?: string;
  /**
   * Application description information
   */
  appDescription?: string;
  /**
   *Default application protocol type
   */
  defaultProtocol?: UpdateApplicationDto.defaultProtocol;
  /**
   * Application login callback address
   */
  redirectUris?: Array<string>;
  /**
   * Application logout callback address
   */
  logoutRedirectUris?: Array<string>;
  /**
   * Initiate login address: When you click "Experience Login" in the GenAuth application details or click the application icon in the application panel, you will be redirected to this URL, which defaults to the GenAuth login page.
   */
  initLoginUri?: string;
  /**
   * Whether to enable SSO single sign-on
   */
  ssoEnabled?: boolean;
  /**
   * OIDC protocol configuration
   */
  oidcConfig?: OIDCConfig;
  /**
   * Whether to enable SAML identity provider
   */
  samlProviderEnabled?: boolean;
  /**
   * SAML protocol configuration
   */
  samlConfig?: SamlIdpConfig;
  /**
   * Whether to enable the OAuth identity provider
   */
  oauthProviderEnabled?: boolean;
  /**
   * OAuth2.0 protocol configuration. [Important note] OAuth2.0 is no longer recommended and it is recommended to switch to OIDC.
   */
  oauthConfig?: OauthIdpConfig;
  /**
   * Whether to enable CAS identity provider
   */
  casProviderEnabled?: boolean;
  /**
   * CAS protocol configuration
   */
  casConfig?: CasIdPConfig;
  /**
   * Login configuration
   */
  loginConfig?: UpdateApplicationLoginConfigInputDto;
  /**
   *Registration configuration
   */
  registerConfig?: ApplicationRegisterConfigInputDto;
  /**
   * Branding configuration
   */
  brandingConfig?: ApplicationBrandingConfigInputDto;
  /**
   * Whether unauthorized users can see the application in the application panel
   */
  ssoShowLaunchpad?: boolean;
  /**
   * Whether it is enabled to apply for permission, and the application must enable SSO single sign-on and unauthorized users can see the application configuration in the application panel
   */
  enablePermissionApply?: boolean;
};

export namespace UpdateApplicationDto {
  /**
   *Default application protocol type
   */
  export enum defaultProtocol {
    OIDC = "oidc",
    OAUTH = "oauth",
    SAML = "saml",
    CAS = "cas",
    ASA = "asa",
  }
}
