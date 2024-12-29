/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataResourceTreeStructs } from "./DataResourceTreeStructs";

export type UpdateDataResourceDto = {
  /**
   * Data resource Code, unique in the permission space
   */
  resourceCode: string;
  /**
   * The permission space to which the data resource belongs
   */
  namespaceCode: string;
  /**
   * Data resource name, unique in the permission space
   */
  resourceName?: string;
  /**
   * Data resource description
   */
  description?: string;
  /**
   * Data resource structure, supports string (STRING), tree structure (TREE) and array structure (ARRAY).
   */
  struct?: DataResourceTreeStructs | string | Array<string>;
  /**
   * Data resource permission operation list
   */
  actions?: Array<string>;
};
