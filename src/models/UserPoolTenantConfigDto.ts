/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationLoginConfigDto } from "./ApplicationLoginConfigDto";
import type { ISsoPageCustomizationSettingsDto } from "./ISsoPageCustomizationSettingsDto";

export type UserPoolTenantConfigDto = {
  /**
   * UserPool ID
   */
  userPoolId: string;
  /**
   * Is the user pool a tenant?
   */
  isUserPoolAsTenant: boolean;
  /**
   * Types of allowed switching
   */
  enableSwitchType: UserPoolTenantConfigDto.enableSwitchType;
  /**
   * Custom CSS
   */
  css: string;
  /**
   * Whether to enable custom CSS
   */
  cssEnabled: boolean;
  /**
   * Custom Loading
   */
  customLoading: string;
  /**
   * Whether to enable Guard switching
   */
  enableGuardVersionSwitch: boolean;
  /**
   * Version of Guard used
   */
  guardVersion: string;
  /**
   * Custom Loading background
   */
  loadingBackground: string;
  /**
   * Whether to allow tenant creation
   */
  enableCreateTenant: boolean;
  /**
   * Allow tenant creation scenes
   */
  createTenantScenes: Array<string>;
  /**
   * Whether to allow tenant joining
   */
  enableJoinTenant: boolean;
  /**
   * Allow to create joining scenes
   */
  joinTenantScenes: Array<string>;
  /**
   * Whether to verify the enterprise domain name
   */
  enableVerifyDomain: boolean;
  /**
   * Verify the enterprise domain name scenes
   */
  verifyDomainScenes: Array<string>;
  /**
   * Page customization configuration
   */
  ssoPageCustomizationSettings: ISsoPageCustomizationSettingsDto;
  /**
   * Whether to allow portal login
   */
  enableMultipleTenantPortal: boolean;
  /**
   * Login configuration
   */
  loginConfig: ApplicationLoginConfigDto;
};

export namespace UserPoolTenantConfigDto {
  /**
   * Types of allowed switches
   */
  export enum enableSwitchType {
    TENANT_CONSOLE = "tenant-console",
    TENANT_APP = "tenant-app",
    TENANT_LAUNPAD = "tenant-launpad",
  }
}
