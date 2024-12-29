/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RelationOptionalRange } from "./RelationOptionalRange";

export type UpdateFunctionModelFieldDto = {
  /**
   * Whether the user center is displayed, only meaningful in the user module:
   * - true: User center display
   * - false: User center is not displayed
   *
   */
  userVisible: boolean;
  /**
   * Optional range of associated data
   */
  relationOptionalRange: RelationOptionalRange;
  /**
   * Attributes to be displayed for associated data
   */
  relationShowKey: string;
  /**
   * Whether it can be used for login, only meaningful in the user module:
   * - true: Used for login
   * - false: Not used for login
   *
   */
  forLogin: boolean;
  /**
   * Whether fuzzy search is supported:
   * - true: Support fuzzy search
   * - false: Fuzzy search is not supported
   *
   */
  fuzzySearch: boolean;
  /**
   * Drop-down menu options
   */
  dropDown: Array<string>;
  /**
   * Front-end formatting rules
   */
  format: number;
  /**
   * String validation matching rules
   */
  regexp: string;
  /**
   * If the type is a number, it indicates the lower limit of the number. If the type is a date, it indicates the start date
   */
  min: number;
  /**
   * If the type is a number, it indicates the upper limit of the number. If the type is a date, it indicates the end date
   */
  max: number;
  /**
   * String length limit
   */
  maxLength: number;
  /**
   * Is it unique:
   * - true: unique
   * - false: not unique
   *
   */
  unique: boolean;
  /**
   * Is it required:
   * - true: required
   * - false: not required
   *
   */
  require: boolean;
  /**
   * Default value
   */
  default: any;
  /**
   * Help description
   */
  help: string;
  /**
   * Editable:
   * - true: editable
   * - false: not editable
   *
   */
  editable: boolean;
  /**
   * Display:
   * - true: display
   * - false: not display
   *
   */
  show: boolean;
  /**
   * Field name
   */
  name: string;
  /**
   * Function id
   */
  modelId: string;
  /**
   * Field id
   */
  id: string;
};
