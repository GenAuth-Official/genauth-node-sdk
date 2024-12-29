/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the role list, support paging, support filtering based on permission grouping (permission space)
 */
export type ListRolesDto = {
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Used for fuzzy search based on the role's code or name, optional.
     */
    keywords?: any;
    /**
     * The code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: any;
};
