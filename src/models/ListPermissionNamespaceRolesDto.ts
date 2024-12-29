/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Query the list of all roles in the permission space in paging, and get the list of all roles in the permission space in paging.
 */
export type ListPermissionNamespaceRolesDto = {
    /**
     * Permission group unique identifier Code
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
    query?: any;
};
