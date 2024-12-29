/* istanbul ignore file */ /* tslint:disable */ /* eslint-disable */ import type { ApplicationDefaultLoginMethodInput } from "./ApplicationDefaultLoginMethodInput";
import type { ApplicationEnabledExtIdpConnInputDto } from "./ApplicationEnabledExtIdpConnInputDto";
export type ApplicationLoginConfigInputDto = {
  /** * Whether to enable login and registration merge */ mergeLoginAndRegisterPage?: boolean;
  /** *Basic login method enabled */ enabledBasicLoginMethods?: Array<
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
   * Enabled external identity source connection*/
  enabledExtIdpConnIds?: Array<ApplicationEnabledExtIdpConnInputDto>;
  /**
   * Enable all external identity source connections*/
  enabledAllExtIdpConns?: boolean;
  /**
   * Whether to display the user authorization page*/
  showAuthorizationPage: boolean;
};
