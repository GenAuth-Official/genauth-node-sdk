/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserFieldDecryptRespItemDto = {
  /**
   * User unique identifier, which can be user ID, username, email, mobile phone number, external ID, or ID in an external identity source.
   */
  userId?: string;
  /**
   * Field key name, such as username/phone
   */
  fieldName?: string;
  /**
   * Field decrypted content
   */
  decryptedContent: string;
};
