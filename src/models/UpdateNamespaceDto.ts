/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateNamespaceDto = {
  /**
   * Permission group unique identifier
   */
  code: string;
  /**
   * Permission group description
   */
  description?: string;
  /**
   * Permission group name
   */
  name?: string;
  /**
   * Permission group new unique identifier
   */
  newCode?: string;
};
