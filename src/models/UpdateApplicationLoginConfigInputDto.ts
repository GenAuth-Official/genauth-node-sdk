/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationDefaultLoginMethodInput } from "./ApplicationDefaultLoginMethodInput";

export type UpdateApplicationLoginConfigInputDto = {
  /**
   * Whether to enable login and registration merge
   */
  mergeLoginAndRegisterPage?: boolean;
  /**
   * Enable basic login method
   */
  enabledBasicLoginMethods?: Array<
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
  defaultLoginMethod?: ApplicationDefaultLoginMethodInput;
  /**
   * Whether to display the user authorization page
   */
  showAuthorizationPage: boolean;
};
