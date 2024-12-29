/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationDefaultLoginMethod } from "./ApplicationDefaultLoginMethod";
import type { ApplicationEnabledExtIdpConnDto } from "./ApplicationEnabledExtIdpConnDto";

export type ApplicationLoginConfigDto = {
  /**
   * Whether to enable login and registration merge
   */
  mergeLoginAndRegisterPage: boolean;
  /**
   * Enable basic login method
   */
  enabledBasicLoginMethods: Array<
    | "PHONE_CODE"
    | "EMAIL_CODE"
    | "PHONE_PASSWORD"
    | "EMAIL_PASSWORD"
    | "USERNAME_PASSWORD"
    | "SELF_BUILT_APP_QRCODE"
  >;
  /**
   * Application default login method (excluding social login and enterprise identity source login)
   */
  defaultLoginMethod: ApplicationDefaultLoginMethod;
  /**
   * Enabled external identity source connection
   */
  enabledExtIdpConns: Array<ApplicationEnabledExtIdpConnDto>;
  /**
   * Whether to display the user authorization page
   */
  showAuthorizationPage: boolean;
};
