/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppValidateRuleDto } from "./AppValidateRuleDto";
import type { CustomFieldI18n } from "./CustomFieldI18n";

export type ExtendsFieldDto = {
  /**
   * Field type
   * - `internal`: User built-in field
   * - `user`: User extended field
   */
  type: ExtendsFieldDto.type;
  /**
   * Field ID, required if field type is `user` and `metadata`
   */
  id: string;
  /**
   * Field name
   */
  name: string;
  /**
   * Field display name
   */
  label: string;
  /**
   * Whether to display
   */
  show: boolean;
  /**
   * Whether to allow user to overwrite
   */
  allowRewrite: boolean;
  /**
   * Field data type (refer to extended field configuration for details)
   * - `number`: array
   * - `datetime`: date
   * - `select`: enumeration
   * - `boolean`: Boolean value
   * - `string`: string
   */
  inputType: ExtendsFieldDto.inputType;
  /**
  * Is it required?: boolean;
  /**
  * Validation rules
  */
  validateRules?: AppValidateRuleDto;
  /**
   * Field source
   */
  source: ExtendsFieldDto.source;
  /**
   * Multi-language display name
   */
  i18n?: CustomFieldI18n;
};

export namespace ExtendsFieldDto {
  /**
   * Field type
   * - `internal`: User built-in field
   * - `user`: User extended field
   */
  export enum type {
    USER = "user",
    INTERNAL = "internal",
  }

  /**
   * Field data type (refer to extended field configuration for details)
   * - `number`: Array
   * - `datetime`: Date
   * - `select`: Enumeration
   * - `boolean`: Boolean value
   * - `string`: String
   */
  export enum inputType {
    IMAGE = "image",
    NUMBER = "number",
    DATE = "date",
    DATE_TIME = "dateTime",
    DATETIME = "datetime",
    SELECT = "select",
    DROPDOWN = "dropdown",
    BOOLEAN = "boolean",
    STRING = "string",
    TEXT = "text",
    GENDER = "gender",
    COUNTRY = "country",
    USERNAME = "username",
    PHONE = "phone",
    EMAIL = "email",
  }
  /** * Field source */ export enum source {
    PRESET = "preset",
    MANUAL_ADD = "manual_add",
  }
}
