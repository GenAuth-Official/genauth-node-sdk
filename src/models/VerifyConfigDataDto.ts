/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyConfigDataDto = {
  /**
   * Primary key ID
   */
  id: string;
  /**
   * Application ID
   */
  appId: string;
  /**
   * Whether to enable Windows login takeover
   */
  isWinLogin?: boolean;
  /**
   * Whether to enable Windows password change takeover
   */
  isWinChangePwd?: boolean;
  /**
   * Key
   */
  appSecret: string;
  /**
   * Fixed value, public-key
   */
  publicKey: string;
  /**
   * Public key address
   */
  authAddress: string;
  /**
   * Application image
   */
  logo: string;
  /**
   * Application image
   */
  name: string;
};
