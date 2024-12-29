/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain the identity source list in the tenant console, which can be filtered based on application ID.
 */
export type ListTenantExtIdpDto = {
    /**
     * Tenant ID
     */
    tenantId?: any;
    /**
     * Application ID
     */
    appId?: any;
    /**
     * Identity source type
     */
    type?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
};
