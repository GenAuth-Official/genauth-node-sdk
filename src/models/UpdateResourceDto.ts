/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResourceAction } from "./ResourceAction";

export type UpdateResourceDto = {
  /**
   * Resource unique identifier
   */
  code: string;
  /**
   * Resource description
   */
  description?: string;
  /**
   * Resource name
   */
  name?: string;
  /**
   * Operation type defined by the resource
   */
  actions?: Array<ResourceAction>;
  /**
   * URL identifier of the API resource
   */
  apiIdentifier?: string;
  /**
   * Code of the permission group (permission space), do not pass to obtain the default permission group.
   */
  namespace?: string;
  /**
   * Resource type, such as data, API, button, menu
   */
  type?: UpdateResourceDto.type;
};

export namespace UpdateResourceDto {
  /**
   * Resource type, such as data, API, button, menu
   */
  export enum type {
    DATA = "DATA",
    API = "API",
    MENU = "MENU",
    BUTTON = "BUTTON",
    UI = "UI",
  }
}
