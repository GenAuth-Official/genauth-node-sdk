/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateFunctionModelDto = {
  /**
   * Display field key
   */
  showFieldKey: string;
  /**
   * Details page configuration
   */
  config: any;
  /**
   * Field order
   */
  fieldOrder: string;
  /**
   * Function type
   */
  type: UpdateFunctionModelDto.type;
  /**
   * Parent menu
   */
  parentKey: string;
  /**
   * Whether the function is enabled
   */
  enable: boolean;
  /**
   * Function description
   */
  description: string | null;
  /**
   * Function name
   */
  name: string;
  /**
   * Function id
   */
  id: string;
};

export namespace UpdateFunctionModelDto {
  /**
   * Function Type
   */
  export enum type {
    UEBA = "ueba",
    USER = "user",
    POST = "post",
    GROUP = "group",
    DEPARTMENT = "department",
    ORGANIZATION = "organization",
    DEVICE = "device",
    DEVICE_RELY = "device_rely",
    CUSTOM = "custom",
  }
}
