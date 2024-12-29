/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserFieldDecryptReqItemDto } from "./UserFieldDecryptReqItemDto";

export type UserFieldDecryptReqDto = {
  /**
   * List of attributes that the user needs to decrypt
   */
  data: Array<UserFieldDecryptReqItemDto>;
  /**
   * Private key, obtained through console security settings-data security-data encryption
   */
  privateKey: string;
};
