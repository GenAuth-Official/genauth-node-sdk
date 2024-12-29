/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserFieldDecryptReqItemDto = {
  /**
   * User unique identifier, which can be user ID, username, email, mobile number, external ID, or ID in an external identity source.
   */
  userId?: string;
  /**
   * Field key name, such as username/phone
   */
  fieldName?: string;
  /**
   * Field encrypted content
   */
  encryptedContent: string;
};
