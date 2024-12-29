/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * According to the filter conditions, get the list of all roles under the permission group in paging.
 */
export type ListNamespaceRolesDto = {
    /**
     * Permission group unique identifier
     */
    code?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Role Code or name
     */
    keywords?: any;
};
