/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UnlinkIdentity = {
  /**
   * Required, the GenAuth user ID for the binding operation.
   */
  userId: string;
  /**
   * Required, the identity source ID, used to specify which identity source the identity belongs to.
   */
  extIdpId: string;
  /**
   * Optional, indicates the specific type of the identity, which can be obtained from the type field of the user identity information. If not passed, the default is generic
   */
  type?: string;
  /**
   * Deprecated, can be passed in arbitrarily, and this field will be removed in the future.
   */
  isSocial?: boolean;
};
