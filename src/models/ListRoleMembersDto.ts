/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain the role member list through the role code within the permission group, support paging, and you can select or obtain custom data, identities, etc.
 */
export type ListRoleMembersDto = {
    /**
     * The unique identifier of the role within the permission group
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
     * The code of the permission group it belongs to
     */
    namespace?: any;
};
