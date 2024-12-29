/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the role authorization list.
 */
export type ListRoleAssignmentsDto = {
    /**
     * Role code, only letters, numbers and -_ can be used, up to 50 characters
     */
    roleCode?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Search by role code or role name
     */
    query?: any;
    /**
     * Permission space code
     */
    namespaceCode?: any;
    /**
     * Target type, accepting users, departments
     */
    targetType?: any;
};
