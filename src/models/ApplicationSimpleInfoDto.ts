/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplicationSimpleInfoDto = {
  /**
   * Application ID
   */
  appId: string;
  /**
   * Application unique identifier
   */
  appIdentifier: string;
  /**
   * Application name
   */
  appName: string;
  /**
   * Application Logo link
   */
  appLogo: string;
  /**
   * Application description
   */
  appDescription?: string;
  /**
   * Application type
   */
  appType: ApplicationSimpleInfoDto.appType;
  /**
   * Is it an integrated application
   */
  isIntegrateApp: boolean;
};

export namespace ApplicationSimpleInfoDto {
  /**
   * Application type
   */
  export enum appType {
    WEB = "web",
    SPA = "spa",
    NATIVE = "native",
    API = "api",
    MFA = "mfa",
    MINI_PROGRAM = "mini-program",
    GATEWAY_APP = "gateway-app",
    GATEWAY_AGENT = "gateway-agent",
  }
}
