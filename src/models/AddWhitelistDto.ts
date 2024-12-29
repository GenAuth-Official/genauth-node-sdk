/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddWhitelistDto = {
  /**
   * Whitelist type
   */
  type: AddWhitelistDto.type;
  /**
   * Type parameter
   */
  list?: Array<string>;
};

export namespace AddWhitelistDto {
  /**
   * Whitelist type
   */
  export enum type {
    USERNAME = "USERNAME",
    EMAIL = "EMAIL",
    PHONE = "PHONE",
  }
}
