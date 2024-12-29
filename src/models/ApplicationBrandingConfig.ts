/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationAgreementDto } from "./ApplicationAgreementDto";

export type ApplicationBrandingConfig = {
  /**
   * Whether to enable custom CSS
   */
  customCSSEnabled: boolean;
  /**
   * Custom CSS content
   */
  customCSS?: string;
  /**
   * Guard version:
   * - `Advanced`: Advanced version
   * - `Classical`: Classic version
   *
   */
  guardVersion: ApplicationBrandingConfig.guardVersion;
  /**
   * Custom loading icon, which will be displayed when the login box is loaded
   */
  customLoadingImage?: string;
  /**
   * Custom login page background, example:
   * - Image background: `url(https://files.authing.co/user-contents/photos/6c6b3726-4a04-4ba7-b686-1a275f81a47a.png) center/cover`
   * - Solid color background: `rgba(37,49,122,1)`
   *
   */
  customBackground?: string;
  /**
   * Whether to display the language switch button
   */
  showChangeLanguageButton: boolean;
  /**
   * Default language:
   * - `zh-CN`: Simplified Chinese
   * - `zh-TW`: Traditional Chinese
   * - `en-US`: English
   * - `ja-JP`: Japanese
   *
   */
  defaultLanguage: ApplicationBrandingConfig.defaultLanguage;
  /**
   * Whether to display the forgot password button
   */
  showForgetPasswordButton: boolean;
  /**
   * Whether to display the enterprise identity source login method
   */
  showEnterpriseConnections: boolean;
  /**
   * Whether to display the social login method
   */
  showSocialConnections: boolean;
  /**
   * Whether to display the login registration agreement
   */
  showAgreement: boolean;
  /**
   * List of displayed login registration agreements
   */
  agreements: Array<ApplicationAgreementDto>;
};

export namespace ApplicationBrandingConfig {
  /**
   * Guard version:
   * - `Advanced`: Advanced Edition
   * - `Classical`: Classic Edition
   *
   */
  export enum guardVersion {
    ADVANCED = "Advanced",
    CLASSICAL = "Classical",
  }

  /**
   * Default language:
   * - `zh-CN`: Simplified Chinese
   * - `zh-TW`: Traditional Chinese
   * - `en-US`: English
   * - `ja-JP`: Japanese * */ export enum defaultLanguage {
    ZH_CN = "zh-CN",
    EN_US = "en-US",
    ZH_TW = "zh-TW",
    JA_JP = "ja-JP",
  }
}
