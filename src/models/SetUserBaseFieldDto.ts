/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldI18n } from "./CustomFieldI18n";

export type SetUserBaseFieldDto = {
  /**
   * The field key cannot conflict with the key of the built-in field. **It cannot be modified after it is set**.
   */
  key: string;
  /**
   * display name
   */
  label?: string;
  /**
   * Detailed description information
   */
  description?: string;
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
   *Multi-language display name
   */
  i18n?: CustomFieldI18n;
};
