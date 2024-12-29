/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the user's built-in field list
 */
export type ListUserBaseFieldsDto = {
    /**
     * Target object type:
     * - `USER`: user
     * - `ROLE`: role
     * - `GROUP`: group
     * - `DEPARTMENT`: department
     * ;This interface does not currently support grouping (GROUP)
     */
    targetType?: any;
    /**
     *Field type
     */
    dataType?: any;
    /**
     * Tenant ID
     */
    tenantId?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Whether the user is visible
     */
    userVisible?: any;
    /**
     * Is the administrator visible?
     */
    adminVisible?: any;
    /**
     *Access control
     */
    accessControl?: any;
    /**
     * Search keywords
     */
    keyword?: any;
    /**
     * Search language
     */
    lang?: any;
};
