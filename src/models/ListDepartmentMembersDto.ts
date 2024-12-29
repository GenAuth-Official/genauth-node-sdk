/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the list of department members through organization code, department ID, sorting, support paging, and you can choose to obtain custom data, identities, etc.
 */
export type ListDepartmentMembersDto = {
    /**
     *Organization code
     */
    organizationCode?: any;
    /**
     * Department ID, the root department passes `root`
     */
    departmentId?: any;
    /**
     * Sort by
     */
    sortBy?: any;
    /**
     *In ascending or descending order
     */
    orderBy?: any;
    /**
     * The type of department ID used in this call
     */
    departmentIdType?: any;
    /**
     * Whether to include members of sub-departments
     */
    includeChildrenDepartments?: any;
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
     * Whether to obtain identities
     */
    withIdentities?: any;
    /**
     * Whether to obtain the department ID list
     */
    withDepartmentIds?: any;
    /**
     * Tenant ID
     */
    tenantId?: any;
};
