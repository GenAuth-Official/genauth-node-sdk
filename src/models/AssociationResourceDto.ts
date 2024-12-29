/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AssociationResourceDto = {
  /**
   * Application ID
   */
  appId: string;
  /**
   * Whether to associate application resources
   */
  association: boolean;
  /**
   * Resource Code
   */
  code: string;
  /**
   * Tenant ID
   */
  tenantId?: string;
};
