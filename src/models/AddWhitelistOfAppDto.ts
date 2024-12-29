/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddWhitelistOfAppDto = {
  /**
   * APP ID
   */
  appId: string;
  /**
   * Whitelist type
   */
  type: AddWhitelistOfAppDto.type;
  /**
   * Type parameter
   */
  list?: Array<string>;
};

export namespace AddWhitelistOfAppDto {
  /**
   * Whitelist type
   */
  export enum type {
    USERNAME = "USERNAME",
    EMAIL = "EMAIL",
    PHONE = "PHONE",
  }
}
