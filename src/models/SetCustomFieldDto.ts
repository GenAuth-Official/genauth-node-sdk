/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldI18n } from "./CustomFieldI18n";
import type { CustomFieldSelectOption } from "./CustomFieldSelectOption";

export type SetCustomFieldDto = {
  /**
   * Subject type, currently supports users, roles, groups and departments
   */
  targetType: SetCustomFieldDto.targetType;
  /**
   * The field key cannot conflict with the key of the built-in field. **It cannot be modified after it is set**.
   */
  key: string;
  /**
   * Data type, **cannot be modified after setting**.
   * - `STRING`: string type
   * - `NUMBER`: numeric type
   * - `DATETIME`: date type
   * - `BOOLEAN`: Boolean type
   * - `ENUM`: enumeration value type
   *
   */
  dataType?: SetCustomFieldDto.dataType;
  /**
   * display name
   */
  label?: string;
  /**
   * Detailed description information
   */
  description?: string;
  /**
   * Whether to encrypt storage. When turned on, the **new data** in this field will be encrypted. Once this parameter is set, it cannot be changed.
   */
  encrypted?: boolean;
  /**
   * Whether it is a unique field. After turning it on, the value reported by the current field will be uniquely verified. This parameter is only for
   */
  isUnique?: boolean;
  /**
   * Whether the user can edit
   */
  userEditable?: boolean;
  /**
   * Whether it needs to be displayed in the GenAuth console:
   * - If it is a user-defined field, control whether it is displayed in user details;
   * - If it is a department custom field, control whether it is displayed in department details;
   * - If it is a role extension field, control whether it is displayed in the role details.
   *
   */
  visibleInAdminConsole?: boolean;
  /**
   * Whether to display in the user's personal center (this parameter does not control whether the API interface returns).
   */
  visibleInUserCenter?: boolean;
  /**
   * Verification rules
   */
  validateRules?: any;
  /**
   * App ID list
   */
  appIds?: Array<string>;
  /**
   * Desensitization
   */
  desensitization?: boolean;
  /**
   * Enumeration value type options
   */
  options?: Array<CustomFieldSelectOption>;
  /**
   *Multi-language display name
   */
  i18n?: CustomFieldI18n;
};

export namespace SetCustomFieldDto {
  /**
   * Subject type, currently supports users, roles, groups and departments
   */
  export enum targetType {
    USER = "USER",
    ROLE = "ROLE",
    GROUP = "GROUP",
    DEPARTMENT = "DEPARTMENT",
  }

  /**
   * Data type, **cannot be modified after setting**.
   * - `STRING`: string type
   * - `NUMBER`: numeric type
   * - `DATETIME`: date type
   * - `BOOLEAN`: Boolean type
   * - `ENUM`: enumeration value type
   *
   */
  export enum dataType {
    STRING = "STRING",
    NUMBER = "NUMBER",
    DATETIME = "DATETIME",
    BOOLEAN = "BOOLEAN",
    ENUM = "ENUM",
  }
}
