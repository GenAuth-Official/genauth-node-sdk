/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Search the organization list by searching keywords, and support paging.
 */
export type SearchOrganizationsDto = {
    /**
     * Search keywords, such as organization name
     */
    keywords?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: any;
    /**
     * Tenant ID
     */
    tenantId?: any;
};
