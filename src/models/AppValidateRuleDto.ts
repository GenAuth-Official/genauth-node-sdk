/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ErrMsgI18nDto } from "./ErrMsgI18nDto";

export type AppValidateRuleDto = {
  /**
   * Field type
   * - `None`: No validation
   * - `regExp`: Regular expression
   * - `phone`: Phone number validation box
   * - `email`: Email validation box
   * - `isNumber`: Must be a number
   */
  type: AppValidateRuleDto.type;
  /**
   * Regular expression
   */
  content: AppValidateRuleDto.content;
  /**
   * Error message
   */
  errorMessage?: string;
  /**
   * Multi-language display
   */
  i18n?: ErrMsgI18nDto;
};

export namespace AppValidateRuleDto {
  /**
   * Field type
   * - `None`: No validation
   * - `regExp`: Regular expression
   * - `phone`: Phone number validation box
   * - `email`: Email validation box
   * - `isNumber`: Must be a number
   */
  export enum type {
    NONE = "None",
    REG_EXP = "regExp",
    PHONE = "phone",
    EMAIL = "email",
    IS_NUMBER = "isNumber",
  }

  /**
   * Regular expression
   */
  export enum content {
    NONE = "None",
    REG_EXP = "regExp",
    PHONE = "phone",
    EMAIL = "email",
    IS_NUMBER = "isNumber",
  }
}
