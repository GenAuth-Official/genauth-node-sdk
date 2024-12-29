/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplicationAgreementDto = {
  /**
   * Pages to display (multiple selections are allowed):
   * - `LoginPage`: Login page
   * - `RegisterPage`: Registration page
   *
   */
  displayAt: Array<"LoginPage" | "RegisterPage">;
  /**
   * Is it required to check?
   */
  isRequired: boolean;
  /**
   * For which languages ​​is this agreement valid:
   * - `zh-CN`: Simplified Chinese
   * - `zh-TW`: Traditional Chinese
   * - `en-US`: English
   * - `ja-JP`: Japanese
   *
   */
  lang: ApplicationAgreementDto.lang;
  /**
   * For which languages ​​is this agreement valid?
   */
  content: string;
};

export namespace ApplicationAgreementDto {
  /**
   * What languages ​​is this agreement valid for:
   * - `zh-CN`: Simplified Chinese
   * - `zh-TW`: Traditional Chinese
   * - `en-US`: English
   * - `ja-JP`: Japanese
   *
   */
  export enum lang {
    ZH_CN = "zh-CN",
    EN_US = "en-US",
    ZH_TW = "zh-TW",
    JA_JP = "ja-JP",
  }
}
