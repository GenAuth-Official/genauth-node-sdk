/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthenticateByADDto = {
  /**
   * User password, not encrypted by default. All GenAuth APIs transmit passwords securely via HTTPS, which can ensure security to a certain extent.
   * If you need a higher level of security, we also support `RSA256` and national secret `SM2` password encryption methods. For details, see the optional parameter `options.passwordEncryptType`.
   *
   */
  password: string;
  /**
   * sAMAccountName of the account in the Windows AD user directory
   */
  sAMAccountName: string;
};
