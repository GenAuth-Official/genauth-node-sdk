/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyDeleteAccountRequestDataDto = {
  /**
   * Temporary Token for account cancellation. You need to call the **Account Cancellation** interface to perform the actual account cancellation operation.
   */
  deleteAccountToken: string;
  /**
   * Token validity period, the default is 60 seconds.
   */
  tokenExpiresIn: number;
};
