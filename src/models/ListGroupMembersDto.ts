/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain the group member list through the group code, support paging, and obtain custom data, identities, and department ID lists.
 */
export type ListGroupMembersDto = {
    /**
     * group code
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
     * Whether to flatten the extended field
     */
    flatCustomData?: any;
};
