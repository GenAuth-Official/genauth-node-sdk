/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApprovalUser = {
  /**
   * GenAuth user ID
   */
  userId: string;
  /**
   * User avatar address
   */
  photo: string;
  /**
   * User display name, take the first non-empty parameter in the following order: email, phone number, name, nickname, full name, surname, username, user ID
   */
  userName: string;
};
