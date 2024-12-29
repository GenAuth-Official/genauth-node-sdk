/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TenantDto = {
  /**
   * Tenant ID
   */
  tenantId: string;
  /**
   * User pool ID
   */
  userPoolId: string;
  /**
   * Tenant name
   */
  name: string;
  /**
   * Tenant description
   */
  description?: string;
  /**
   * Tenant logo
   */
  logo: string;
  /**
   * Prompt text displayed when a user is rejected by a tenant to log in
   */
  rejectHint?: string;
  /**
   * Application ID associated with the tenant
   */
  appIds: Array<string>;
  /**
   * ID of the creator user
   */
  creator: string;
  /**
   * Application ID of the tenant source. If this value does not exist, it means that the tenant source is the GenAuth console
   */
  sourceAppId: string;
  /**
   * Tenant source
   */
  source: string;
  /**
   * Tenant Code
   */
  code: string;
  /**
   * Tenant address
   */
  host: string;
  /**
   * Enterprise domain name configured by the tenant
   */
  enterpriseDomains: Array<string>;
};
