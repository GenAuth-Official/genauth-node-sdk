/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the list of organizations and support paging.
 */
export type ListOrganizationsDto = {
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Pull all
     */
    fetchAll?: any;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: any;
    /**
     * Whether to obtain department information
     */
    withPost?: any;
    /**
     * Tenant ID
     */
    tenantId?: any;
    /**
     * Status of the organization
     */
    status?: any;
};
