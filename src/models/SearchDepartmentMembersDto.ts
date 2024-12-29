/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Search for members under the department through organization code, department ID, and search keywords. It supports paging and can choose to obtain custom data, identities, etc.
 */
export type SearchDepartmentMembersDto = {
    /**
     *Organization code
     */
    organizationCode?: any;
    /**
     * Department ID, the root department passes `root`
     */
    departmentId?: any;
    /**
     * Search keywords, such as member names
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
     * The type of department ID used in this call
     */
    departmentIdType?: any;
    /**
     * Whether to include members of sub-departments
     */
    includeChildrenDepartments?: any;
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
