/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get the invitation policy user belonging list
 */
export type ListInvitationPolicyUserAttributionsDto = {
    /**
     * Policy ID
     */
    policyId?: any;
    /**
     * Associated object type
     */
    targetType?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Whether to return associated object details
     */
    withTargetDetail?: any;
    /**
     * When the associated object is a department, whether to return other detailed information of the department, including namePath, codePath, idPath
     */
    withDepartmentExtInfo?: any;
};
