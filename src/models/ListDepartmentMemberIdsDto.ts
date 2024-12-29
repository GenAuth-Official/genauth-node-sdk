/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain the ID list of direct members of the department through the organization code and department ID.
 */
export type ListDepartmentMemberIdsDto = {
    /**
     *Organization code
     */
    organizationCode?: any;
    /**
     * Department ID, the root department passes `root`
     */
    departmentId?: any;
    /**
     * The type of department ID used in this call
     */
    departmentIdType?: any;
    /**
     * Tenant ID
     */
    tenantId?: any;
};
