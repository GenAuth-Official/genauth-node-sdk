/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInByAdPayloadDto = {
  /**
   * User password, not encrypted by default. All APIs of GenAuth securely transmit passwords through the HTTPS protocol, which can ensure security to a certain extent.
   * If you need a higher level of security, we also support `RSA256` and national secret `SM2` password encryption methods. See the optional parameter `options.passwordEncryptType` for details.
   *
   */
  password: string;
  /**
   * sAMAccountName of the account in the Windows AD user directory
   */
  sAMAccountName: string;
};
