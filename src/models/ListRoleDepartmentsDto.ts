/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain the role's department list through the role code in the permission group, and support paging.
 */
export type ListRoleDepartmentsDto = {
    /**
     * The unique identifier of the role within the permission group
     */
    code?: any;
    /**
     * The code of the permission group it belongs to
     */
    namespace?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
};
