/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AssociationExtIdpDto = {
  /**
   * Whether to associate with identity source
   */
  association: boolean;
  /**
   * Identity source connection ID
   */
  id: string;
  /**
   * Tenant ID
   */
  tenantId?: string;
};
